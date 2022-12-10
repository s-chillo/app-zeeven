import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { SessionProvider } from "next-auth/react"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const configs = {
  defaultOptions: {
    queries: {
      staleTime: 5,
      refetchOnWindowFocus: false
    },
  },
}
export default function App({ Component, pageProps: { dehydratedState, session, ...pageProps }}: AppProps) {
  const [queryClient] = useState(() => new QueryClient(configs))

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  )
}