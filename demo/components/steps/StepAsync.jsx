import React from 'react'

function StepAsync() {
  return (
    <div className='prose max-w-none'>
      <h2 className='text-white'>Async</h2>
      <p>Pressing "Next" does async operation that takes 2 seconds before we proceed to the next step.</p>
    </div>
  )
}

export default StepAsync
