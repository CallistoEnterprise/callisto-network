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
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)`
  position: relative;
  height: 960px;
  z-index: 1;
  @media (max-width: 768px) {
    height: 480px;
  }
  > video:first-of-type {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Roadmap;
