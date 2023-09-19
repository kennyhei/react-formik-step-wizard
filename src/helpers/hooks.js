import { createContext, useContext } from 'react'

export const WizardContext = createContext()

export function useWizard() {
  const context = useContext(WizardContext)
  if (context === undefined) {
    throw new Error('useWizard must be used within the Wizard app!')
  }
  return context
}
