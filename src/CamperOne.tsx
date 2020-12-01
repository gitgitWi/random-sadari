import React, { ReactElement } from "react";
import { Grid, Card, Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledOrderGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-family: "Noto Sans KR", sans-serif;

  &:hover {
    opacity: 0.9;
  }
`;

const StyledOrderCard = styled(Card)`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  background: linear-gradient(45deg, #eee6fd, #dee2ff, #eee6fd);
  color: #2c313a;
  cursor: pointer;

  animation: show-up 0.5s ease-in-out;

  @keyframes show-up {
    0% {
      transform: translateY(20px);
      opacity: 0.05;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const StyledRandomNum = styled(Typography)`
  align-self: center;
  margin-right: 15px;

  font-size: 40px;
  font-weight: 700;
  color: #8e3b46;
`;

const StyledCardCamper = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledCardID = styled(Typography)`
  font-weight: 400;
`;
const StyledCardName = styled(Typography)`
  font-weight: 700;
  font-size: 24px;
`;

interface CamperOneProps {
  idx: number;
  id: string;
  name: string;
}

export default function RandomOrders({
  idx,
  id,
  name
}: CamperOneProps): ReactElement {
  return (
    <StyledOrderGrid item>
      <StyledOrderCard>
        <StyledRandomNum>{idx}</StyledRandomNum>
        <StyledCardCamper>
          <StyledCardID>{id}</StyledCardID>
          <StyledCardName>{name}</StyledCardName>
        </StyledCardCamper>
      </StyledOrderCard>
    </StyledOrderGrid>
  );
}
