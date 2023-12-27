import '@/styles/globals.css'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
 
  return (
      <Component {...pageProps} />
  )
}
