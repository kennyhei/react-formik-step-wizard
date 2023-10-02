import ReactDOM from 'react-dom/client'
import { Link, Route } from 'wouter'
import DemoPage from './pages/DemoPage'
import DocsPage from './pages/DocsPage'
import './styles/main.scss'

function App() {
  return (
    <div className="flex no-wrap">
      <ul className="menu menu-md bg-base-200 h-screen">
        <li>
          <Link href="/docs">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Docs
          </a>
          </Link>
        </li>
        <li>
          <Link href="/demo">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Demo
            </a>
          </Link>
        </li>
      </ul>
      <div className="w-full">
        <Route path="/demo" component={DemoPage} />
        <Route path="/docs" component={DocsPage} />
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
