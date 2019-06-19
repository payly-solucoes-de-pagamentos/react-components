import React from "react";
import { storiesOf } from "@storybook/react";
import Balance from "../src/components/Balance";
import styled from "styled-components";

const balancePositive = {
  current: 100,
  scheduled: 90
};

const noFunds = {
  current: 0,
  scheduled: 0
};

const balanceLow = {
  current: 100,
  scheduled: 91
};

const balanceNegative = {
  current: 100,
  scheduled: 101
};

const Wrap = styled.div`
  display: flex;
  margin: 0 auto;
  justify-items: end;
  align-items: center;
  text-align: center;
  width: 1200px;
  height: 400px;
  flex-direction: column;
  margin-top: 150px;
`;

storiesOf("Balance", module)
  .add("balance positive", () => (
    <Wrap>
      <Balance balance={balancePositive} isLoading={false} />
    </Wrap>
  ))
  .add("balance with no funds", () => (
    <Wrap>
      <Balance balance={noFunds} isLoading={false} />
    </Wrap>
  ))
  .add("balance low", () => (
    <Wrap>
      <Balance balance={balanceLow} isLoading={false} />
    </Wrap>
  ))
  .add("balance negative", () => (
    <Wrap>
      <Balance balance={balanceNegative} isLoading={false} />
    </Wrap>
  ))
  .add("balance loading", () => (
    <Wrap>
      <Balance balance={balanceNegative} isLoading={true} />
    </Wrap>
  ));
