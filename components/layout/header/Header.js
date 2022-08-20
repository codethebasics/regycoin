import { Box, Flex, Image, Button } from '@chakra-ui/react'
import styles from './Header.module.scss'
import { useState, useEffect } from 'react'
import * as Web3Service from '../../../services/web3.service'

export default function Header() {
  const [address, setAddress] = useState('')

  /**
   *
   */
  useEffect(() => {
    const fetchWeb3Info = async () => {
      if (window.ethereum) {
        setAddress(await Web3Service.getConnectedAddress())
        Web3Service.listenNetworkChange()
      }
    }
    fetchWeb3Info()
  }, [])

  /**
   *
   */
  const connectWallet = async () => {
    const _address = await Web3Service.connect()
    setAddress(_address[0])
  }

  /**
   *
   */
  const shortenWalletAddress = address => {
    return `${address.substring(0, 4)}...${address.substring(address.length - 4, address.length)}`
  }

  return (
    <Box className={styles.header} backgroundColor={'#222'} px={5} py={2}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Image src='/img/regy.png' alt='regy' width={150} />
        <Button size={'sm'} colorScheme='yellow' onClick={connectWallet}>
          {address ? shortenWalletAddress(address) : 'Connect'}
        </Button>
      </Flex>
    </Box>
  )
}
