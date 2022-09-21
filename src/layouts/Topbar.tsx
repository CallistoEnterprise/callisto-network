import React, { useState } from "react";
import styled from "@mui/styled-engine-sc";
import { Box, Fade, Modal } from "@mui/material";

const Topbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [submenuType, setSubmenuType] = useState(-1);
  const openSubMenu = (i: any) => {
    if (i >= 0 && i <= 2) {
      setOpenModal(true);
      setSubmenuType(i);
    }
  };
  return (
    <StyledContainer>
      <Box display="flex">
        <img src="images/Callisto Logo.png" alt="" />
        <img src="images/Clo Logo Mobile.png" alt=''/>
        <Box display="flex" alignItems="center">
          <PCMenu display="flex" alignItems="center">
            <span>
              Developers
              <MenuList>
                <MenuItems>
                  <a target="_blank" rel="noreferrer"href="https://github.com/EthereumCommonwealth/Callisto-Website">
                    <img src="images/Github.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>GitHub</Text1>
                      <Text2>Join our community on Github</Text2>
                    </Box>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://testnet-explorer.callisto.network/">
                    <img src="images/Testnet Explorer.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>Testnet Explorer</Text1>
                      <Text2>Browse the CLO Testnet</Text2>
                    </Box>
                  </a>
                  <a target="_blank" rel="noreferrer"href="https://github.com/EthereumCommonwealth/Callisto-Website">
                    <img src="images/Testnet Faucet.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>Testnet Faucet</Text1>
                      <Text2>Get CLO testnet coins</Text2>
                    </Box>
                  </a>
                  <a target="_blank" rel="noreferrer"href="https://docs.callisto.network/we-fund-you/we-fund-you">
                    <img src="images/We fund you.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>We Fund You!</Text1>
                      <Text2>Build on Callisto Network and get funded</Text2>
                    </Box>
                  </a>
                </MenuItems>
              </MenuList>
            </span>
            <span>
              Ecosystem
              <MenuList>
                <MenuItems>
                  <Title>Explorer</Title>
                  <a target="_blank" rel="noreferrer"href="https://explorer.callisto.network/">
                    <img src="images/Testnet Explorer.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>Explorer</Text1>
                      <Text2>Browse Callisto Network</Text2>
                    </Box>
                  </a>
                </MenuItems>
                <MenuItems>
                  <Title>DApps</Title>
                  <a target="_blank" rel="noreferrer"href="https://bridge.soy.finance/">
                    <img src="images/Bridge.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>Soy Bridge</Text1>
                      <Text2>
                        Soy Bridge alows for moving assets from the leading blockchains to Callisto
                        Network
                      </Text2>
                    </Box>
                  </a>
                  <a target="_blank" rel="noreferrer"href="https://soy.finance/">
                    <img src="images/Soy Finance.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>Soy Finance</Text1>
                      <Text2>
                        Soy Finance is a DeFi platform built with the highest security standards
                      </Text2>
                    </Box>
                  </a>
                  <a target="_blank" rel="noreferrer"href="https://github.com/EthereumCommonwealth/Callisto-Website">
                    <img src="images/More.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>More</Text1>
                    </Box>
                  </a>
                </MenuItems>
                <MenuItems>
                  <Title>Wallets</Title>
                  <a target="_blank" rel="noreferrer"href="https://docs.callisto.network/callisto-network/tutorials/set-up-metamask-for-callisto-network">
                    <img src="images/Metamask.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>MetaMask</Text1>
                      <Text2>Go to MetaMask</Text2>
                    </Box>
                  </a>
                  <a target="_blank" rel="noreferrer"href="https://wallet.callisto.network/">
                    <img src="images/Clo.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>Official Web Wallet</Text1>
                      <Text2>Go to Callisto Wallet</Text2>
                    </Box>
                  </a>
                  <a target="_blank" rel="noreferrer"href="https://absolutewallet.com/">
                    <img src="images/Absolute.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>AbsoluteWallet</Text1>
                    </Box>
                  </a>
                  <a target="_blank" rel="noreferrer"href="https://github.com/EthereumCommonwealth/Callisto-Website">
                    <img src="images/More.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>More</Text1>
                    </Box>
                  </a>
                </MenuItems>
              </MenuList>
            </span>
            <span>
              Community
              <MenuList>
                <MenuItems>
                  <a target="_blank" rel="noreferrer"href="https://gov.callisto.network/categories">
                    <img src="images/Forum.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>Callisto Network Forum</Text1>
                      <Text2>
                        A place where Callistonians meet and discuss all things related to the
                        ecosystem
                      </Text2>
                    </Box>
                  </a>
                  <a target="_blank" rel="noreferrer"href="https://github.com/EthereumCommonwealth/Callisto-Website">
                    <img src="images/Astronaut.svg" alt="" />
                    <Box>
                      <Text1 component='h3'>Callistonians Program</Text1>
                      <Text2>Get rewarded for your contribution to Callisto Network</Text2>
                    </Box>
                  </a>
                </MenuItems>
              </MenuList>
            </span>
            <span onClick={() => window.open("https://docs.callisto.network/callisto-network/proof-of-work  ", "_blank")}>Proof Of Work</span>
            <span onClick={() => window.open("https://docs.callisto.network/callisto-network/callisto-network-masternodes", "_blank")}>Masternodes</span>
            <span>Discover</span>
          </PCMenu>
          <MenuIcon>
            <img onClick={() => setOpen(!open)} src="images/Menu.svg" alt="" />
            <Fade in={open}>
              <MobileMenu onClick={() => setOpen(false)}>
                <Box onClick={() => openSubMenu(0)}>Developers</Box>
                <Box onClick={() => openSubMenu(1)}>Ecosystem</Box>
                <Box onClick={() => openSubMenu(2)}>Community</Box>
                <Box onClick={() => window.open("https://docs.callisto.network/callisto-network/proof-of-work", "_blank")}>Proof Of Work</Box>
                <Box onClick={() => window.open("https://docs.callisto.network/callisto-network/proof-of-work", "_blank")}>Masternodes</Box>
                <Box onClick={() => window.open("https://docs.callisto.network/callisto-network/proof-of-work", "_blank")}>Discover</Box>
              </MobileMenu>
            </Fade>
          </MenuIcon>
        </Box>
      </Box>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <MobileMenuList>
          {submenuType === 0 && (
            <MenuItems>
              <a target="_blank" rel="noreferrer"href="https://github.com/EthereumCommonwealth/Callisto-Website">
                <img src="images/Github.svg" alt="" />
                <Box>
                  <Text1 component='h3'>GitHub</Text1>
                  <Text2>Join our community on Github</Text2>
                </Box>
              </a>
              <a target="_blank" rel="noreferrer"href="https://testnet-explorer.callisto.network/">
                <img src="images/Testnet Explorer.svg" alt="" />
                <Box>
                  <Text1 component='h3'>Testnet Explorer</Text1>
                  <Text2>Browse the CLO Testnet</Text2>
                </Box>
              </a>
              <a target="_blank" rel="noreferrer"href="https://faucet.callisto.network/">
                <img src="images/Testnet Faucet.svg" alt="" />
                <Box>
                  <Text1 component='h3'>Testnet Faucet</Text1>
                  <Text2>Get CLO testnet coins</Text2>
                </Box>
              </a>
              <a target="_blank" rel="noreferrer"href="https://docs.callisto.network/we-fund-you/we-fund-you">
                <img src="images/We fund you.svg" alt="" />
                <Box>
                  <Text1 component='h3'>We Fund You!</Text1>
                  <Text2>Build on Callisto Network and get funded</Text2>
                </Box>
              </a>
            </MenuItems>
          )}
          {submenuType === 1 && (
            <>
              <MenuItems>
                <Title>Explorer</Title>
                <a target="_blank" rel="noreferrer"href="https://explorer.callisto.network/">
                  <img src="images/Testnet Explorer.svg" alt="" />
                  <Box>
                    <Text1 component='h3'>Explorer</Text1>
                    <Text2>Browse Callisto Network</Text2>
                  </Box>
                </a>
              </MenuItems>
              <MenuItems>
                <Title>DApps</Title>
                <a target="_blank" rel="noreferrer"href="https://bridge.soy.finance/">
                  <img src="images/Bridge.svg" alt="" />
                  <Box>
                    <Text1 component='h3'>Soy Bridge</Text1>
                    <Text2>
                      Soy Bridge alows for moving assets from the leading blockchains to Callisto
                      Network
                    </Text2>
                  </Box>
                </a>
                <a target="_blank" rel="noreferrer"href="https://soy.finance/">
                  <img src="images/Soy Finance.svg" alt="" />
                  <Box>
                    <Text1 component='h3'>Soy Finance</Text1>
                    <Text2>
                      Soy Finance is a DeFi platform built with the highest security standards
                    </Text2>
                  </Box>
                </a>
                <a target="_blank" rel="noreferrer"href="https://github.com/EthereumCommonwealth/Callisto-Website">
                  <img src="images/More.svg" alt="" />
                  <Box>
                    <Text1 component='h3'>More</Text1>
                  </Box>
                </a>
              </MenuItems>
              <MenuItems>
                <Title>Wallets</Title>
                <a target="_blank" rel="noreferrer"href="https://docs.callisto.network/callisto-network/tutorials/set-up-metamask-for-callisto-network">
                  <img src="images/Metamask.svg" alt="" />
                  <Box>
                    <Text1 component='h3'>MetaMask</Text1>
                    <Text2>Go to MetaMask</Text2>
                  </Box>
                </a>
                <a target="_blank" rel="noreferrer"href="https://wallet.callisto.network/">
                  <img src="images/Clo.svg" alt="" />
                  <Box>
                    <Text1 component='h3'>Official Web Wallet</Text1>
                    <Text2>Go to Callisto Wallet</Text2>
                  </Box>
                </a>
                <a target="_blank" rel="noreferrer"href="https://absolutewallet.com/">
                  <img src="images/Absolute.svg" alt="" />
                  <Box>
                    <Text1 component='h3'>AbsoluteWallet</Text1>
                  </Box>
                </a>
                <a target="_blank" rel="noreferrer"href="https://callisto.network/wallets/">
                  <img src="images/More.svg" alt="" />
                  <Box>
                    <Text1 component='h3'>More</Text1>
                  </Box>
                </a>
              </MenuItems>
            </>
          )}
          {submenuType === 2 && (
            <MenuItems>
              <a target="_blank" rel="noreferrer"href="https://gov.callisto.network/categories">
                <img src="images/Forum.svg" alt="" />
                <Box>
                  <Text1 component='h3'>Callisto Network Forum</Text1>
                  <Text2>
                    A place where Callistonians meet and discuss all things related to the ecosystem
                  </Text2>
                </Box>
              </a>
              <a target="_blank" rel="noreferrer"href="https://github.com/EthereumCommonwealth/Callisto-Website">
                <img src="images/Astronaut.svg" alt="" />
                <Box>
                  <Text1 component='h3'>Callistonians Program</Text1>
                  <Text2>Get rewarded for your contribution to Callisto Network</Text2>
                </Box>
              </a>
            </MenuItems>
          )}
        </MobileMenuList>
      </Modal>
    </StyledContainer>
  );
};

