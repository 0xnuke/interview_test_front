import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import '@/styles/globals.css'

config.autoAddCss = false;

const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  )
}

export default App;