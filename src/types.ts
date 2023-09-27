// TODO: component, shouldSkip, validate, validationSchema
// need fine-tuning
export interface Step {
  readonly id: string,
  readonly component: React.ReactNode,
  initialValues?: {
    [field: string]: any
  },
  submitOnChange?: boolean,
  hideNext?: boolean,
  hidePrevious?: boolean,
  disableNext?: boolean,
  disableNextOnErrors?: boolean,
  disablePrevious?: boolean,
  keepValuesOnPrevious?: boolean,
  shouldSkip?: (allValues: object, direction: number) => Promise<boolean>
  onSubmit?: (stepValues: object, allValues: object, actions : any) => Promise<object>
  validate?: (stepValues: object, allValues: object) => object
  validationSchema?: object,
  validateOnBlur?: boolean,
  validateOnChange?: boolean
}

export interface WizardProps {
  steps: Step[],
  onCompleted: (values : object) => void,
  onStepChanged: (fromStep: Step | undefined, toStep: Step | undefined, allValues: object) => void,
  enableHash?: boolean,
  header?: React.ReactNode,
  wrapper?: React.ReactNode,
  footer?: React.ReactNode
}

export interface WizardContextValue {
  values: object,
  setValues: (newValues : object) => void,
  setHideNext: (truthy : boolean) => void,
  setDisableNext: (truthy : boolean) => void,
  setHidePrevious: (truthy: boolean) => void,
  setDisablePrevious: (truthy: boolean) => void,
  setIsLoading: (truthy: boolean) => void,
  goToPreviousStep: () => void,
  goToNextStep: () => void,
  goToStep: (index : number) => void,
  activeStep: Step,
  stepNumber: number,
  totalSteps: number,
  isLoading: boolean,
  isFirstStep: boolean,
  isLastStep: boolean,
  hidePrevious: boolean | undefined,
  hideNext: boolean | undefined,
  disableNext: boolean | undefined,
  disablePrevious: boolean | undefined,
  disableNextOnErrors: boolean | undefined,
  onClickDisabledNext?: () => Promise<void>
}
