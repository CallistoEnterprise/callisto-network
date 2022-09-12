import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";

interface Props {
  text: String;
  no: string;
  timeComponent: any;
}

const CardHeader: React.FC<Props> = (props) => {
  const { text, no, timeComponent } = props;
  return (
    <StyledContainer>
      <TimeName expired={text === "expired" ? 1 : 0}>{text}</TimeName>
      {timeComponent}
      <Increment>{no}</Increment>
    </StyledContainer>
  );
};

const Increment = styled(Box)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #f2f4fb;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TimeName = styled(Box)<any>`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  ${({ expired }) => expired === true && "color: #747C92;"}
`;

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-left: 23px;
  padding-right: 19px;
  background: #101011;
  height: 50px;
`;

export default CardHeader;
