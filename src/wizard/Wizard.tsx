import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import { Form, Formik, FormikHelpers, FormikProps } from 'formik'
import { WizardContext } from '@/helpers/hooks'
import SubmitOnChangeListener from '@/components/SubmitOnChangeListener'
import { buildHashSteps, resolveHashStep, updateHash } from '@/helpers/hash'
import { WizardProps, StepValues as Step, WizardContextValues, WizardValues, Values } from '@/types'

function flattenValues(wizardValues: WizardValues) {
  let data = {}
  Object.keys(wizardValues).forEach((stepId: string | number) => {
    data = {
      ...data,
      ...wizardValues[stepId]
    }
  })
  return data
}

function Wizard({
  steps,
  onCompleted,
  onStepChanged,
  enableHash,
  // Components
  header,
  wrapper,
  footer
} : WizardProps) {
  let initialStep : Step = steps[0]
  let hashes = {}
  if (enableHash) {
    hashes = buildHashSteps(steps)
    initialStep = resolveHashStep(hashes) || initialStep
  }

  // State
  const [ activeStep, setActiveStep ] = useState(initialStep)
  const [ isLoading, setIsLoading ] = useState<boolean>(false)
  // Gather data of all forms from each step here
  const [ values, setValues ] = useState<WizardValues>({})
  const formikBag = useRef(null)

  // Variables
  const currentIndex : number = steps.findIndex(s => s.id === activeStep.id)
  const stepNumber : number = currentIndex + 1
  const totalSteps : number = steps.length
  const isFirstStep : boolean = stepNumber === 1
  const isLastStep : boolean = stepNumber === totalSteps

  // Hash logic
  useEffect(() => {
    if (!enableHash) {
      return
    }
    window.addEventListener('hashchange', handleHashChange)
    updateHash(hashes, activeStep)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [activeStep])

  function handleHashChange() {
    const step = resolveHashStep(hashes)
    if (step?.id === activeStep.id) {
      return
    }
    handleSetActiveStep(step, formikBag.current)
  }

  // Step resolve logic
  async function _getProceedingStep(
    remainingSteps : Step[],
    newValues : WizardValues,
    direction : number
  ) {
    let proceedingStep
    for (let idx = 0; idx < remainingSteps.length; ++idx) {
      const step = remainingSteps[idx]
      // Check if "shouldSkip" attr exists
      if (step.shouldSkip === undefined) {
        proceedingStep = step
        break
      }
      const shouldSkip = await step.shouldSkip(newValues, direction)
      if (!shouldSkip) {
        proceedingStep = step
        break
      }
    }
    return proceedingStep
  }

  async function _resolveNextStep(newValues : WizardValues) {
    // Loop remaining steps until non-skippable step is found
    const remainingSteps = steps.slice(currentIndex + 1)
    const nextStep = await _getProceedingStep(remainingSteps, newValues, 1)
    // No next step found, wizard has been completed
    // so let's call handleCompleted
    if (!nextStep) {
      handleCompleted(newValues)
    }
    return nextStep
  }

  async function _resolvePreviousStep(newValues : WizardValues) {
    // Loop remaining steps backwards until non-skippable step is found
    const remainingSteps = steps.slice(0, currentIndex).reverse()
    const previousStep = await _getProceedingStep(remainingSteps, newValues, -1)
    return previousStep
  }

  // Step handlers
  function handleCompleted(values : WizardValues) {
    if (!onCompleted) {
      return
    }
    values = flattenValues(values)
    onCompleted(values)
  }

  function handleSetActiveStep(step : Step, actions : FormikHelpers<any> | null) {
    setActiveStep(step)
    // Immediately reset Formik with new initialValues.
    // `enableReinitialize` doesn't update Formik right away
    // with new step's initialValues, causing error message when
    // new step's <Field /> components don't match with provided
    // initialValues.
    if (actions) {
      actions.resetForm({ values: getInitialValues(step) })
    }
  }

  async function handleNext(stepValues : object, actions : FormikHelpers<any>) {
    try {
      // Run custom submit handler first
      if (activeStep.onSubmit) {
        actions.setStatus('')
        setIsLoading(true)
        stepValues = await activeStep.onSubmit(stepValues, values, actions)
        setIsLoading(false)
      }
      const wizardValues =  {
        ...values,
        [activeStep.id]: stepValues
      }
      setValues(wizardValues)
      const nextStep = await _resolveNextStep(wizardValues)
      // Additional handler when step is changed
      if (onStepChanged) {
        onStepChanged(activeStep, nextStep, wizardValues)
      }
      if (nextStep) {
        handleSetActiveStep(nextStep, actions)
      }
    } catch (error : any) {
      console.log(error)
      setIsLoading(false)
      actions.setStatus(error.message)
    }
  }

  async function handlePrevious(stepValues : object, actions : FormikHelpers<any>) {
    let wizardValues = null
    if (activeStep.keepValuesOnPrevious ?? true) {
      wizardValues = {
        ...values,
        [activeStep.id]: stepValues
      }
      setValues(wizardValues)
    }
    wizardValues = wizardValues || values
    const previousStep = await _resolvePreviousStep(wizardValues)
    // Additional handler when step is changed
    if (onStepChanged) {
      onStepChanged(activeStep, previousStep, wizardValues)
    }
    if (previousStep) {
      handleSetActiveStep(previousStep, actions)
    }
  }

  function handleValidate(validate : Step['validate']) {
    if (!validate) {
      return
    }
    return (stepValues : Values) => {
      return validate(stepValues, values)
    }
  }

  // Utility functions
  function goToStep(index : number, actions : FormikHelpers<any>) {
    handleSetActiveStep(steps[index], actions)
  }

  function setHideNext(truthy : boolean) {
    setActiveStep({ ...activeStep, hideNext: truthy })
  }

  function setDisableNext(truthy : boolean) {
    setActiveStep({ ...activeStep, disableNext: truthy })
  }

  function setHidePrevious(truthy : boolean) {
    setActiveStep({ ...activeStep, hidePrevious: truthy })
  }

  function setDisablePrevious(truthy : boolean) {
    setActiveStep({ ...activeStep, disablePrevious: truthy })
  }

  // Misc
  function getInitialValues(step : Step) {
    return values[step.id] || step.initialValues || {}
  }

  function getContext(props : FormikProps<any>) : WizardContextValues {
    return {
      values,
      setValues,
      setHideNext,
      setDisableNext,
      setHidePrevious,
      setDisablePrevious,
      setIsLoading,
      goToPreviousStep: () => handlePrevious(props.values, props),
      goToNextStep: () => handleNext(props.values, props),
      goToStep: (index : number) => goToStep(index, props),
      activeStep,
      stepNumber,
      totalSteps,
      isLoading,
      isFirstStep,
      isLastStep,
      // navigation
      hidePrevious: activeStep.hidePrevious,
      hideNext: activeStep.hideNext,
      disableNext: activeStep.disableNext,
      disablePrevious: activeStep.disablePrevious,
      disableNextOnErrors: activeStep.disableNextOnErrors && !props.isValid,
      // allow form validation even if btn is disabled to show validation errors
      onClickDisabledNext: (activeStep.disableNext || activeStep.disableNextOnErrors) ? async () => {
        const res = await props.validateForm()
        // field error is not shown after validation if "touched" attribute is not set to true
        Object.keys(res).forEach(fieldName => {
          props.setFieldTouched(fieldName, true, false)
        })
      } : undefined
    }
  }

  return (
    <Formik
      initialValues={getInitialValues(activeStep)}
      validationSchema={activeStep.validationSchema}
      validate={handleValidate(activeStep.validate)}
      validateOnChange={activeStep.validateOnChange ?? true}
      validateOnBlur={activeStep.validateOnBlur ?? true}
      onSubmit={handleNext}
      innerRef={formikBag}
    >
      {(props: FormikProps<any>) => {
        const context = getContext(props)
        const content = wrapper || activeStep.component
        return (
          <WizardContext.Provider value={context}>
            <Form>
              {header}
              {activeStep.submitOnChange && (
                <SubmitOnChangeListener step={activeStep} />
              )}
              {content}
              {footer}
            </Form>
          </WizardContext.Provider>
        )
      }}
    </Formik>
  )
}

export default Wizard
