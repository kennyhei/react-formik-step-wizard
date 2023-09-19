import React from 'react'
import { useWizard } from '../helpers/hooks'


function BasicFooter({ textNext, textPrevious }) {
  let {
    goToPreviousStep,
    isLoading,
    hidePrevious,
    disablePrevious,
    hideNext,
    disableNext,
    disableNextOnErrors,
    onClickNext
  } = useWizard()
  disableNext = isLoading || disableNext || disableNextOnErrors

  return (
    <div className='navigation'>
      <div className={'navigation-wrapper ' + (hidePrevious ? 'justify-end' : 'justify-between')}>
        {/* 'Previous' button */}
        {!hidePrevious && (
          <button type='button' disabled={disablePrevious} onClick={goToPreviousStep}>
            {textPrevious || 'Previous'}
          </button>
        )}
        {/* 'Next' button */}
        {!hideNext && (
          <div onClick={onClickNext}>
            <button type='submit' disabled={disableNext}>
              {isLoading ? 'Loading...' : textNext || 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BasicFooter