const MenuItems = styled(Box)`
  display: flex;
  flex-direction: column;
  >div {
    margin-bottom: 25.39px;
  }
  > a + a {
    margin-top: 25.39px;
  }
  > a {
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    > img {
      width: 34.55px;
      min-width: 34.55px;
      height: 34.55px;
    }
    > div {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      > div + div {
        margin-top: 3.59px;
      }
    }
  }
`;

const Title = styled(Box)`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

const Text2 = styled(Box)`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.05em;
  color: white;
`;

const Text1 = styled(Box)`
  font-weight: 600;
  font-size: 20.6761px;
  line-height: 25px;
  letter-spacing: -0.05em;
  color: white;
`;

const MobileMenuList = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  background: rgba(4, 31, 48, 0.81);
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  padding: 25.61px 9px 25.61px 20.64px;
  display: flex;
  flex-direction: column;
  width: 360px;
  max-height: calc(100% - 40px);
  overflow: auto;
  > *+* {
    margin-top: 30.69px;
  }
`;

const MenuList = styled(Box)`
  position: absolute;
  top: calc(100% + 50px);
  left: 0;
  background: rgba(4, 31, 48, 0.81);
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  padding: 25.61px 9px 25.61px 20.64px;
  display: flex;
  flex-direction: column;
  > *+* {
    margin-top: 30.69px;
  }
  width: 360px;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 65px;
    top: -65px;
    left: 0;
  }
`;

