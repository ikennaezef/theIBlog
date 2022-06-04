import '../styles/globals.css'
import Nav from '../components/Nav'
import Meta from '../components/Meta'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
