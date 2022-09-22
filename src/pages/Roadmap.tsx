import React, { useMemo, useRef } from "react";
import styled from "@mui/styled-engine-sc";
import { Box } from "@mui/material";

const Roadmap: React.FC<any> = ({ active }) => {
  let video = useRef<any>();
  useMemo(() => {
    if (active) {
      setTimeout(() => {
        video.current.currentTime = 0;
        video.current.play();
      }, 100);
    }
  }, [active]);
  return (
    <StyledContainer>
      <video ref={video} src="videos/Roadmap_H.264.webm" muted loop />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="100%"
      >
        <Title>Roadmap</Title>
        <Maps>
          <Box>
            <Text1>Q4</Text1>
            <Text2>2022</Text2>
            <Content>
              <Box>Infrastructure</Box>
              <Box>
                Masternodes Launch
                <br />
                New Monetary Policy
              </Box>
            </Content>
          </Box>
          <Box>
            <Text1>Q4</Text1>
            <Text2>2022</Text2>
            <Content>
              <Box>
                Security
                <br />
                Department
              </Box>
              <Box>
                Hack Investigation Department
                <br />
                Security Department V2
                <br />
                Migration Service
              </Box>
            </Content>
          </Box>
          <Box>
            <Text1>Q1</Text1>
            <Text2>2023</Text2>
            <Content>
              <Box>PoW</Box>
              <Box>ZPoW Implementation</Box>
            </Content>
          </Box>
          <Box>
            <Text1>Q1</Text1>
            <Text2>2023</Text2>
            <Content>
              <Box>Security<br/>Department</Box>
              <Box>Distributed Insurance</Box>
            </Content>
          </Box>
        </Maps>
      </Box>
    </StyledContainer>
  );
};

const Content = styled(Box)`
  width: calc(100% - 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8.42px;
  > div:first-of-type {
    font-weight: 700;
    font-size: 1.563em;
    line-height: 30px;
    letter-spacing: -0.05em;
    color: #ffffff;
    @media (max-height: 800px) {
      font-size: 1.125em;
      line-height: 23px;
    }
    @media (max-width: 360px) {
      font-size: 0.75em;
      line-height: 17px;
    }
  }
  > div:nth-of-type(2) {
    text-align: right;
    font-weight: 300;
    font-size: 1.375em;
    line-height: 27px;
    letter-spacing: -0.03em;
    color: #ffffff;
    @media (max-height: 800px) {
      font-size: 0.75em;
      line-height: 17px;
    }
    @media (max-width: 550px) {
      font-size: 0.875em;
      line-height: 19px;
    }
    @media (max-width: 360px) {
      font-size: 0.625em;
      line-height: 15px;
    }
  }
  @media (max-width: 400px) {
    width: calc(100% - 40px);
  }
`;
const Text2 = styled(Box)`
  font-weight: 500;
  font-size: 1.772em;
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #ffffff;
  @media (max-height: 1000px) {
    font-size: 1.125em;
    line-height: 25px;
  }
  @media (max-height: 800px) {
    font-size: 0.875em;
    line-height: 21px;
  }
`;

const Text1 = styled(Box)`
  font-weight: 700;
  font-size: 3.534em;
  line-height: 69px;
  letter-spacing: -0.05em;
  color: #ffffff;
  @media (max-height: 1000px) {
    font-size: 2.5em;
    line-height: 53px;
  }
  @media (max-height: 900px) {
    font-size: 1.875em;
    line-height: 43px;
  }
  @media (max-width: 550px) {
    font-size: 1.125em;
    line-height: 31px;
  }
`;

const Maps = styled(Box)`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled(Box)`
  font-weight: 600;
  font-size: 2.813em;
  line-height: 55px;
  letter-spacing: -0.05em;
  color: #ffffff;
  margin-bottom: 44.41px;
  @media (max-width: 730px) {
    margin-bottom: 10px;
    font-size: 2.25em;
    line-height: 43px;
  }
  @media (max-width: 320px) {
    font-size: 1.375em;
    line-height: 31px;
  }
`;

const StyledContainer = styled(Box)`
  position: relative;
  height: 100vh;
  z-index: 1;
  > video:first-of-type {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    background: url("images/Roadmap_BG.png") no-repeat;
    background-size: cover;
    padding-top: 123.74px;
    padding-bottom: 59.1px;
    > video:first-of-type {
      display: none;
    }
    @media (max-height: 600px) {
      padding-top: 70px;
      padding-bottom: 32px;
    }
  }
`;

export default Roadmap;
