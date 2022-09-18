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
      }, 900);
    }
  }, [active]);
  return (
    <StyledContainer>
      <video ref={video} src="videos/Roadmap_H.mp4" muted loop />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Title>Roadmap</Title>
        <Maps>
          <Box>
            <Text1>Q1</Text1>
            <Text2>2022</Text2>
            <Content>
              <Box>Security<br/>Department</Box>
              <Box>
                Mileston 1<br />
                Mileston 2
              </Box>
            </Content>
          </Box>
          <Box>
            <Text1>Q2</Text1>
            <Text2>2022</Text2>
            <Content>
              <Box>Service</Box>
              <Box>
                Mileston 1<br />
                Mileston 2
              </Box>
            </Content>
          </Box>
          <Box>
            <Text1>Q3</Text1>
            <Text2>2022</Text2>
            <Content>
              <Box>Infracstructure</Box>
              <Box>
                Mileston 1<br />
                Mileston 2
              </Box>
            </Content>
          </Box>
          <Box>
            <Text1>Q4</Text1>
            <Text2>2022</Text2>
            <Content>
              <Box>PoW</Box>
              <Box>
                Mileston 1<br />
                Mileston 2
              </Box>
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
    font-size: 25px;
    line-height: 30px;
    letter-spacing: -0.05em;
    color: #ffffff;
  }
  > div:nth-of-type(2) {
    font-weight: 300;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    letter-spacing: -0.03em;
    color: #ffffff;
  }
`;
const Text2 = styled(Box)`
  font-weight: 500;
  font-size: 28.3594px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #ffffff;
`;
const Text1 = styled(Box)`
  font-weight: 700;
  font-size: 56.5488px;
  line-height: 69px;
  letter-spacing: -0.05em;
  color: #ffffff;
`;

const Maps = styled(Box)`
  width: 100%;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  > div + div {
    margin-top: 47.41px;
  }
`;

const Title = styled(Box)`
  font-weight: 600;
  font-size: 45px;
  line-height: 55px;
  letter-spacing: -0.05em;
  color: #ffffff;
  margin-bottom: 44.41px;
`;

const StyledContainer = styled(Box)`
  position: relative;
  height: 960px;
  z-index: 1;
  > video:first-of-type {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    height: 1091px;
    background: url("images/Roadmap_BG.png") no-repeat;
    background-size: cover;
    padding-top: 123.74px;
    > video:first-of-type {
      display: none;
    }
  }
`;

export default Roadmap;
