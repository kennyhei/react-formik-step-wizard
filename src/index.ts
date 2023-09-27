import Wizard from './wizard/Wizard'
import { useWizard } from './helpers/hooks'
import BasicFooter from './components/BasicFooter'
import {
  WizardValues as _WizardValues,
  WizardContextValues as _WizardContextValues,
  WizardProps as _WizardProps,
  StepValues as _StepValues
} from './types'

export type WizardValues = _WizardValues
export type WizardContextValues = _WizardContextValues
export type WizardProps = _WizardProps
export type StepValues = _StepValues

export { Wizard, useWizard, BasicFooter }
