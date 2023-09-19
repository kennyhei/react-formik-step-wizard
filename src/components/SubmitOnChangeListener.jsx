import React, { useEffect } from 'react'
import { useFormikContext } from 'formik'

function SubmitOnChangeListener({ step }) {
  const { submitForm, setFieldValue } = useFormikContext()

  useEffect(() => {
    const fieldNames = getInitialValuesFieldNames(step)
    if (!fieldNames) {
      return
    }
    fieldNames.forEach(fieldName => {
      const inputs = document.querySelectorAll(`input[name='${fieldName}']`)
      for (let i = 0; i < inputs.length; ++i) {
        inputs[i].addEventListener('click', (e) => {
          setFieldValue(fieldName, e.target.value)
          setTimeout(submitForm, 0)
        })
      }
    })
  }, [])

  function getInitialValuesFieldNames(step) {
    if (!step.initialValues) {
      return []
    }
    return Object.keys(step.initialValues)
  }

  return null
}

export default SubmitOnChangeListener
