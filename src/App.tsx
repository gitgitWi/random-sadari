import React, { useState, ReactElement } from "react";
import { StylesProvider } from "@material-ui/core";
import styled from "styled-components";

import Header from "./Header";
import RandomOrders from "./RandomOrders";

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  height: max-content;
  background-color: transparent;

  font-family: "Noto Sans KR", sans-serif;
`;

export default function App(): ReactElement {
  const [dataOrder, setDataOrder] = useState<number[]>([...Array(5).keys()]);

  return (
    <StylesProvider injectFirst>
      <StyledAppWrapper>
        <Header setDataOrder={setDataOrder} />
        <RandomOrders dataOrder={dataOrder} />
      </StyledAppWrapper>
    </StylesProvider>
  );
}
