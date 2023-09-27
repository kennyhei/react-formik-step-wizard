import React from 'react'
import { useWizard } from '../../src/index'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import ClipLoader from 'react-spinners/ClipLoader'


function Navigation() {
  let {
    goToPreviousStep,
    isFirstStep,
    isLoading,
    hidePrevious,
    hideNext,
    disableNext,
    disableNextOnErrors,
    onClickDisabledNext
  } = useWizard()
  disableNext = isLoading || disableNext || disableNextOnErrors

  return (
    <div className='navigation'>
      <div className={'navigation-wrapper ' + (hidePrevious ? 'justify-end' : 'justify-between')}>
        {/* "Previous" button */}
        {!hidePrevious && (
          <button
            onClick={goToPreviousStep}
            disabled={isFirstStep}
            type='button'
          >
            <BsArrowLeft className='w-8 h-8 fill-current' />
            <span>Previous</span>
          </button>
        )}
        {/* "Next" button */}
        {!hideNext && (
          <div onClick={onClickDisabledNext}>
            <button
              type='submit'
              disabled={disableNext}
            >
              {isLoading && (
                <span className='mr-1 loading'>
                  <ClipLoader size={11} color='#757575' />
                </span>
              )}
              <span>Next</span>
              <BsArrowRight className='w-8 h-8 fill-current' />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navigation
