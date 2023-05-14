import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'

import 'i18n'
import './index.scss'
import { Loader } from 'components/loader/Loader'

const App = lazy(() => import('./components/app/App').then((module) => ({default: module.App}) ))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Suspense fallback={<Loader/>}>
    <App />
  </Suspense>
)
