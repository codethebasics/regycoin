const { expect } = require('chai')
const { loadFixture } = require('ethereum-waffle')
const { ethers } = require('hardhat')

/**
 * -----------------
 * Test RegyCoin.sol
 * -----------------
 * @author codethebasics
 */
describe('RegyCoin test', async () => {
  /**
   * -------
   * Fixture
   * -------
   */
  const deployRegyCoin = async () => {
    // Define owner
    const [owner] = await ethers.getSigners()

    // Define token parameters
    const tokenName = 'RegyCoin'
    const tokenSymbol = 'REGY'
    const tokenDecimals = 18
    const tokenInitialSupply = '1000000000000'
    const tokenOwnerAddress = owner.address

    // Deploying token
    const RegyCoin = await ethers.getContractFactory('RegyCoin')
    const regyCoin = await RegyCoin.connect(owner).deploy(
      tokenName,
      tokenSymbol,
      tokenDecimals,
      tokenInitialSupply,
      tokenOwnerAddress
    )
    await regyCoin.deployed()

    return {
      tokenName,
      tokenSymbol,
      tokenDecimals,
      tokenInitialSupply,
      tokenOwnerAddress,
      regyCoin
    }
  }

  /**
   * ---------------
   * Test token name
   * ---------------
   */
  it('Should have RegyCoin as token name', async () => {
    const { tokenName, regyCoin } = await loadFixture(deployRegyCoin)
    expect(await regyCoin.name()).to.be.equal(tokenName)
  })

  /**
   * -----------------
   * Test token symbol
   * -----------------
   */
  it('Should have REGY as token symbol', async () => {
    const { tokenSymbol, regyCoin } = await loadFixture(deployRegyCoin)
    expect(await regyCoin.symbol()).to.be.equal(tokenSymbol)
  })

  /**
   * -------------------
   * Test token decimals
   * -------------------
   */
  it('Should have 18 decimals', async () => {
    const { tokenDecimals, regyCoin } = await loadFixture(deployRegyCoin)
    expect(await regyCoin.decimals()).to.be.equal(tokenDecimals)
  })

  /**
   * -------------------------
   * Test token initial supply
   * -------------------------
   */
  it('Should have initial supply of 1000000000000', async () => {
    const { tokenOwnerAddress, tokenInitialSupply, regyCoin } = await loadFixture(deployRegyCoin)
    const ownerBalance = await regyCoin.balanceOf(tokenOwnerAddress)
    const formattedOwnerBalance = ethers.utils.formatUnits(ownerBalance)
    const formattedInitialSupply = ethers.utils.formatUnits(ethers.utils.parseEther(tokenInitialSupply))

    expect(formattedOwnerBalance).to.be.equal(formattedInitialSupply)
  })

  /**
   * ------------------------
   * Test token owner address
   * ------------------------
   */
  it('Should have address 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 as owner', async () => {
    const { tokenOwnerAddress, regyCoin } = await loadFixture(deployRegyCoin)
    expect(await regyCoin.owner()).to.be.equal(tokenOwnerAddress)
  })
})
