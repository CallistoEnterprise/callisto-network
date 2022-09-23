import React, { useState, useMemo, useRef } from "react";
import styled from "@mui/styled-engine-sc";
import { Box } from "@mui/material";

const Decentralization: React.FC<any> = ({ next, page, setPage, setFade, landingPage }) => {
  const [playing, setPlaying] = useState(false);
  const [touchPoint, setTouchPoint] = useState(0);
  const [section1] = useState([useRef<any>(), useRef<any>()]);
  const [section2] = useState([useRef<any>(), useRef<any>()]);
  const [refs] = useState([useRef<any>(), useRef<any>(), useRef<any>()]);
  const [videoRefs] = useState([useRef<any>(), useRef<any>(), useRef<any>()]);
  useMemo(() => {
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
      }, 500);
    }
  }, [page, refs, videoRefs]);
  useMemo(() => {
    if (next === true && !section2.some((x) => x.current === undefined)) {
      section1.forEach((x) => (x.current.style.opacity = 0));
      setPlaying(true);
      setTimeout(() => {
        section2.forEach((x) => (x.current.style.opacity = 1));
        setPlaying(false);
      }, 500);
    }
    if (next === false && !section1.some((x) => x.current === undefined)) {
      section2.forEach((x) => (x.current.style.opacity = 0));
      setPlaying(true);
      setTimeout(() => {
        section1.forEach((x) => (x.current.style.opacity = 1));
        setPlaying(false);
      }, 500);
    }
  }, [next, section1, section2]);
  const click = (pageNext: any) => {
    setFade(false);
    if (!playing) setPage(pageNext);
  };
  const wheel = (e: any) => {
    if (!playing && landingPage === 1) {
      switch (e.deltaY > 0) {
        case true:
          if (page < 2) click(page + 1);
          break;
        case false:
          if (page > 0) click(page - 1);
          break;
      }
    }
  };
  const touchStart = (e: any) => setTouchPoint(e.touches[0].clientY);

  const touchEnd = (e: any) => {
    var te = e.changedTouches[0].clientY;
    if (!playing && landingPage === 1) {
      if (touchPoint > te + 5 && page < 2) click(page + 1);
      else if (touchPoint < te - 5 && page > 0) click(page - 1);
    }
  };
  return (
    <StyledContainer
      next={next ? 1 : 0}
      onWheel={wheel}
      onTouchStart={touchStart}
      onTouchEnd={touchEnd}
    >
      <img src="images/Earth.png" alt="" />
      <video src="videos/Stars.webm" autoPlay muted loop />
      <video ref={section1[0]} src="videos/Logo_Anim M.webm" autoPlay muted loop />
      <CuttingText component="h1" ref={section1[1]}>
        Cutting Edge Decentralization
      </CuttingText>
      <Section2 ref={section2[0]} style={{ opacity: 0 }}>
        <Title component="article">Why Callisto Network?</Title>
        <Box position="relative">
          <Content ref={refs[0]}>
            <Subtitle component="h2">Proof of Work</Subtitle>
            <Text mt="17.9px" maxWidth="745.57px">
              A proof-of-work blockchain compatible with EVM applications and resistant to{" "}
              <span>51% attacks.</span>
            </Text>
            <Text mt="11.27px" maxWidth="825.14px">
              By introducing <span>ZPoW</span>, we aim to address the limitations of{" "}
              <span>proof-of-work</span> consensus by enabling a throughput of up to{" "}
              <span>100 000 transactions</span> per second with a level of security identical to
              Bitcoin.
            </Text>
          </Content>
          <Content ref={refs[1]} style={{ opacity: 0 }}>
            <Subtitle component="h2">Security</Subtitle>
            <Text mt="17.9px" maxWidth="745.57px">
              Security is the real catalyst for the adoption of any technology; with this in mind,{" "}
              <span>Callisto Network</span> was born with the vision of fostering the blockchain
              ecosystem's security.
            </Text>
            <Text mt="11.27px" maxWidth="825.14px">
              Having contributed to the most popular blockchains and crypto projects, we are
              leveraging our experience to establish <span>Callisto Network</span> as the most
              advanced and <span>secure proof of work blockchain.</span>
            </Text>
          </Content>
          <Content ref={refs[2]} style={{ opacity: 0 }}>
            <Subtitle component="h2">Monetary Policy</Subtitle>
            <Text mt="17.9px" maxWidth="745.57px">
              One of Callisto Network's unique features is its <span>Dynamic Monetary Policy</span>,
              which introduces a dynamic inflation/deflation rate based on the usage of blockchain
              with incentives for miners to secure the network continuously.
            </Text>
            <Text mt="11.27px" maxWidth="825.14px">
              A burn mechanism ensures that CLO coins have a long-term total supply of{" "}
              <span>3 billion</span>; thereby, CLO can be considered as a store of value asset.
            </Text>
          </Content>
        </Box>
        <Pagination ref={section2[1]} style={{ opacity: 0 }}>
          <Page active={page === 0 ? 1 : 0} onClick={() => click(0)} />
          <Page active={page === 1 ? 1 : 0} onClick={() => click(1)} />
          <Page active={page === 2 ? 1 : 0} onClick={() => click(2)} />
        </Pagination>
        <video ref={videoRefs[0]} src="videos/ZPoW_VP9.webm" autoPlay muted loop />
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
    </StyledContainer>
  );
};

