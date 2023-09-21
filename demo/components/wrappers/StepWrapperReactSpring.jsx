import React, { useEffect } from 'react'
import { useTransition, animated, useSpringRef } from '@react-spring/web'
import DefaultStepContentRenderer from '../DefaultStepContentRenderer'
import { useWizard } from '@/index'
import { useFormikContext } from 'formik'

function StepWrapperFramerReactSpring({ activeStep, steps, isAnimated }) {
  const wizard = useWizard()
  const { values } = useFormikContext()

  const transRef = useSpringRef()
  const transitions = useTransition(activeStep.id, {
    ref: transRef,
    keys: null,
    initial: null,
    from: { opacity: 0  },
    enter: { opacity: 1 },
    leave: { opacity: 0  },
    exitBeforeEnter: true,
    config: {
      duration: 250
    }
  })

  useEffect(() => {
    transRef.start()
  }, [activeStep.id])

  let initialValues = wizard.values[activeStep.id] || activeStep.initialValues

  return (
    <>
      {isAnimated ? (
        <>
          {transitions((style, i) => {
            const step = steps.find(step => step.id === i)
            initialValues = wizard.values[step.id] || step.initialValues
            return (
            <animated.div style={isAnimated ? { ...style } : {}}>
              {step.component || (
                <DefaultStepContentRenderer
                  activeStep={step}
                  initialValues={initialValues}
                  values={values}
                />
              )}
            </animated.div>
            )
          })}
        </>
      ) : (
        <>
          {activeStep.component || (
            <DefaultStepContentRenderer
              activeStep={activeStep}
              initialValues={initialValues}
              values={values}
            />
          )}
        </>
      )}
    </>
  )
}

export default StepWrapperFramerReactSpring
