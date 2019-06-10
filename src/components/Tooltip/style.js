import styled from "styled-components";
import { fontStyle } from "../../styles/mixins";

export const Container = styled.div`
  position: relative;
  transition: visibility 0.2s linear, opacity 0.3s linear;
  ${props =>
    props.isActive &&
    `
    div {
      visibility: visible;
      opacity: 1 !important;
    }
  `}
  &:hover {
    div {
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;

export const Text = styled.div`
  position: absolute;
  visibility: hidden;
  opacity: 0 !important;
  z-index: 1001;
  bottom: 30px;
  border-radius: 22.5px;
  background: ${props => props.bgColor};
  ${props => fontStyle(props.fontColor, "12px", 600)}
  text-align: center;
  white-space: nowrap;
  padding: 5px 16px;
  transition: visibility 0.2s linear, opacity 0.3s linear;
  left: 50%;
  transform: translateX(-50%);
  span {
    ${props => fontStyle(props.fontColor, "12px", 600)}
    text-align: center;
  }

  ::after {
    width: 20px;
    height: 20px;
    background: ${props => props.bgColor};
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(132deg);
    bottom: -3px;
    z-index: -1;
    content: "";
  }
`;
