const { ethers, upgrades } = require('hardhat');
const { expect } = require('chai');
const helpers = require('./helpers');

describe('Project Tests', function () {
  let deployer, users, token;

  before(async () => {
    [deployer, ...users] = await ethers.getSigners();

    const tokenFactory = await ethers.getContractFactory('Token');
    token = await tokenFactory.deploy();

    await token.deploymentTransaction().wait();
  });

  it('Should', async function () {
    const [user] = users;
    const amount = ethers.parseEther('10');
    await token.transfer(user.address, amount);

    expect(await token.balanceOf(user.address)).to.equal(amount);
  });
});
