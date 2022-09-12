import React from "react";
import styled from "@mui/styled-engine-sc";
import { Box } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <StyledContainer>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Head display="flex">
          <Box component="div" color="white" style={{ gridRowGap: 30.28 }}>
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
          <Box component="div" color="white" style={{ gridRowGap: 46.38 }}>
            <JoinText>Resources</JoinText>
            <List>
              <span>FAQ</span>
              <span>Airdrop</span>
              <span>Community Guidelines</span>
            </List>
          </Box>
          <Box component="div" color="white" style={{ gridRowGap: 46.38 }}>
            <JoinText>Callisto Network</JoinText>
            <List>
              <span>Partners</span>
              <span>GitHub</span>
              <span>Media Kit</span>
              <span>Contact us</span>
            </List>
          </Box>
          <Box component="div" color="white" style={{ gridRowGap: 33.12 }}>
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
          <Box component="div" style={{ gridRowGap: 59.38 }}>
            <JoinText>Subscribe to our newsletter</JoinText>
            <Input>
              <input placeholder="Your email" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
              >
                <path
                  d="M1.58235 16.4812C1.4629 16.4818 1.34448 16.459 1.2339 16.4138C1.12331 16.3686 1.02273 16.3021 0.937916 16.2179C0.852843 16.1336 0.785319 16.0332 0.739239 15.9226C0.693158 15.812 0.669434 15.6933 0.669434 15.5735C0.669434 15.4537 0.693158 15.335 0.739239 15.2244C0.785319 15.1138 0.852843 15.0134 0.937916 14.9291L7.5638 8.31226L0.937916 1.69545C0.767002 1.52454 0.670983 1.29273 0.670983 1.05102C0.670983 0.931335 0.694556 0.812824 0.740356 0.702252C0.786157 0.591679 0.853288 0.491211 0.937916 0.406582C1.02254 0.321954 1.12301 0.254823 1.23359 0.209023C1.34416 0.163222 1.46267 0.139648 1.58235 0.139648C1.82406 0.139648 2.05587 0.235667 2.22679 0.406582L9.48803 7.66783C9.5731 7.7522 9.64063 7.85259 9.68671 7.9632C9.73279 8.0738 9.75651 8.19244 9.75651 8.31226C9.75651 8.43208 9.73279 8.55072 9.68671 8.66132C9.64063 8.77193 9.5731 8.87232 9.48803 8.95669L2.22679 16.2179C2.14198 16.3021 2.04139 16.3686 1.93081 16.4138C1.82022 16.459 1.70181 16.4818 1.58235 16.4812Z"
                  fill="#BAB1B1"
                />
              </svg>
            </Input>
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

const Input = styled(Box)`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 89px;
  padding: 12.42px 22.49px 12.42px 27.09px;
  > input {
    border: none;
    outline: none;
    flex: 1;
    font-weight: 500;
    font-size: 19.1883px;
    line-height: 23px;
    letter-spacing: -0.05em;
    color: black;
    &::placeholder {
      color: #bab1b1;
    }
  }
`;

const List = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 0.2px;
  color: #ffffff;
  > span {
    cursor: pointer;
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
  gap: 64px;
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
  gap: 9px;
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
