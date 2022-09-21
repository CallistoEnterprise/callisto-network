import React, { useState, useMemo } from "react";
import styled from "@mui/styled-engine-sc";
import { Box, Collapse } from "@mui/material";
import useWindowDimensions from "hooks/useDimensions";

const Footer: React.FC = () => {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const screenWidth = useWindowDimensions().width;
  const [isMobile, setIsMobile] = useState(false);

  useMemo(() => {
    if (screenWidth > 768) {
      setResourcesOpen(true);
      setNetworkOpen(true);
      setIsMobile(false);
    } else {
      setResourcesOpen(false);
      setNetworkOpen(false);
      setIsMobile(true);
    }
  }, [screenWidth]);

  return (
    <StyledContainer>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Head
          display="flex"
          open1={resourcesOpen ? 1 : 0}
          open2={networkOpen ? 1 : 0}
        >
          <Box component="div" color="white">
            <img src="images/Callisto Logo.png" alt="" />
            <Box display="flex" flexDirection="column">
              <Box component="span" fontSize="16px" lineHeight="19px">
                All rights reserved by
              </Box>
              <Box
                component="span"
                mt="4.5px"
                fontSize="17px"
                lineHeight="21px"
                fontWeight="700"
              >
                Callisto Network
              </Box>
            </Box>
          </Box>
          <Box component="div" color="white">
            <JoinText>
              Resources
              <Box
                onClick={() => isMobile && setResourcesOpen(!resourcesOpen)}
              />
            </JoinText>
            <Collapse timeout={500} in={resourcesOpen}>
              <List>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://callisto.network/faq/"
                >
                  FAQ
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://callisto.network/callisto-airdrop/"
                >
                  Airdrop
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://callisto.network/community-guidelines/"
                >
                  Community Guidelines
                </a>
              </List>
            </Collapse>
          </Box>
          <Box component="div" color="white">
            <JoinText>
              Callisto Network
              <Box onClick={() => isMobile && setNetworkOpen(!networkOpen)} />
            </JoinText>
            <Collapse timeout={500} in={networkOpen}>
              <List>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://callisto.network/partners/"
                >
                  Partners
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/EthereumCommonwealth/Callisto-Website"
                >
                  GitHub
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://docs.callisto.network/miscellaneous/media-kit"
                >
                  Media Kit
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://callisto.network/contact-us/"
                >
                  Contact us
                </a>
              </List>
            </Collapse>
          </Box>
          <Box component="div" color="white">
            <JoinText>Join our community</JoinText>
            <Socials>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/CallistoNet"
              >
                <img src="images/Telegram.svg" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/CallistoSupport"
              >
                <img src="images/Twitter.svg" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.reddit.com/r/CallistoCrypto/"
              >
                <img src="images/Red.svg" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/c/CallistoNetwork"
              >
                <img src="images/Youtube.svg" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/callisto.network"
              >
                <img src="images/Insta.svg" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/callistonetwork"
              >
                <img src="images/Facebook.svg" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/callisto-network/"
              >
                <img src="images/Link.svg" alt="" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bitcointalk.org/index.php?topic=3380156.0"
              >
                <img src="images/Btc.svg" alt="" />
              </a>
            </Socials>
          </Box>
        </Head>
        <Box width="100%" height="1px" bgcolor="white" />
        <CopyrightBox display="flex" alignItems="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
          >
            <path
              d="M7.3499 12.0219C8.65201 12.0219 9.76164 11.5577 10.4976 10.6972L9.54651 9.79134C8.96905 10.4254 8.25572 10.7311 7.42916 10.7311C5.78737 10.7311 4.59848 9.57621 4.59848 7.94574C4.59848 6.31527 5.78737 5.16035 7.42916 5.16035C8.25572 5.16035 8.96905 5.46607 9.54651 6.08882L10.4976 5.19432C9.76164 4.33379 8.65201 3.86956 7.36122 3.86956C4.92684 3.86956 3.1152 5.57929 3.1152 7.94574C3.1152 10.3122 4.92684 12.0219 7.3499 12.0219Z"
              fill="white"
            />
            <circle
              cx="7.11698"
              cy="8.02567"
              r="6.76314"
              stroke="white"
              strokeWidth="0.70767"
            />
          </svg>
          <span>
            All rights reserved by <span>Callisto Network</span>
          </span>
        </CopyrightBox>
      </Box>
    </StyledContainer>
  );
};

