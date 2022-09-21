import React from "react";
import styled from "@mui/styled-engine-sc";
import { Box } from "@mui/material";
import Carousel from "fade-carousel";

const arr = [
  "images/Partners/Partners-01.png",
  "images/Partners/Partners-02.png",
  "images/Partners/Partners-03.png",
  "images/Partners/Partners-04.png",
  "images/Partners/Partners-05.png",
  "images/Partners/Partners-06.png",
  "images/Partners/Partners-07.png",
  "images/Partners/Partners-08.png",
  "images/Partners/Partners-09.png",
  "images/Partners/Partners-10.png",
  "images/Partners/Partners-11.png",
];
const Partners: React.FC<any> = () => {
  return (
    <StyledContainer>
      <video src="videos/Stars_Partners.webm" autoPlay muted loop />
      <Box>
        <img src="images/Earth_Partners.png" alt="" />
        <Pictures>
          <Carousel delay={3000} mode="fade" divStyle={{ height: 300 }}>
            {arr.map((url, i) => (
              <img key={i} src={url} alt="asdada" />
            ))}
          </Carousel>
          <TitleMobile>Partners</TitleMobile>
        </Pictures>
      </Box>
      <Title>Partners</Title>
    </StyledContainer>
  );
};

const Pictures = styled(Box)`
  position: absolute;
  top: 15%;
  right: 535px;
  width: 260px;
  > div > div {
    overflow: unset !important;
    display: flex;
    align-items: center;
    > div:not(:last-of-type) {
      height: auto !important;
      justify-content: center;
    }
    > div:last-of-type {
      > div:first-of-type {
        display: flex;
        align-items: center;
        align-self: unset;
      }
      > div:nth-of-type(2) {
        display: none;
      }
    }
  }
  svg:first-of-type {
    transform: translateX(-100px);
    stroke: white;
  }
  svg:nth-of-type(2) {
    transform: translateX(100px);
    stroke: white;
  }
  @media (min-width: 1921px) {
    right: 34.7vw;
    transform: translateX(50%);
  }
  @media (max-width: 1000px) {
    right: 435px;
    svg {
      display: none;
    }
  }
  @media (max-height: 840px) {
    top: unset;
    bottom: 30%;
  }
  @media (min-width: 1921px) and (max-height: 840px) {
    top: unset;
    bottom: 25%;
  }
  @media (max-width: 800px) {
    right: 285px;
  }
  @media (max-height: 675px) {
    transform: scale(.7);
    >div:nth-of-type(2) {
      bottom: 100%;
    }
  }
  @media (max-width: 600px) {
    right: 75px;
  }
  @media (max-height: 560px) {
    bottom: 17%;
  }
  @media (max-width: 360px) {
    right: 30px;
  }
`;

const Title = styled(Box)`
  position: absolute;
  top: 46%;
  left: 159.06px;
  transform: translateY(-50%);
  font-weight: 600;
  font-size: 65px;
  line-height: 79px;
  letter-spacing: -0.05em;
  color: white;
  @media (max-width: 1400px) {
    display: none;
  }
`;

const TitleMobile = styled(Box)`
  position: absolute;
  bottom: calc(100% + 30px);
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  font-size: 45px;
  line-height: 55px;
  letter-spacing: -0.05em;
  color: #ffffff;
  @media (min-width: 1401px) {
    display: none;
  }
`;

const StyledContainer = styled(Box)`
  position: relative;
  height: 100vh;
  background: url("images/Sky.png") no-repeat;
  background-size: cover;
  > div:first-of-type {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    > img {
      max-width: unset;
      height: 100%;
      @media (min-width: 1920px) {
        width: 100%;
      }
      @media (max-width: 1000px) {
        object-position: 100px;
      }
      @media (max-width: 800px) {
        object-position: 250px;
      }
      @media (max-width: 600px) {
        object-position: 460px;
      }
      @media (max-width: 360px) {
        object-position: 500px;
      }
    }
  }
  > video:first-of-type {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export default Partners;
