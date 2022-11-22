import '../styles/globals.css'
import '../styles/scss/base.scss' // SCSS (mixins/utilities/variables)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