const List = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0.2px;
  color: #ffffff;
  > a {
    text-decoration: none;
    color: white;
  }
  > a + a {
    margin-top: 20px;
  }
`;

const Socials = styled(Box)`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 9.46px;
  row-gap: 16.52px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    column-gap: 0;
    row-gap: 0;
    img {
      width: 24.42px;
      height: 24.42px;
    }
    > a + a {
      margin-left: 11.36px;
    }
  }
`;

const JoinText = styled(Box)`
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0.2px;
  color: #ffffff;
  > div {
    cursor: pointer;
  }
`;

const Head = styled(Box)<any>`
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  > div + div {
    margin-top: 16.1px;
  }
  > div:first-of-type > span {
    font-family: Gilroy !important;
  }
  > div:first-of-type {
    align-self: flex-start;
    > * + * {
      margin-top: 30.28px;
    }
  }
  > div:nth-of-type(2),
  > div:nth-of-type(3) {
    > * + * {
      margin-top: 46.38px;
    }
  }
  > div:nth-of-type(4) {
    > * + * {
      margin-top: 33.12px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    > div + div {
      margin-top: 26.75px;
    }
    > div:first-of-type {
      align-self: center;
      margin-bottom: 22.54px;
      > div {
        display: none;
      }
    }

    > div:nth-of-type(2) {
      width: 100%;
      > div:first-of-type {
        width: 100%;
        position: relative;
        > div {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          width: 25.89px;
          height: 1px;
          background: white;
        }
      }
      > * + * {
        /* transition: 0.5s; */
        margin-top: ${({ open1 }: any) => (open1 ? 24 : 0)}px;
      }
    }
    > div:nth-of-type(3) {
      width: 100%;
      > div:first-of-type {
        width: 100%;
        position: relative;
        > div {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          width: 25.89px;
          height: 1px;
          background: white;
          @media (min-width: 769px) {
            display: none;
          }
        }
      }
      > * + * {
        /* transition: 0.5s; */
        margin-top: ${({ open2 }: any) => (open2 ? 24 : 0)}px;
      }
    }

    > div:nth-of-type(4) {
      align-self: center;
      align-items: center;
      margin-top: 67.77px;
      > * + * {
        margin-top: 23.09px;
      }
    }
  }
`;

const CopyrightBox = styled(Box)`
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.5px;
  color: #ffffff;
  margin-top: 22.68px;
  > span {
    margin-left: 9px;
    > span {
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    align-self: center;
    margin-top: 23.42px;
    font-family: "Gilroy";
    font-size: 16px;
    line-height: 19px;
    > svg {
      display: none;
    }
    > span {
      margin: 0;
      > span {
        font-weight: 400;
      }
    }
  }
  @media (max-width: 400px) {
    align-items: flex-start !important;
  }
`;

const StyledContainer = styled(Box)`
  width: 100%;
  > div {
    padding-top: 66.28px;
    padding-bottom: 65px;
    padding-left: 150px;
    padding-right: 150px;
    box-sizing: content-box;
    max-width: 1622px;
    margin-left: auto;
    margin-right: auto;
    > div:nth-of-type(2) {
      margin-top: 62.84px;
    }
    @media (max-width: 1000px) {
      padding: 33.81px 34.1px 28.9px 37.47px;
    }
    @media (max-width: 768px) {
      > div:nth-of-type(2) {
        margin-top: 40.23px;
      }
    }
  }
`;

export default Footer;
