import { Flex, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import * as Web3Service from '../../../services/web3.service'

export default function Footer() {
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
    return `${address.substring(0, 4)}...${address.substring(
      address.length - 4,
      address.length
    )}`
  }

  /**
   *
   */
  return (
    <Flex p={5} background='#222' color='#fff' justifyContent='center'>
      <Button colorScheme='yellow' onClick={connectWallet}>
        {address ? shortenWalletAddress(address) : 'Connect'}
      </Button>
    </Flex>
  )
}
