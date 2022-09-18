import React, {useState} from "react";
import styled from "@mui/styled-engine-sc";
import { Box, Fade } from "@mui/material";

const Topbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledContainer>
      <Box display="flex">
        <img src="images/Callisto Logo.png" alt="" />
        <Box display="flex" alignItems="center">
          <PCMenu display="flex" alignItems="center">
            <span>
              Developers
              <MenuList>
                <MenuItems>
                  <Box>
                    <img src="images/Github.svg" alt="" />
                    <Box>
                      <Text1>GitHub</Text1>
                      <Text2>Join our community on Github</Text2>
                    </Box>
                  </Box>
                  <Box>
                    <img src="images/Testnet Explorer.svg" alt="" />
                    <Box>
                      <Text1>Testnet Explorer</Text1>
                      <Text2>Browse the CLO Testnet</Text2>
                    </Box>
                  </Box>
                  <Box>
                    <img src="images/Testnet Faucet.svg" alt="" />
                    <Box>
                      <Text1>Testnet Faucet</Text1>
                      <Text2>Get CLO testnet coins</Text2>
                    </Box>
                  </Box>
                  <Box>
                    <img src="images/We fund you.svg" alt="" />
                    <Box>
                      <Text1>We Fund You!</Text1>
                      <Text2>Build on Callisto Network and get funded</Text2>
                    </Box>
                  </Box>
                </MenuItems>
              </MenuList>
            </span>
            <span>
              Ecosystem
              <MenuList>
                <MenuItems>
                  <Title>Explorer</Title>
                  <Box>
                    <img src="images/Testnet Explorer.svg" alt="" />
                    <Box>
                      <Text1>Explorer</Text1>
                      <Text2>Browse Callisto Network</Text2>
                    </Box>
                  </Box>
                </MenuItems>
                <MenuItems>
                  <Title>DApps</Title>
                  <Box>
                    <img src="images/Bridge.svg" alt="" />
                    <Box>
                      <Text1>Soy Bridge</Text1>
                      <Text2>
                        Soy Bridge alows for moving assets from the leading
                        blockchains to Callisto Network
                      </Text2>
                    </Box>
                  </Box>
                  <Box>
                    <img src="images/Soy Finance.svg" alt="" />
                    <Box>
                      <Text1>Soy Finance</Text1>
                      <Text2>
                        Soy Finance is a DeFi platform built with the highest
                        security standards
                      </Text2>
                    </Box>
                  </Box>
                  <Box>
                    <img src="images/More.svg" alt="" />
                    <Box>
                      <Text1>More</Text1>
                    </Box>
                  </Box>
                </MenuItems>
                <MenuItems>
                  <Title>Wallets</Title>
                  <Box>
                    <img src="images/Metamask.svg" alt="" />
                    <Box>
                      <Text1>MetaMask</Text1>
                      <Text2>Go to MetaMask</Text2>
                    </Box>
                  </Box>
                  <Box>
                    <img src="images/Clo.svg" alt="" />
                    <Box>
                      <Text1>Official Web Wallet</Text1>
                      <Text2>Go to Callisto Wallet</Text2>
                    </Box>
                  </Box>
                  <Box>
                    <img src="images/Absolute.svg" alt="" />
                    <Box>
                      <Text1>AbsoluteWallet</Text1>
                    </Box>
                  </Box>
                  <Box>
                    <img src="images/More.svg" alt="" />
                    <Box>
                      <Text1>More</Text1>
                    </Box>
                  </Box>
                </MenuItems>
              </MenuList>
            </span>
            <span>
              Community
              <MenuList>
                <MenuItems>
                  <Box>
                    <img src="images/Forum.svg" alt="" />
                    <Box>
                      <Text1>Callisto Network Forum</Text1>
                      <Text2>
                        A place where Callistonians meet and discuss all things
                        related to the ecosystem
                      </Text2>
                    </Box>
                  </Box>
                  <Box>
                    <img src="images/Astronaut.svg" alt="" />
                    <Box>
                      <Text1>Callistonians Program</Text1>
                      <Text2>
                        Get rewarded for your contribution to Callisto Network
                      </Text2>
                    </Box>
                  </Box>
                </MenuItems>
              </MenuList>
            </span>
            <span>Proof Of Work</span>
            <span>Masternodes</span>
            <span>Discover</span>
          </PCMenu>
          <MenuIcon>
            <img onClick={() => setOpen(!open)} src="images/Menu.svg" alt="" />
            <Fade in={open}>
              <MobileMenu onClick={() => setOpen(false)}>
                <Box>Developers</Box>
                <Box>Ecosystem</Box>
                <Box>Community</Box>
                <Box>Proof Of Work</Box>
                <Box>Masternodes</Box>
                <Box>Discover</Box>
              </MobileMenu>
            </Fade>
          </MenuIcon>
        </Box>
      </Box>
    </StyledContainer>
  );
};

const MenuItems = styled(Box)`
  display: flex;
  flex-direction: column;
  > div + div {
    margin-top: 25.39px;
  }
  > div {
    display: flex;
    align-items: center;
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

const MenuList = styled(Box)`
  position: absolute;
  top: calc(100% + 46.02px);
  left: 0;
  background: rgba(4, 31, 48, 0.81);
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  padding: 25.61px 0 25.61px 25.64px;
  display: flex;
  flex-direction: column;
  > div + div {
    margin-top: 30.69px;
  }
  width: 360px;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 46.02px;
    top: -46.02px;
    left: 0;
  }
`;

const MobileMenu = styled(Box)`
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  background: white;
  border: 1px solid grey;
  > div {
    cursor: pointer;
    padding: 20px;
    color: black;
    transition: 0.3s;
    &:hover {
      background: lightgrey;
    }
  }
`;

const MenuIcon = styled(Box)`
  position: relative;
  @media (min-width: 1441px) {
    display: none;
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
    > div {
      pointer-events: none;
      transition: 0.5s;
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

    @media (max-width: 768px) {
      padding: 31.36px 49.35px 31.36px 45px;
    }
  }
`;

export default Topbar;
