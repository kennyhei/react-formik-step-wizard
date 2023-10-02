import { useContext } from 'react'
import { useWizard } from '@/index'
import { AppContext } from '../pages/DemoPage'

function Header() {
  const { isAnimated, setIsAnimated } = useContext(AppContext)
  const { stepNumber, totalSteps } = useWizard()
  const completed = `${((stepNumber - 1) / (totalSteps - 1)) * 100}%`
  const baseUrl = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL

  return (
    <header className='pt-4 pb-3'>
      {/* Title, steps, source code link */}
      <div className='px-5 flex justify-between items-center prose max-w-none'>
        <h3 className='mb-0 text-base sm:text-xl'>react-formik-step-wizard</h3>
        <div className='flex items-center'>
          <div className='mr-3 text-sm'>
            <span className='hidden min-[400px]:inline'>Step</span> {stepNumber} / {totalSteps}
          </div>
          <a href='https://github.com/kennyhei/react-formik-step-wizard' target='_blank'>
            <img src={`${baseUrl}/github-mark-white.svg`} className='rounded-md w-9 my-0' />
          </a>
        </div>
      </div>
      {/* Progress bar */}
      <div className='w-full bg-gray-600 h-1 mt-[17px]'>
        <div
          style={{ width: completed }}
          className={'h-full bg-success transition-all ' + (isAnimated ?  'duration-500' : '')}
        />
      </div>
      {/* Toggle animation */}
      <div className='flex justify-end pr-5 prose max-w-none pt-1'>
        <label className='label cursor-pointer px-0'>
          <span className={'label-text pr-2 ' + (isAnimated ? 'text-success' : 'text-gray-300')}>Animate</span> 
          <input
            type='checkbox'
            className='toggle toggle-sm bg-gray-300 toggle-success'
            checked={isAnimated}
            onChange={() => setIsAnimated(!isAnimated)}
          />
        </label>
      </div>
    </header>
  )
}

export default Header
