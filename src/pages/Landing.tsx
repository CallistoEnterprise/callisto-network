import React from "react";
import { Box } from "@mui/material";
import styled from "@mui/styled-engine-sc";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Decentralization from "./Decentralization";
import Metrics from "./Metrics";
import Roadmap from "./Roadmap";
import Partners from "./Partners";

const Landing: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [dead, setDead] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [fade, setFade] = React.useState(false);
  const [refs] = React.useState([
    React.useRef<any>(),
    React.useRef<any>(),
    React.useRef<any>(),
    React.useRef<any>(),
    React.useRef<any>(),
  ]);
  React.useMemo(() => {
    disableBodyScroll(document.body);
  }, []);
  React.useMemo(() => {
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
        }, 1100);
      } else {
        setTimeout(() => {
          refs.forEach((x) => {
            if (x.current) x.current.style.opacity = 0;
            else return;
          });
          refs[page].current.style.opacity = 1;
          setPlaying(false);
        }, 1100);
      }
    }
    if (window.pageYOffset === 0) disableBodyScroll(document.body);
    if (page === 4) enableBodyScroll(document.body);
    else disableBodyScroll(document.body);
  }, [page, fade, refs]);

  const click = (pageNext: any) => {
    if (!playing) {
      if (page === 0 && pageNext > 1) setDead(true);
      else setDead(false);
      if (
        (page === 0 && pageNext === 1) ||
        (page === 0 && pageNext === 0) ||
        (page === 1 && pageNext === 0) ||
        (page === 1 && pageNext === 1)
      )
        setFade(false);
      else {
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
            if (page < 4) click(page + 1);
            break;
          case false:
            if (page > 0) click(page - 1);
            break;
          default:
            console.log("negative");
        }
      }
    }
  };

  return (
    <StyledContainer onWheel={wheel}>
      <main>
        <section ref={refs[0]}>
          <Decentralization next={page >= 1 && !dead} />
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
  @media (max-width: 768px) {
    bottom: 32px;
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
  gap: 27.78px;
  top: 50%;
  right: 170px;
  transform: translateY(-50%);
  @media (max-width: 1000px) {
    display: none;
  }
  > div {
    width: 5.6px;
    height: 5.6px;
    transition: 0.3s;
    background: #d9d9d9;
    border-radius: 50%;
  }
`;

const StyledContainer = styled(Box)`
  > main {
    position: relative;
    height: 960px;
    @media (max-width: 768px) {
      height: 480px;
    }
    > section {
      position: absolute;
      width: 100%;
      transition: 1s;
    }
  }
`;
export default Landing;
