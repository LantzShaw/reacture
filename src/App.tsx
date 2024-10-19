// import React, { Suspense } from 'react'

// // import Loading from './comonents/Loading'

// // const Home = React.lazy(() => import('./views/Home'))

// export default function App() {
//   return (
//     <><div>dd</div></>
//   )

// // export default App

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}
