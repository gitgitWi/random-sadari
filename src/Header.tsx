import React, { ReactElement } from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";

const StyledHeader = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: max-content;
  height: 60px;
  padding: 0 15px;

  border: 0;
  border-radius: 15px;

  font-family: "Sunflower", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: #ffbe0b;
  background: rgb(131, 56, 236);
  box-shadow: 0 0 5px rgba(255, 195, 31, 0.5);

  cursor: pointer;
`;

const StyledHeaderInfo = styled(Typography)`
  margin-top: 10px;
  font-weight: 300;
  font-size: 10px;
  color: rgb(240, 242, 244);

  &::after {
    content: "👆👆👆위 버튼을 눌러주세요👆👆👆";
  }
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
    <>
      <StyledHeader onClick={randomButtonHandler}>
        랜덤 순서 정하기
      </StyledHeader>
      <StyledHeaderInfo />
    </>
  );
}
