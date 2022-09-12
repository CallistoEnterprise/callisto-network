import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

const Decentralization: React.FC<any> = ({ next, slide }) => {
  const [page, setPage] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const [section1] = React.useState([React.useRef<any>(), React.useRef<any>()]);
  const [section2] = React.useState([React.useRef<any>(), React.useRef<any>()]);
  const [refs] = React.useState([React.useRef<any>(), React.useRef<any>(), React.useRef<any>()]);
  const [videoRefs] = React.useState([
    React.useRef<any>(),
    React.useRef<any>(),
    React.useRef<any>(),
  ]);
  React.useMemo(() => {
    if (refs[page].current && videoRefs[page].current) {
      refs.forEach((x, i) => {
        x.current.style.opacity = 0;
        videoRefs[i].current.style.opacity = 0;
      });
      setPlaying(true);
      setTimeout(() => {
        refs[page].current.style.opacity = 1;
        videoRefs[page].current.style.opacity = 1;
        setPlaying(false);
      }, 1100);
    }
  }, [page, refs, videoRefs]);
  React.useMemo(() => {
    if (next === true && !section2.some((x) => x.current === undefined)) {
      section1.forEach((x) => (x.current.style.opacity = 0));
      setPlaying(true);
      setTimeout(() => {
        section2.forEach((x) => (x.current.style.opacity = 1));
        setPlaying(false);
      }, 1100);
    }
    if (next === false && !section1.some((x) => x.current === undefined)) {
      section2.forEach((x) => (x.current.style.opacity = 0));
      setPlaying(true);
      setTimeout(() => {
        section1.forEach((x) => (x.current.style.opacity = 1));
        setPlaying(false);
      }, 1100);
    }
  }, [next, section1, section2]);
  return (
    <StyledContainer next={next ? 1 : 0}>
      <img src="images/Earth.png" alt="" />
      <video src="videos/Stars.webm" autoPlay muted loop />
      <video
        ref={section1[0]}
        src="videos/Logo_Anim Hi Quality.webm"
        autoPlay
        muted
        loop
      />
      <CuttingText ref={section1[1]}>Cutting Edge Decentralization</CuttingText>
      <Section2 ref={section2[0]} style={{ opacity: 0 }}>
        <Title>Why Callisto Network?</Title>
        <Box position="relative">
          <Content ref={refs[0]}>
            <Subtitle>Proof of Work</Subtitle>
            <Text mt="17.9px" maxWidth="745.57px">
              A proof-of-work blockchain compatible with EVM applications and
              resistant to <span>51% attacks.</span>
            </Text>
            <Text mt="11.27px" maxWidth="825.14px">
              By introducing <span>ZPoW</span>, we aim to address the
              limitations of <span>proof-of-work</span> consensus by enabling a
              throughput of up to <span>100 000 transactions</span> per second
              with a level of security identical to Bitcoin.
            </Text>
          </Content>
          <Content ref={refs[1]} style={{ opacity: 0 }}>
            <Subtitle>Security</Subtitle>
            <Text mt="17.9px" maxWidth="745.57px">
              Security is the real catalyst for the adoption of any technology;
              with this in mind, <span>Callisto Network</span> was born with the
              vision of fostering the blockchain ecosystem's security.
            </Text>
            <Text mt="11.27px" maxWidth="825.14px">
              Having contributed to the most popular blockchains and crypto
              projects, we are leveraging our experience to establish{" "}
              <span>Callisto Network</span> as the most advanced and{" "}
              <span>secure proof of work blockchain.</span>
            </Text>
          </Content>
          <Content ref={refs[2]} style={{ opacity: 0 }}>
            <Subtitle>Monetary Policy</Subtitle>
            <Text mt="17.9px" maxWidth="745.57px">
              One of Callisto Network's unique features is its{" "}
              <span>Dynamic Monetary Policy</span>, which introduces a dynamic
              inflation/deflation rate based on the usage of blockchain with
              incentives for miners to secure the network continuously.
            </Text>
            <Text mt="11.27px" maxWidth="825.14px">
              A burn mechanism ensures that CLO coins have a long-term total
              supply of <span>3 billion</span>; thereby, CLO can be considered
              as a store of value asset.
            </Text>
          </Content>
        </Box>
        <video
          ref={videoRefs[0]}
          src="videos/ZPoW_VP9.webm"
          autoPlay
          muted
          loop
        />
        <video
          ref={videoRefs[1]}
          src="videos/Security_VP9.webm"
          autoPlay
          muted
          loop
          style={{ opacity: 0 }}
        />
        <video
          ref={videoRefs[2]}
          src="videos/Policy_VP9.webm"
          autoPlay
          muted
          loop
          style={{ opacity: 0 }}
        />
      </Section2>
      <Pagination ref={section2[1]} style={{ opacity: 0 }}>
        <Page
          active={page === 0 ? 1 : 0}
          onClick={() => !playing && setPage(0)}
        />
        <Page
          active={page === 1 ? 1 : 0}
          onClick={() => !playing && setPage(1)}
        />
        <Page
          active={page === 2 ? 1 : 0}
          onClick={() => !playing && setPage(2)}
        />
      </Pagination>
    </StyledContainer>
  );
};

