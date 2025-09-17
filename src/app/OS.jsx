import React, { lazy, Suspense } from 'react'
import PageLoader from '~/components/PageLoader'

const MainApp = lazy(() => import('./MainApp'))

const DefaultApp = () => (
  <Suspense fallback={PageLoader}>
    <MainApp />
  </Suspense>
)

export default function OS() {
  return (
    <DefaultApp />
  )
}
