import React, { ReactElement } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const StyledHeader = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 200px;
  height: 60px;
  border: 0;
  border-radius: 15px;

  font-weight: 500;
  font-size: 24px;
  color: #ffbe0b;
  background: linear-gradient(45deg, #8338ec 10%, #3a86ff);

  cursor: pointer;
`;

interface HeaderProps {
  setDataOrder: React.Dispatch<React.SetStateAction<number[]>>;
}

const shuffleOrder = () => {
  const rangeFive = [...Array(5).keys()];

  return rangeFive
    .map((e) => [Math.random(), e])
    .sort((a, b) => a[0] - b[0])
    .map((e) => e[1]);
};

export default function Header({ setDataOrder }: HeaderProps): ReactElement {
  const randomButtonHandler = () => {
    const shuffledOrder = shuffleOrder();
    setDataOrder(shuffledOrder);
  };

  return (
    <StyledHeader onClick={randomButtonHandler}>랜덤 순서 정하기</StyledHeader>
  );
}
