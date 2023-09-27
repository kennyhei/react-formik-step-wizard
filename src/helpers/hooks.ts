import { createContext, useContext } from 'react'
import { WizardContextValue } from '@/types'

export const WizardContext = createContext<WizardContextValue | undefined>(undefined)

export function useWizard() {
  const context = useContext(WizardContext)
  if (context === undefined) {
    throw new Error('useWizard must be used within the Wizard app!')
  }
  return context
}
