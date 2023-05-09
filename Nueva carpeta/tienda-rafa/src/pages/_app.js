import Layout2 from '@/packages/components/@index/Layout2'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <div id='modal-root'/>
    </>
  )
}
