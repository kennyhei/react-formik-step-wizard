import 'vite/client'

export interface Values {
  [field: string]: any
}

export interface WizardValues {
  [stepId: string]: Values
}

export interface StepValues {
  readonly id: string,
  readonly component?: React.ReactNode,
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
  shouldSkip?: (allValues: WizardValues, direction: number) => boolean
  onSubmit?: (stepValues: Values, allValues: WizardValues, actions : any) => Values
  validate?: (stepValues: Values, allValues: WizardValues) => object
  validationSchema?: any,
  validateOnBlur?: boolean,
  validateOnChange?: boolean,
  // Allow extra attributes defined by user
  [field: string]: any
}

export interface WizardProps {
  steps: StepValues[],
  onCompleted?: (values : Values) => void,
  onStepChanged?: (fromStep: StepValues | undefined, toStep: StepValues | undefined, allValues: WizardValues) => void,
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
  activeStep: StepValues,
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
