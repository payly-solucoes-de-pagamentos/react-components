import styled from "styled-components";
import { flexPosition, fontStyle } from "../../styles/mixins";
import { GRAY_DARKER } from "../../styles/variables";
import theme from "../../styles/theme";

export const BalanceContainer = styled.div`
  background-color: #fff;
  flex-direction: column;
  ${flexPosition("center", "center")}
`;

export const BalanceRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const BalanceColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;
export const BalanceIntervalContainer = styled.div`
  width: 44%;
`;

export const MiddleAlertIcon = styled.div`
  margin-right: 7px;
  margin-left: 115px;
  position: relative;
  top: 25px;
  visibility: ${props => (props.show ? "visible" : "hidden")};
`;

export const Label = styled.span`
  font-family: ${theme.text.fontFamily};
  ${fontStyle(GRAY_DARKER, "13px", 600)}
  text-align: right;
  text-rendering: geometricPrecision;
`;

export const Balance = styled.span`
  color: ${props => props.color};
  font-family: ${theme.text.fontFamily};
  display: ${props => (props.show ? "block" : "none")};
  font-size: 26px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  text-rendering: geometricPrecision;
`;

export const LoadingContainer = styled.div`
  font-family: ${theme.text.fontFamily};
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #333333;
  display: flex;
  align-items: center;
  padding-top: 10px;
  margin-bottom: 10px;
  & > span {
    padding-right: 7px;
  }
`;
