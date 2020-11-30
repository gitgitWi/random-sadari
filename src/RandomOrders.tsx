import React, { ReactElement } from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

import data from "./camperData";
import CamperOne from "./CamperOne";

const StyledOrdersWrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 24px 0;
  width: max-content;
  max-width: 900px;
`;

interface RandomOrdersProps {
  dataOrder: number[];
}

export default function RandomOrders({
  dataOrder
}: RandomOrdersProps): ReactElement {
  return (
    <StyledOrdersWrapper container spacing={2} justify="center">
      {dataOrder.map((order, idx) => {
        const { id, name } = data[order];
        return <CamperOne key={id} idx={idx + 1} id={id} name={name} />;
      })}
    </StyledOrdersWrapper>
  );
}
