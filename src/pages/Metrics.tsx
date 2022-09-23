import React, { useState, useRef, useMemo } from "react";
import styled from "@mui/styled-engine-sc";
import { Box, Fade } from "@mui/material";
import { useCountUp } from "react-countup";
import axios from "axios";

const Metrics: React.FC<any> = ({ active }) => {
  const metric1 = useRef(null);
  const metric2 = useRef(null);
  const metric3 = useRef(null);
  const [metricData, setMetricData] = useState<any>({});
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const { update: start1, reset: reset1 } = useCountUp({
    ref: metric1,
    start: 0,
    end: metricData.monthly_transactions,
    delay: 0,
    duration: 3,
    separator: ",",
  });
  const { update: start2, reset: reset2 } = useCountUp({
    ref: metric2,
    start: 0,
    end: metricData.netwok_hashrate,
    delay: 0,
    duration: 4,
    separator: ",",
    decimal: ".",
    decimals: 2,
  });
  const { update: start3, reset: reset3 } = useCountUp({
    ref: metric3,
    start: 0,
    end: metricData.frozen_coins,
    delay: 0,
    duration: 5,
    separator: ",",
    decimal: ".",
    decimals: 3,
  });

  useMemo(async () => {
    if (active) {
      const {
        data: { result },
      } = await axios.get("https://cloe.deta.dev/clo_metrics");
      let tmp = { ...result };
      tmp.netwok_hashrate = parseFloat(
        result.netwok_hashrate.replace(" GH/s", "")
      );
      console.log(tmp);
      setMetricData(tmp);
      setTimeout(() => setOpen1(true), 700);
      setTimeout(() => setOpen2(true), 1000);
      setTimeout(() => setOpen3(true), 1300);
      reset1();
      reset2();
      reset3();
      start1(tmp.monthly_transactions);
      start2(tmp.netwok_hashrate);
      start3(tmp.frozen_coins);
    }
  }, [active, reset1, reset2, reset3, start1, start2, start3]);

  return (
    <StyledContainer>
      <video src="videos/Bg_H.264.webm" autoPlay muted loop />
      <Fade in={open3} timeout={500}>
        <video src="videos/Logo-Anim_VP9.webm" autoPlay muted loop />
      </Fade>
      <Title component='article'>Callisto Network Metrics</Title>
      <Fade in={open1} timeout={500}>
        <Metric1>
          <Text1>Monthly Transaction</Text1>
          <Text2>
            <span ref={metric1}></span> txs
          </Text2>
        </Metric1>
      </Fade>
      <Fade in={open3} timeout={500}>
        <Metric2>
          <Text1>Network Hashrate</Text1>
          <Text2>
            <span ref={metric2}></span> GH/s
          </Text2>
        </Metric2>
      </Fade>
      <Fade in={open2} timeout={500}>
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
  left: 25%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  > div + div {
    margin-top: 8.83px;
  }
  @media (max-width: 1700px) {
    left: 200px;
  }
  @media (max-width: 1200px) {
    top: unset;
    left: 50%;
    transform: translateX(-50%);
    bottom: 257.96px;
    width: 100%;
  }
`;

const Metric2 = styled(Box)`
  position: absolute;
  top: 50%;
  right: 25%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  > div + div {
    margin-top: 8.83px;
  }
  @media (max-width: 1700px) {
    right: 200px;
  }
  @media (max-width: 1200px) {
    top: unset;
    right: 50%;
    transform: translateX(50%);
    bottom: 162.28px;
    width: 100%;
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
  > div + div {
    margin-top: 8.83px;
  }
  @media (max-width: 1200px) {
    bottom: 58.47px;
    width: 100%;
  }
`;

const Text1 = styled(Box)`
  font-weight: 300;
  font-size: 1.375em;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.03em;
  @media (min-width: 1921px) and (min-height: 500px) {
    font-size: 2em;
    line-height: 1;
  }
  @media (min-width: 2501px) and (min-height: 500px) {
    font-size: 3em;
    line-height: 1;
  }
  @media (max-width: 360px) {
    font-size: 0.688em;
    line-height: 1em;
  }
`;

const Text2 = styled(Box)`
  font-weight: 600;
  font-size: 1.875em;
  line-height: 37px;
  text-align: center;
  letter-spacing: -0.05em;
  @media (min-width: 1921px) and (min-height: 500px) {
    font-size: 3em;
    line-height: 1;
  }
  @media (min-width: 2501px) and (min-height: 500px) {
    font-size: 4em;
    line-height: 1;
  }
  @media (max-width: 360px) {
    font-size: 0.938em;
    line-height: 22px;
  }
`;

const Title = styled(Box)`
  position: absolute;
  top: 178.66px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  @media (min-width: 1921px) {
    font-size: 6em;
    line-height: 1;
  }
  @media (min-width: 2501px) {
    font-size: 7em;
    line-height: 1;
  }
  @media (max-width: 768px) {
    top: 133.67px;
  }
`;

const StyledContainer = styled(Box)`
  position: relative;
  height: 100vh;
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
    @media (max-width: 1200px) {
      top: 45%;
    }
  }
  * {
    color: white;
  }
`;

export default Metrics;