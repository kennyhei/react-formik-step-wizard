import { createContext, useState } from 'react'
import steps from '../config/steps'
import StepWrapper from '../components/StepWrapper'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import { Wizard } from '@/index'

interface AppContextValues {
  isAnimated: boolean,
  setIsAnimated: (truthy : boolean) => void
}
export const AppContext = createContext<AppContextValues>({} as AppContextValues)

function DemoPage() {
  const [ isAnimated, setIsAnimated ] = useState(true)
  return (
    <AppContext.Provider value={{ isAnimated, setIsAnimated }}>
      <Wizard
        enableHash
        steps={steps}
        onStepChanged={(fromStep, toStep, wizardValues) => {
          console.log('step changed', fromStep?.id, toStep?.id, wizardValues)
        }}
        header={<Header />}
        wrapper={<StepWrapper />}
        footer={<Navigation />}
      />
    </AppContext.Provider>
  )
}

export default DemoPage