const Content = styled(Box)`
  margin-top: 153.22px;
  position: absolute;
  width: calc(100vw - 316.34px);
  transition: 1s;
  @media (max-width: 1600px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    margin-top: 32px;
    width: calc(100vw - 80px);
  }
`;

const Page = styled(Box)<any>`
  transition: 1s;
  cursor: pointer;
  ${({ active }) => active && "transform: scale(2.346);"}
`;

const Pagination = styled(Box)`
  position: absolute;
  z-index: 2;
  bottom: 141.92px;
  left: 163.96px;
  display: flex;
  gap: 23px;
  transition: 1s;
  @media (max-width: 768px) {
    bottom: 30px;
    left: 40px;
  }
  > div {
    cursor: pointer;
    width: 5.6px;
    height: 5.6px;
    background: #d9d9d9;
    border-radius: 50%;
  }
`;

const Text = styled(Box)`
  font-weight: 300;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: -0.03em;
  color: white;
  @media (max-width: 1000px) {
    font-size: 18px;
    line-height: 23px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 17px;
  }
  > span {
    font-weight: 600;
  }
`;

const Subtitle = styled(Box)`
  font-weight: 600;
  font-size: 35px;
  line-height: 43px;
  letter-spacing: -0.05em;
  color: white;
  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 25px;
  }
`;

const Title = styled(Box)`
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  letter-spacing: -0.05em;
  color: white;
  width: max-content;
  @media (max-width: 768px) {
    top: 40px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const Section2 = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: 1s;
  height: 100%;
  position: relative;
  z-index: 2;
  > video {
    position: absolute;
    top: calc(50% - 82px);
    right: -80px;
    transform: translateY(-50%);
    transition: 1s;
    @media (max-width: 1600px) {
      display: none;
    }
  }
`;

const CuttingText = styled(Box)`
  position: absolute;
  z-index: 2;
  bottom: 63.56px;
  left: 50%;
  transform: translateX(-50%);
  transition: 1s;
  font-weight: 700;
  font-size: 35px;
  line-height: 43px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #ffffff;
  width: 100%;
  @media (max-width: 768px) {
    bottom: 31.28px;
    font-size: 14px;
    line-height: 22px;
  }
`;

const StyledContainer = styled(Box)<any>`
  position: relative;
  height: 960px;
  background: url("images/Sky.png") no-repeat;
  overflow: hidden;
  padding-top: 325.4px;
  padding-left: 158.17px;
  padding-right: 158.17px;
  @media (max-width: 1600px) {
    background-size: 100% 175%;
  }
  @media (max-width: 768px) {
    height: 480px;
    padding-top: 100px;
    padding-left: 40px;
  }
  > img {
    position: absolute;
    max-width: unset;
    width: 123%;
    bottom: 0;
    transition: 1s;
    z-index: 1;
    right: ${({ next }) => (next ? -23 : 0)}%;
  }
  > video:first-of-type {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  > video:nth-of-type(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 63.56px));
    z-index: 2;
    transition: 1s;
    @media (max-width: 1024px) {
      width: 50%;
    }
    @media (max-width: 768px) {
      width: 250px;
      transform: translate(-50%, -50%);
    }
  }
`;

export default Decentralization;
