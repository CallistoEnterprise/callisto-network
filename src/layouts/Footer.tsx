import React from "react";
import styled from "@mui/styled-engine-sc";
import { Box } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <StyledContainer>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Head display="flex">
          <Box component="div" color="white" style={{ rowGap: 30.28 }}>
            <img src="images/Callisto Logo.png" alt="" />
            <Box display="flex" flexDirection="column">
              <Box component="span" fontSize="16px" lineHeight="19px">
                All rights reserved by
              </Box>
              <Box component="span" mt="4.5px" fontSize="17px" lineHeight="21px" fontWeight="700">
                Callisto Network
              </Box>
            </Box>
          </Box>
          <Box component="div" color="white" style={{ rowGap: 46.38 }}>
            <JoinText>Resources</JoinText>
            <List>
              <span>FAQ</span>
              <span>Airdrop</span>
              <span>Community Guidelines</span>
            </List>
          </Box>
          <Box component="div" color="white" style={{ rowGap: 46.38 }}>
            <JoinText>Callisto Network</JoinText>
            <List>
              <span>Partners</span>
              <span>GitHub</span>
              <span>Media Kit</span>
              <span>Contact us</span>
            </List>
          </Box>
          <Box component="div" color="white" style={{ rowGap: 33.12 }}>
            <JoinText>Join our community</JoinText>
            <Socials>
              <img src="images/Facebook.svg" alt="" />
              <img src="images/Btc.svg" alt="" />
              <img src="images/Insta.svg" alt="" />
              <img src="images/Link.svg" alt="" />
              <img src="images/Red.svg" alt="" />
              <img src="images/Telegram.svg" alt="" />
              <img src="images/Twitter.svg" alt="" />
              <img src="images/Youtube.svg" alt="" />
            </Socials>
          </Box>
        </Head>
        <Box width="100%" height="1px" bgcolor="white" mt="62.84px" />
        <CopyrightBox display="flex" alignItems="center" mt="22.68px">
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
            <circle cx="7.11698" cy="8.02567" r="6.76314" stroke="white" strokeWidth="0.70767" />
          </svg>
          <span>All rights reserved by Callisto Network</span>
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
  > span {
    cursor: pointer;
  }
  >span+span {
    margin-top: 20px;
    margin-left: 20px;
  }
`;

const Socials = styled(Box)`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 9.46px;
  row-gap: 16.52px;
`;

const JoinText = styled(Box)`
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0.2px;
  color: #ffffff;
`;

const Head = styled(Box)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 64px;
  row-gap: 64px;
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  > div:first-of-type > span {
    font-family: Gilroy !important;
  }
`;

const CopyrightBox = styled(Box)`
  column-gap: 9px;
  row-gap: 9px;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.5px;
  color: #ffffff;
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
    @media (max-width: 768px) {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
`;

export default Footer;
