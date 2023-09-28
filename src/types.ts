import 'vite/client'

export interface Values {
  [field: string]: any
}

export interface WizardValues {
  [stepId: string]: Values
}

export interface StepConfig {
  /**
   * Unique ID for step component. Used for two purposes:
   * 1. Serves as a key when retrieving inputted form values from `useWizard`
   * 
   * @example
   * ```jsx
   * const steps = [{ id: 'Step1', component: <Step1 />, initialValues: { name: '' } }]
   * ...
   * const { values } = useWizard()
   * console.log(values.Step1.name)
   * ```
   * 
   * 2. If `Wizard.enableHash` is `true`, ID is converted to URL-friendly hash.
  */
  readonly id: string,
  /** Component used for rendering step content */
  readonly component?: React.ReactNode,
  /** Initial values of the step's form */
  initialValues?: {
    [field: string]: any
  },
  /** Submits step's form when 'onchange' event is triggered for any field */
  submitOnChange?: boolean,
  /** Indicates whether to hide submit button */
  hideNext?: boolean,
  /** Indicates whether to hide "Previous" button */
  hidePrevious?: boolean,
  /** Indicates whether to disable submit button */
  disableNext?: boolean,
  /** Indicates whether to disable submit button if form has errors */
  disableNextOnErrors?: boolean,
  /** Indicates whether to disable "Previous" button */
  disablePrevious?: boolean,
  /**
   * Remembers inputted values in current step if user decides
   * to navigate back to previous step without submitting the form
   **/
  keepValuesOnPrevious?: boolean,
  /**
   * Function that returns boolean telling whether the step should be skipped or not
   * 
   * @param allValues Object containing all form field values from previous steps
   * @param direction Number. Indicates whether we came to this step by pressing "Previous" (-1) or "Next" (1)
   * @returns true if step should be skipped, false otherwise
   */
  shouldSkip?: (allValues: WizardValues, direction: number) => boolean
  /**
   * Custom submit handler that's called when form is successfully submitted
   * 
   * @param stepValues Form field values inputted in current step
   * @param allValues Object containing all form field values from previous steps
   * @param actions Includes Formik helper functions
   * @returns stepValues
   */
  onSubmit?: (stepValues: Values, allValues: WizardValues, actions : any) => Values
  /**
   * Validation function. Must return an error object where that object's keys map to corresponding value
   * 
   * @param stepValues Form field values inputted in current step
   * @param allValues Object containing all form field values from previous steps
   * @returns Object where keys represent field and value represents error message. Return nothing if there are no errors.
   */
  validate?: (stepValues: Values, allValues: WizardValues) => object
  /** A Yup schema or a function that returns a Yup schema */
  validationSchema?: any,
  /** Tells Formik to validate the form on each input's onBlur event */
  validateOnBlur?: boolean,
  /** Tells Formik to validate the form on each input's onChange event */
  validateOnChange?: boolean,
  // Allow extra attributes defined by user
  [field: string]: any
}

export interface WizardProps {
  steps: StepConfig[],
  onCompleted?: (values : Values) => void,
  onStepChanged?: (fromStep: StepConfig | undefined, toStep: StepConfig | undefined, allValues: WizardValues) => void,
  enableHash?: boolean,
  header?: React.ReactNode,
  wrapper?: React.ReactNode,
  footer?: React.ReactNode
}

export interface WizardContextValues {
  values: WizardValues,
  setValues: (newValues : WizardValues) => void,
  setHideNext: (truthy : boolean) => void,
  setDisableNext: (truthy : boolean) => void,
  setHidePrevious: (truthy: boolean) => void,
  setDisablePrevious: (truthy: boolean) => void,
  setIsLoading: (truthy: boolean) => void,
  goToPreviousStep: () => void,
  goToNextStep: () => void,
  goToStep: (index : number) => void,
  activeStep: StepConfig,
  stepNumber: number,
  totalSteps: number,
  isLoading: boolean,
  isFirstStep: boolean,
  isLastStep: boolean,
  hidePrevious?: boolean,
  hideNext?: boolean,
  disableNext?: boolean,
  disablePrevious?: boolean,
  disableNextOnErrors?: boolean,
  onClickDisabledNext?: () => Promise<void>
}