const Content = styled(Box)`
  margin-top: 153.22px;
  position: absolute;
  width: calc(100vw - 316.34px);
  transition: 0.4s;
  @media (max-width: 1600px) {
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    margin-top: 32px;
    width: calc(100vw - 86.95px);
  }
`;

const Page = styled(Box)<any>`
  transition: 0.4s;
  cursor: pointer;
  ${({ active }: any) => active && "transform: scale(2.346);"}
`;

const Pagination = styled(Box)`
  position: absolute;
  z-index: 2;
  bottom: 141.92px;
  display: flex;
  transition: 0.4s;
  > div + div {
    margin-left: 23px;
  }
  > div {
    cursor: pointer;
    width: 5.6px;
    height: 5.6px;
    background: #d9d9d9;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Text = styled(Box)`
  font-weight: 300;
  font-size: 1.375em;
  line-height: 27px;
  letter-spacing: -0.03em;
  color: white;
  > span {
    font-weight: 600;
  }
  @media (max-width: 1000px) {
    > span {
      font-weight: 500;
    }
  }
  @media (max-width: 500px) {
    font-size: 1em;
    line-height: 20px;
  }
`;

const Subtitle = styled(Box)`
  font-weight: 600;
  font-size: 2.188em;
  line-height: 43px;
  letter-spacing: -0.05em;
  color: white;
  @media (max-width: 360px) {
    font-size: 1.75em;
    line-height: 36px;
  }
  @media (max-width: 320px) {
    font-size: 1.313em;
    line-height: 29px;
  }
`;

const Title = styled(Box)`
  color: white;
  width: max-content;

  @media (max-width: 768px) {
    top: 40px;
    width: auto;
  }
`;

const Section2 = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: 0.4s;
  height: 100%;
  position: relative;
  z-index: 2;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  > video {
    position: absolute;
    top: calc(50% - 82px);
    right: -150px;
    transform: translateY(-50%);
    transition: 0.4s;
    @media (max-width: 1600px) {
      top: unset;
      bottom: 10%;
      right: 50%;
      transform: translateX(50%);
    }
    @media (max-width: 1600px) and (max-height: 1434px) {
      bottom: 0;
    }
    @media (max-width: 1600px) and (max-height: 1000px) {
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
  transition: 0.4s;
  font-weight: 700;
  font-size: 2.188em;
  line-height: 43px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #ffffff;
  width: 100%;
  @media (min-width: 1921px) {
    font-size: 5em;
    line-height: 1;
  }
  @media (min-width: 2501px) {
    font-size: 6em;
    line-height: 1;
  }
  @media (max-width: 768px) {
    bottom: 68.81px;
  }
  @media (max-width: 360px) {
    font-size: 2.25em;
    line-height: 45px;
  }
  @media (max-width: 320px) {
    font-size: 1.375em;
    line-height: 31px;
  }
`;

const StyledContainer = styled(Box)<any>`
  position: relative;
  height: 100vh;
  background: url("images/Sky.png") no-repeat;
  background-size: cover;
  overflow: hidden;
  padding-top: 325.4px;
  padding-left: 158.17px;
  padding-right: 158.17px;
  @media (max-width: 1600px) {
    background-size: 100% 175%;
    padding-top: 124.01px;
  }
  @media (max-width: 768px) {
    background-size: cover;
    padding-left: 51.56px;
    padding-right: 0;
  }
  > img {
    position: absolute;
    max-width: unset;
    width: 123%;
    bottom: 0;
    transition: 0.4s;
    z-index: 1;
    right: ${({ next }: any) => (next ? -23 : 0)}%;
    @media (max-width: 1000px) {
      width: auto;
      right: unset;
      left: ${({ next }: any) => (next ? -80 : -100)}%;
    }
    @media (max-width: 768px) {
      width: auto;
      right: unset;
      left: ${({ next }: any) => (next ? -120 : -195)}%;
    }
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
    height: 60vh;
    transform: translate(-50%, calc(-50% - 63.56px));
    z-index: 2;
    transition: 0.4s;
    @media (max-width: 1600px) and (max-height: 1000px) {
      height: 50vh;
    }
    /* @media (max-width: 1024px) {
      width: 300px;
      transform: translate(-50%, -50%);
    }
    @media (max-width: 768px) {
      width: 320px;
      transform: translate(-50%, -50%);
    }
    @media (max-width: 400px) {
      width: 240px;
      transform: translate(-50%, -50%);
    }
    @media (max-height: 1000px) {
      width: 300px !important;
      transform: translate(-50%, -50%);
    } */
  }
`;

export default Decentralization;
