import React, { useContext } from 'react'
import StepWrapperFramerMotion from './wrappers/StepWrapperFramerMotion'
import StepWrapperReactSpring from './wrappers/StepWrapperReactSpring'
import { AppContext } from '../main'
import { useWizard } from '@/index'

function StepWrapper({ mode='react-spring' }) {
  const { isAnimated } = useContext(AppContext)
  const { steps, activeStep } = useWizard()

  return (
    <div className='py-4 sm:pt-12 lg:pt-20 pb-20 sm:pb-32'>
      <div className='container mx-auto sm:px-0 px-5 max-w-lg min-w-min md:max-w-2xl lg:max-w-4xl'>
        {(mode === 'framer-motion') && (
          <StepWrapperFramerMotion
            isAnimated={isAnimated}
            activeStep={activeStep}
          />
        )}
        {(mode === 'react-spring') && (
          <StepWrapperReactSpring
            isAnimated={isAnimated}
            activeStep={activeStep}
            steps={steps}
          />
        )}
      </div>
    </div>
  )
}

export default StepWrapper
