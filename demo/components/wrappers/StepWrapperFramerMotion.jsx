import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useFormikContext } from 'formik'
import DefaultStepContentRenderer from '../DefaultStepContentRenderer'

function StepWrapperFramerMotion({ activeStep, isAnimated }) {
  const { values, initialValues } = useFormikContext()

  let variants = {}
  if (isAnimated) {
    variants = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    }
  }

  return (
    <AnimatePresence initial={false} mode='wait'>
      <motion.div
        key={activeStep.id}
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ type: 'tween', duration: 0.25 }}
      >
        {activeStep.component || (
          <DefaultStepContentRenderer
            activeStep={activeStep}
            initialValues={initialValues}
            values={values}
           />
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default StepWrapperFramerMotion
