import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import 'i18n'
import './index.scss'
import { Loader } from 'components/loader/Loader'

const App = lazy(() => import('./components/app/App').then((module) => ({ default: module.App })))

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
)
