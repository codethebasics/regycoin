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
        await Web3Service.listenNetworkChange()
        Web3Service.listenDisconnect()
        Web3Service.listenAccountChange(accounts => {
          setAddress(accounts[0])
        })
      }
    }
    fetchWeb3Info()
  }, [])

  /**
   *
   */
  const connectWallet = async () => {
    await Web3Service.connect()
    window.location.reload()
  }

  /**
   *
   */
  const shortenWalletAddress = address => {
    return `${address.substring(0, 4)}...${address.substring(
      address.length - 4,
      address.length
    )}`
  }

  return (
    <Box className={styles.header} backgroundColor={'#222'} px={5} py={2}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Image src='/img/regy.png' alt='regy' width={150} />
        <Button
          size={'sm'}
          colorScheme='yellow'
          onClick={connectWallet}
          border={'2px solid #222'}
          boxShadow={'0 3px 10px #222'}
        >
          {address ? shortenWalletAddress(address) : 'Conectar'}
        </Button>
      </Flex>
    </Box>
  )
}
