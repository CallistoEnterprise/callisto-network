import React from "react";
import styled from "@mui/styled-engine-sc";
import { Box, Fade } from "@mui/material";

const Topbar: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledContainer>
      <Box display="flex">
        <img src="images/Callisto Logo.png" alt="" />
        <Box display="flex" alignItems="center">
          <PCMenu display="flex" alignItems="center">
            <span>Developers</span>
            <span>Ecosystem</span>
            <span>Community</span>
            <span>Proof Of Work</span>
            <span>Masternodes</span>
            <span>Discover</span>
          </PCMenu>
          <MenuIcon>
            <img onClick={() => setOpen(!open)} src="images/Menu.svg" alt="" />
            <Fade in={open}>
              <MobileMenu onClick={() => setOpen(false)}>
                <Box>Developers</Box>
                <Box>Ecosystem</Box>
                <Box>Community</Box>
                <Box>Proof Of Work</Box>
                <Box>Masternodes</Box>
                <Box>Discover</Box>
              </MobileMenu>
            </Fade>
          </MenuIcon>
        </Box>
      </Box>
    </StyledContainer>
  );
};

const MobileMenu = styled(Box)`
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  background: white;
  border: 1px solid grey;
  > div {
    cursor: pointer;
    transition: .3s;
    padding: 20px;
    color: black;
    &:hover {
      background: lightgrey;
    }
  }
`;

const MenuIcon = styled(Box)`
  position: relative;
`;

const PCMenu = styled(Box)`
  gap: 46.67px;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.05em;
  color: white;
  @media (max-width: 1440px) {
    display: none !important;
  }
  > span {
    cursor: pointer;
  }
`;

const StyledContainer = styled(Box)`
  position: fixed;
  z-index: 5;
  width: 100%;
  > div {
    justify-content: space-between;
    align-items: center;
    padding: 40px 160px 0 160px;
    box-sizing: content-box;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
      padding: 20px 32px;
    }
    > div {
      column-gap: 44.17px;
    }
  }
`;

export default Topbar;
