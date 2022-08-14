import { Flex, Text, Button } from '@chakra-ui/react'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false)
  const [connectedWallet, setConnectedWallet] = useState('')

  useEffect(() => {
    setIsMetaMaskInstalled(!!window.ethereum)
    setConnectedWallet(window?.ethereum?.selectedAddress)
  }, [])

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        await provider.send('eth_requestAccounts', [])
        const signer = provider.getSigner()
        setConnectedWallet(await signer.getAddress())
      } catch (e) {
        console.log(e)
      }
    }
  }

  const shortenWalletAddress = address => {
    return `${address.substring(0, 4)}...${address.substring(
      address.length - 4,
      address.length
    )}`
  }

  return (
    <Flex p={5} background='#222' color='#fff' justifyContent='center'>
      <Button
        colorScheme='yellow'
        disabled={!isMetaMaskInstalled}
        onClick={connectWallet}
      >
        {connectedWallet ? shortenWalletAddress(connectedWallet) : 'Connect'}
      </Button>
    </Flex>
  )
}
