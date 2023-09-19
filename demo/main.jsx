import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import steps from './config/steps'
import WizardStepWrapper from './components/WizardStepWrapper'
import Navigation from './components/Navigation'
import Header from './components/Header'
import { Wizard } from '../src/index'
import './styles/main.scss'

export const AppContext = createContext()

function App() {
  const [ isAnimated, setIsAnimated ] = useState(false)
  return (
    <AppContext.Provider value={{ isAnimated, setIsAnimated }}>
      <Wizard
        enableHash
        steps={steps}
        onCompleted={values => console.log('wizard completed',  values)}
        onStepChanged={(stepValues, allValues) => console.log('step changed', stepValues, allValues)}
        header={<Header />}
        wrapper={<WizardStepWrapper />}
        footer={<Navigation />}
      />
    </AppContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
