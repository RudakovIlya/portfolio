import { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import { Loader } from 'components/loader/Loader'
import 'i18n'
import './index.scss'

const App = lazy(() => import('./components/app/App'))

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
)
