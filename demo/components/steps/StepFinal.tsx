import React, { useState } from 'react'
import { useWizard } from '../../../src/index'

function StepFinal() {
  const { values, setHideNext } = useWizard()
  const [ truthy, setTruthy ] = useState(true)

  function toggle() {
    const res = !truthy
    setTruthy(res)
    setHideNext(res)
  }

  let data = {}
  Object.keys(values).forEach(stepId => {
    data = {
      ...data,
      ...values[stepId]
    }
  })

  return (
    <div className='prose prose-neutral max-w-none'>
      <h2>Congratulations!</h2>
      <div className='flex flex-wrap gap-4 justify-between'>
        <p className='my-0'>You did it <b>{values.Username.username}</b>! 🎉<br/>Here's your input:</p>
        <button className='btn text-white' onClick={toggle} type='button'>Toggle hideNext</button>
      </div>
      <code className='text-sm sm:text-base'>
        <pre className='mt-0'>
          {JSON.stringify(data, null, 2)}
        </pre>
      </code>
    </div>
  )
}

export default StepFinal
