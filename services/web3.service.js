import { ethers } from 'ethers'

/**
 *
 * Connect wallet
 *
 * @returns connected address
 */
export const connect = async () => {
  if (window && window.ethereum) {
    return await getProvider().send('eth_requestAccounts', [])
  }
}

/**
 *
 * Get provider
 *
 * @returns provider
 */
export const getProvider = () => {
  if (window && window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum, 'any')
  }
}

/**
 *
 * Get signer
 *
 * @returns signer
 */
export const getSigner = () => {
  return getProvider().getSigner()
}

/**
 *
 * Get connected address
 *
 * @returns Connected address
 */
export const getConnectedAddress = async () => {
  try {
    return await getSigner().getAddress()
  } catch (e) {
    return null
  }
}

/**
 *
 * Sign message
 *
 * @param {string} message
 * @returns hex message
 */
export const signMessage = async message => {
  return await getSigner().signMessage(message)
}

/**
 *
 * Listen network change event
 *
 */
export const listenNetworkChange = async () => {
  getProvider().on('network', (newNetwork, oldNetwork) => {
    if (oldNetwork) {
      window.location.reload()
    }
  })
}

/**
 *
 * Listen account change event
 *
 * @param {function} callback function
 */
export const listenAccountChange = async callback => {
  window.ethereum.on('accountsChanged', callback)
}

/**
 *
 * Listen disconnect event
 *
 */
export const listenDisconnect = async () => {
  window.ethereum.on('accountsChanged', accounts => {
    if (!accounts.length) {
      window.location.reload()
    }
  })
}
