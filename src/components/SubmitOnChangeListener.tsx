import { useEffect } from 'react'
import { useFormikContext } from 'formik'
import { StepConfig as Step } from '../types'

interface Props {
  step: Step
}

function SubmitOnChangeListener({ step }: Props) {
  const { submitForm, setFieldValue } = useFormikContext()

  useEffect(() => {
    const fieldNames = getInitialValuesFieldNames(step)
    if (!fieldNames) {
      return
    }
    fieldNames.forEach((fieldName: string) => {
      const inputs = document.querySelectorAll(`input[name='${fieldName}']`)
      for (let i = 0; i < inputs.length; ++i) {
        inputs[i].addEventListener('click', (e) => {
          const value = (e.target as HTMLInputElement).value
          setFieldValue(fieldName, value)
          setTimeout(submitForm, 0)
        })
      }
    })
  }, [])

  function getInitialValuesFieldNames(step: Step) {
    if (!step.initialValues) {
      return []
    }
    return Object.keys(step.initialValues)
  }

  return null
}

export default SubmitOnChangeListener
