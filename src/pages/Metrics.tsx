import React, { useState, useRef, useMemo } from "react";
import styled from "@mui/styled-engine-sc";
import { Box, Fade } from "@mui/material";
import { useCountUp } from "react-countup";
import axios from "axios"

const Metrics: React.FC<any> = ({ active }) => {
  const metric1 = useRef(null);
  const metric2 = useRef(null);
  const metric3 = useRef(null);
  const [metricData, setMetricData] = useState<any>({});
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const { update: start1 } = useCountUp({
    ref: metric1,
    start: 0,
    end: metricData.monthly_transactions,
    delay: 0,
    duration: 5,
    separator: ",",
  });
  const { update: start2 } = useCountUp({
    ref: metric2,
    start: 0,
    end: metricData.netwok_hashrate,
    delay: 0,
    duration: 6,
    separator: ",",
    decimal: ".",
    decimals: 2,
  });
  const { update: start3 } = useCountUp({
    ref: metric3,
    start: 0,
    end: metricData.frozen_coins,
    delay: 0,
    duration: 7,
    separator: ",",
    decimal: ".",
    decimals: 3,
  });

  useMemo(async() => {
    if (active) {
      // const tmp = {
      //   monthly_transactions: 900102,
      //   total_wallets: 1641399,
      //   frozen_coins: 1180191753.6087244,
      //   netwok_hashrate: 385.54,
      // };
      const {
        data: { result },
      } = await axios.get("https://cloe.deta.dev/clo_metrics");
      let tmp = {...result};
      tmp.netwok_hashrate = parseFloat(result.netwok_hashrate.replace(" GH/s", ""));
      console.log(tmp);
      setMetricData(tmp);
      setTimeout(() => setOpen1(true), 2000);
      setTimeout(() => setOpen2(true), 3000);
      setTimeout(() => setOpen3(true), 4000);
      start1(tmp.monthly_transactions);
      start2(tmp.netwok_hashrate);
      start3(tmp.frozen_coins);
    }
  }, [active, start1, start2, start3]);

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
  right: 475.53px;
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
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  letter-spacing: -0.03em;
`;

const Text2 = styled(Box)`
  font-weight: 600;
  font-size: 30px;
  line-height: 37px;
  text-align: center;
  letter-spacing: -0.05em;
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
    top: 133.67px;
    font-size: 42px;
    line-height: 51px;
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
