import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import { Form, Formik } from 'formik'
import { WizardContext } from '@/helpers/hooks'
import SubmitOnChangeListener from '@/components/SubmitOnChangeListener'
import { buildHashSteps, resolveHashStep, updateHash } from '@/helpers/hash'

function flattenValues(wizardValues) {
  let data = {}
  Object.keys(wizardValues).forEach(stepId => {
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
}) {
  let initialStep = steps[0]
  let hashes = {}
  if (enableHash) {
    hashes = buildHashSteps(steps)
    initialStep = resolveHashStep(hashes) || initialStep
  }

  // State
  const [ activeStep, setActiveStep ] = useState(initialStep)
  const [ isLoading, setIsLoading ] = useState(false)
  // Gather data of all forms from each step here
  const [ values, setValues ] = useState({})
  const formikBag = useRef(null)

  // Variables
  const currentIndex = steps.findIndex(s => s.id === activeStep.id)
  const stepNumber = currentIndex + 1
  const totalSteps = steps.length
  const isFirstStep = stepNumber === 1
  const isLastStep = stepNumber === totalSteps

  // Hash logic
  useEffect(() => {
    if (!enableHash) {
      return
    }
    window.addEventListener('hashchange', handleHashChange)
    updateHash(hashes, activeStep)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [activeStep])

  function handleHashChange(e) {
    const step = resolveHashStep(hashes)
    if (step?.id === activeStep.id) {
      return
    }
    handleSetActiveStep(step, formikBag.current)
  }

  // Step resolve logic
  async function _getProceedingStep(remainingSteps, newValues, direction) {
    let proceedingStep
    for (let idx = 0; idx < remainingSteps.length; ++idx) {
      const step = remainingSteps[idx]
      if (!step.hasOwnProperty('shouldSkip')) {
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

  async function _resolveNextStep(newValues) {
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

  async function _resolvePreviousStep(newValues) {
    // Loop remaining steps backwards until non-skippable step is found
    const remainingSteps = steps.slice(0, currentIndex).reverse()
    const previousStep = await _getProceedingStep(remainingSteps, newValues, -1)
    return previousStep
  }

  // Step handlers
  function handleCompleted(values) {
    if (!onCompleted) {
      return
    }
    values = flattenValues(values)
    onCompleted(values)
  }

  function handleSetActiveStep(step, actions) {
    if (!step) {
      return
    }
    setActiveStep(step)
    // Immediately reset Formik with new initialValues.
    // `enableReinitialize` doesn't update Formik right away
    // with new step's initialValues, causing error message when
    // new step's <Field /> components don't match with provided
    // initialValues.
    actions.resetForm({ values: getInitialValues(step) })
  }

  async function handleNext(stepValues, actions) {
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
      handleSetActiveStep(nextStep, actions)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      actions.setStatus(error.message)
    }
  }

  async function handlePrevious(stepValues, actions) {
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
    handleSetActiveStep(previousStep, actions)
  }

  function handleValidate(validate) {
    if (!validate) {
      return null
    }
    return (stepValues) => {
      return validate(stepValues, values)
    }
  }

  // Utility functions
  function goToStep(index, actions) {
    handleSetActiveStep(steps[index], actions)
  }

  function setHideNext(truthy) {
    setActiveStep({ ...activeStep, hideNext: truthy })
  }

  function setDisableNext(truthy) {
    setActiveStep({ ...activeStep, disableNext: truthy })
  }

  // Misc
  function getInitialValues(step) {
    return values[step.id] || step.initialValues || {}
  }

  function getContext(props) {
    return {
      values,
      setValues,
      setHideNext,
      setDisableNext,
      setIsLoading,
      goToPreviousStep: () => handlePrevious(props.values, props),
      goToNextStep: () => handleNext(props.values, props),
      goToStep: (index) => goToStep(index, props),
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
      disableNextOnErrors: activeStep.disableNextOnErrors && !props.isValid,
      // allow form validation even if btn is disabled to show validation errors
      onClickNext: (activeStep.disableNext || activeStep.disableNextOnErrors) ? async () => {
        const res = await props.validateForm()
        // field error is not shown after validation if "touched" attribute is not set to true
        Object.keys(res).forEach(fieldName => {
          props.setFieldTouched(fieldName, true, false)
        })
      } : null
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
      {props => {
        const context = getContext(props)
        const content = wrapper || activeStep.component
        return (
          <WizardContext.Provider value={context}>
            <Form>
              {/* Header */}
              {header}
              {/* Step */}
              {activeStep.submitOnChange && (
                <SubmitOnChangeListener step={activeStep} />
              )}
              {content}
              {/* Footer */}
              {footer}
            </Form>
          </WizardContext.Provider>
        )
      }}
    </Formik>
  )
}

export default Wizard
