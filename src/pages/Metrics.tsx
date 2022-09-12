import React from "react";
import styled from "@mui/styled-engine-sc";
import { Box, Fade } from "@mui/material";
import { useCountUp } from "react-countup";

const Metrics: React.FC<any> = ({ active }) => {
  const metric1 = React.useRef(null);
  const metric2 = React.useRef(null);
  const metric3 = React.useRef(null);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const { reset: reset1, start: start1 } = useCountUp({
    ref: metric1,
    start: 0,
    end: 2693273,
    delay: 0,
    duration: 5,
    separator: ".",
  });
  const { reset: reset2, start: start2 } = useCountUp({
    ref: metric2,
    start: 0,
    end: 6434,
    delay: 0,
    duration: 6,
    separator: ".",
  });
  const { reset: reset3, start: start3 } = useCountUp({
    ref: metric3,
    start: 0,
    end: 1228290964422,
    delay: 0,
    duration: 7,
    separator: ".",
  });

  React.useMemo(() => {
    if (active) {
      setTimeout(() => setOpen1(true), 2000);
      setTimeout(() => setOpen2(true), 3000);
      setTimeout(() => setOpen3(true), 4000);
      reset1();
      start1();
      reset2();
      start2();
      reset3();
      start3();
    }
  }, [active, reset1, reset2, reset3, start1, start2, start3]);

  return (
    <StyledContainer>
      <video src="videos/Bg_H.mp4" autoPlay muted loop />
      <Fade in={open3} timeout={3000}>
        <video src="videos/Logo-Anim_VP9.webm" autoPlay muted loop />
      </Fade>
      <Title>Callisto Network Metrics</Title>
      <Fade in={open1} timeout={3000}>
        <Metric1>
          <Text1>Monthly Transaction</Text1>
          <Text2>
            <span ref={metric1}></span> txs
          </Text2>
        </Metric1>
      </Fade>
      <Fade in={open3} timeout={3000}>
        <Metric2>
          <Text1>Network Hashrate</Text1>
          <Text2>
            <span ref={metric2}></span> GH/s
          </Text2>
        </Metric2>
      </Fade>
      <Fade in={open2} timeout={3000}>
        <Metric3>
          <Text1>Frozen Coins</Text1>
          <Text2>
            <span ref={metric3}></span> CLO
          </Text2>
        </Metric3>
      </Fade>
    </StyledContainer>
  );
};

const Metric1 = styled(Box)`
  position: absolute;
  top: 50%;
  left: 475.53px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.83px;
  @media (max-width: 1700px) {
    left: 200px;
  }
  @media (max-width: 1200px) {
    left: 50px;
  }
`;

const Metric2 = styled(Box)`
  position: absolute;
  top: 50%;
  right: 475.53px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.83px;
  @media (max-width: 1700px) {
    right: 200px;
  }
  @media (max-width: 1200px) {
    right: 50px;
  }
`;

const Metric3 = styled(Box)`
  position: absolute;
  bottom: 134.76px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8.83px;
  @media (max-width: 768px) {
    bottom: 40px;
  }
`;

const Text1 = styled(Box)`
  font-weight: 300;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.03em;
  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 16px;
  }
`;

const Text2 = styled(Box)`
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  letter-spacing: -0.05em;
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 22px;
  }
`;

const Title = styled(Box)`
  position: absolute;
  top: 178.66px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  letter-spacing: -0.05em;
  text-align: center;
  width: 100%;
  @media (max-width: 768px) {
    top: 80px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const StyledContainer = styled(Box)`
  position: relative;
  height: 960px;
  @media (max-width: 768px) {
    height: 480px;
  }
  > video:first-of-type {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  > video:nth-of-type(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  * {
    color: white;
  }
`;

export default Metrics;
