/**
 * ------------------------------
 * Arquivo de deploy de contratos
 * ------------------------------
 * @author codethebasics
 */
const { ethers } = require('hardhat')
const hardhat = require('hardhat')

async function main() {
  // Obtendo carteiras de teste
  const [owner] = await ethers.getSigners()

  console.log()
  console.log('--------')
  console.log('RegyCoin')
  console.log('--------')

  // Parametros do construtor da token CRD
  const tokenName = 'RegyCoin'
  const tokenSymbol = 'REGY'
  const tokenDecimals = 18
  const tokenInitialSupply = '1000000000000'
  const tokenOwnerAddress = owner.address

  console.log('Name ..............:', tokenName)
  console.log('Symbol ............:', tokenSymbol)
  console.log('Decimals...........:', tokenDecimals)
  console.log('Supply ............:', tokenInitialSupply)
  console.log('Owner .............:', tokenOwnerAddress)
  console.log()

  // Realizando o deploy da token
  const RegyCoin = await hardhat.ethers.getContractFactory(tokenName)
  const regyCoin = await RegyCoin.deploy(
    tokenName,
    tokenSymbol,
    tokenDecimals,
    tokenInitialSupply,
    tokenOwnerAddress
  )

  // Aguardando o deploy ser efetuado
  await regyCoin.deployed()
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
