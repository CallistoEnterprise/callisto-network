import React, { useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Fade } from "@mui/material";
import styled from "@mui/styled-engine-sc";

import Topbar from "./Topbar";
import Footer from "./Footer";

interface Props {
  children?: any;
}

const Layout: React.FC<Props> = ({ children }: any) => {
  const ref = useRef<any>();
  const [loading, setLoading] = React.useState(true);
  useMemo(() => {
    if (ref.current) ref.current.defaultPlaybackRate = 2.5;
  }, []);
  return (
    <StyledContainer>
      <Topbar />
      <Body component="main">{children}</Body>
      <Footer />
      <Fade in={loading} timeout={{ appear: 0, exit: 500 }}>
        <Loading bgcolor="rgb(12, 11, 13)">
          <video
            ref={ref}
            src="videos/d11.mp4"
            autoPlay
            muted
            onEnded={() => setLoading(false)}
          />
        </Loading>
      </Fade>
    </StyledContainer>
  );
};

const Loading = styled(Box)`
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100%;
  > video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    transform: translate(-50%, -50%);
  }
`;

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
`;

const Body = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
