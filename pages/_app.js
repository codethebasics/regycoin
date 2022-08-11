import { ChakraProvider } from '@chakra-ui/react'
import Footer from '../components/layout/footer/Footer'
import Header from '../components/layout/header/Header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className='mainWrapper'>
        <div className='header'>
          <Header />
        </div>
        <div className='body'>
          <Component {...pageProps} />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </ChakraProvider>
  )
}

export default MyApp
