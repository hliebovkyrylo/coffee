import type { AppProps } from 'next/app'
import "../styles/home-page.css"
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}