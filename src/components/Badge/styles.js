import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Badge = styled.div`
  height: 24px;
  background: ${props => props.background};
  width: ${props => props.width};
  color: ${props => props.color || theme.text.mainColor};
  border-radius: 22.5px;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const IconContainer = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 2px;
`;

export const DangerContainer = styled.div`
  align-self: center;
  justify-self: center;
  margin-left: 5px;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #d0021b;

  & span {
    margin-left: 3px;
  }
`;
