import React from 'react'
import { useWizard } from '../helpers/hooks'


interface Props {
  textNext: string,
  textPrevious: string
}


function BasicFooter({ textNext, textPrevious }: Props) {
  let {
    goToPreviousStep,
    isLoading,
    hidePrevious,
    disablePrevious,
    hideNext,
    disableNext,
    disableNextOnErrors,
    onClickDisabledNext
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
          <div onClick={onClickDisabledNext}>
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
