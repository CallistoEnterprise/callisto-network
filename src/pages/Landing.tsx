import React, { useState, useMemo, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import styled from "@mui/styled-engine-sc";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Decentralization from "./Decentralization";
import Metrics from "./Metrics";
import Roadmap from "./Roadmap";
import Partners from "./Partners";
import useWindowDimensions from "hooks/useDimensions";

const Landing: React.FC = () => {
  const [scrollableDown, setScrollableDown] = useState(true);
  const [scrollableUp, setScrollableUp] = useState(true);
  const [touchPoint, setTouchPoint] = useState(0);
  const [decentPage, setDecentPage] = useState(0);
  const [page, setPage] = useState(0);
  const [dead, setDead] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [fade, setFade] = useState(false);
  const [refs] = useState([
    useRef<any>(),
    useRef<any>(),
    useRef<any>(),
    useRef<any>(),
    useRef<any>(),
  ]);
  const screenWidth = useWindowDimensions().width;
  const screenHeight = useWindowDimensions().height;

  useEffect(() => {
    if (screenWidth === 280 && screenHeight === 653) alert("Galaxy Fold is not supported");
  }, [screenWidth, screenHeight]);

  useMemo(() => disableBodyScroll(document.body), []);
  useMemo(() => {
    setScrollableDown(page === 1 && decentPage <= 1 ? false : true);
    setScrollableUp(page === 1 && decentPage >= 1 ? false : true);
    if (refs[page].current) {
      setPlaying(true);
      if (fade) {
        refs.forEach((x) => {
          if (x.current) x.current.style.opacity = 0;
          else return;
        });
      }
      if (page === 1) {
        setTimeout(() => {
          refs.forEach((x) => {
            if (x.current) x.current.style.opacity = 0;
            else return;
          });
          refs[0].current.style.opacity = 1;
          setPlaying(false);
        }, 500);
      } else {
        setTimeout(() => {
          refs.forEach((x) => {
            if (x.current) x.current.style.opacity = 0;
            else return;
          });
          refs[page].current.style.opacity = 1;
          setPlaying(false);
        }, 500);
      }
    }
    if (window.pageYOffset === 0) disableBodyScroll(document.body);
    if (page === 4) enableBodyScroll(document.body);
    else disableBodyScroll(document.body);
  }, [page, decentPage, fade, refs]);

  const click = (pageNext: any) => {
    if (!playing) {
      if (page === 0 && pageNext > 1) setDead(true);
      else setDead(false);
      if (
        (page === 0 && pageNext === 1) ||
        (page === 0 && pageNext === 0) ||
        (page === 1 && pageNext === 0) ||
        (page === 1 && pageNext === 1)
      ) {
        setFade(false);
      } else {
        setFade(true);
      }
      setPage(pageNext);
      if (page === 4 && pageNext !== 4) document.body.scrollIntoView({ behavior: "smooth" });
    }
  };

  const wheel = (e: any) => {
    if (!playing) {
      if (page < 4 || (page === 4 && window.pageYOffset === 0)) {
        switch (e.deltaY > 0) {
          case true:
            if (page < 4 && scrollableDown) click(page + 1);
            break;
          case false:
            if (page > 0 && scrollableUp) click(page - 1);
            break;
        }
      }
    }
  };

  const touchStart = (e: any) => setTouchPoint(e.touches[0].clientY);

  const touchEnd = (e: any) => {
    var te = e.changedTouches[0].clientY;
    if (!playing && (page < 4 || (page === 4 && window.pageYOffset === 0))) {
      if (touchPoint > te + 5 && page < 4 && scrollableDown) click(page + 1);
      else if (touchPoint < te - 5 && page > 0 && scrollableUp) click(page - 1);
    }
  };

  return (
    <StyledContainer onWheel={wheel} onTouchStart={touchStart} onTouchEnd={touchEnd}>
      <main>
        <section ref={refs[0]}>
          <Decentralization
            next={page >= 1 && !dead}
            page={decentPage}
            setFade={setFade}
            setPage={setDecentPage}
            landingPage={page}
          />
        </section>
        <section ref={refs[1]} />
        <section ref={refs[2]} style={{ opacity: 0 }}>
          <Metrics active={page === 2} />
        </section>
        <section ref={refs[3]} style={{ opacity: 0 }}>
          <Roadmap active={page === 3} />
        </section>
        <section ref={refs[4]} style={{ opacity: 0 }}>
          <Partners />
        </section>
        <Pagination>
          <Page active={page === 0 ? 1 : 0} onClick={() => click(0)} />
          <Page active={page === 1 ? 1 : 0} onClick={() => click(1)} />
          <Page active={page === 2 ? 1 : 0} onClick={() => click(2)} />
          <Page active={page === 3 ? 1 : 0} onClick={() => click(3)} />
          <Page active={page === 4 ? 1 : 0} onClick={() => click(4)} />
        </Pagination>
        <ScrollIcon component="img" src="images/Mouse.svg" />
      </main>
    </StyledContainer>
  );
};

const ScrollIcon = styled(Box)`
  position: absolute;
  bottom: 100px;
  right: 173px;
  z-index: 4;
  animation-name: mouse-scroll;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  @media (max-width: 1000px) {
    display: none;
  }
  @media (max-width: 768px) {
    bottom: 32px;
    right: 64px;
  }
  @media (width: 1024px) and (height: 600px) {
    right: 64px;
  }
`;

const Page = styled(Box)<any>`
  cursor: pointer;
  ${({ active }: any) => active && "transform: scale(2.1517);"}
`;

const Pagination = styled(Box)`
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  right: 170px;
  transform: translateY(-50%);
  > div + div {
    margin-top: 27.78px;
  }
  > div {
    width: 5.6px;
    height: 5.6px;
    transition: 0.3s;
    background: #d9d9d9;
    border-radius: 50%;
  }
  @media (max-width: 1000px) {
    display: none;
  }
  @media (width: 1024px) and (height: 600px) {
    right: 64px;
  }
`;

const StyledContainer = styled(Box)`
  > main {
    position: relative;
    height: 100vh;
    > section {
      position: absolute;
      width: 100%;
      transition: 1s;
    }
  }
`;
export default Landing;
