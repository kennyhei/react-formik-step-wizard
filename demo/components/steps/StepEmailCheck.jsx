import React from 'react'
import { useWizard } from '@/index'

function StepEmailCheck() {
  const { goToStep } = useWizard()

  return (
    <div className='prose max-w-none'>
      <h2 className='text-white'>Warning</h2>
      <p>Seems like you did not fill your email. Would you like to do it?</p>
      <p><b>Note:</b> This step is automatically skipped if user filled their email in the first step.</p>
      <div className='flex gap-4'>
        <button className='btn text-white' type='submit'>No</button>
        <button className='btn text-white' type='button' onClick={() => goToStep(0)}>Yes</button>
      </div>
    </div>
  )
}

export default StepEmailCheck