const MobileMenu = styled(Box)`
  position: absolute;
  top: calc(100% + 20px);
  right: 0;
  width: max-content;
  background: rgba(4, 31, 48, 0.81);
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  padding: 25.61px 25.64px;
  > div {
    cursor: pointer;
    transition: 0.3s;
    font-weight: 600;
    font-size: 20.6761px;
    line-height: 25px;
    letter-spacing: -0.05em;
    color: white;
  }
  >div+div {
    margin-top: 20px;
  }
`;

const MenuIcon = styled(Box)`
  position: relative;
  > img {
    cursor: pointer;
  }
  @media (min-width: 1441px) {
    display: none;
  }
  @media (max-width: 500px) {
    >img {
      width: 20px; height: 20px;
    }
  }
`;

const PCMenu = styled(Box)`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.05em;
  color: white;
  > span + span {
    margin-left: 46.67px;
  }
  > span {
    cursor: pointer;
    position: relative;
    transition: .1s;
    > div {
      pointer-events: none;
      transition: 1s;
      opacity: 0;
    }
    &:hover {
      font-weight: 700;
      > div {
        pointer-events: auto;
        opacity: 1;
      }
    }
  }
  @media (max-width: 1440px) {
    display: none !important;
  }
`;

const StyledContainer = styled(Box)`
  position: fixed;
  z-index: 5;
  width: 100%;
  > div {
    justify-content: space-between;
    align-items: center;
    padding: 40px 160px 0 160px;
    box-sizing: content-box;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
    >img {
      @media (max-width: 500px) {
        width: 103px;
      }
    }
    >img:first-of-type {
      @media (max-width: 768px) {
        display: none;
      }
    }
    >img:nth-of-type(2) {
      @media (min-width: 769px) {
        display: none;
      }
    }

    @media (max-width: 768px) {
      padding: 31.36px 49.35px 31.36px 45px;
    }
  }
`;

export default Topbar;
