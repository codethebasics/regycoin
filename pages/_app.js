import '../styles/globals.scss'

import Footer from '../components/layout/footer/Footer'
import Header from '../components/layout/header/Header'

import { Alert, AlertIcon } from '@chakra-ui/react'
import { ChakraProvider, Flex, Text, Link } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false)

  useEffect(() => {
    setIsMetaMaskInstalled(window.ethereum)
  }, [])

  const alertMetaMaskNotInstalled = () => {
    return (
      !isMetaMaskInstalled && (
        <Alert status='warning'>
          <AlertIcon />
          <Flex direction='column'>
            <Text fontSize='xs' fontWeight='bold'>
              Please install MetaMask before proceed
            </Text>
            <Link fontSize='xs' fontWeight='bold' color='dodgerblue' href='https://metamask.io/' isExternal>
              https://metamask.io/
            </Link>
          </Flex>
        </Alert>
      )
    )
  }

  return (
    <ChakraProvider>
      <div className='mainWrapper'>
        <div className='header'>
          {alertMetaMaskNotInstalled()}
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
