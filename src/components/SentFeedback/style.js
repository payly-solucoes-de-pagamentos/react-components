import Styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const materialPacman = keyframes`
  50% {
		stroke-dasharray: 255px, 10px;
		stroke-dashoffset: 0;
	}

	100% {
		stroke-dashoffset: -265px;
	}
`;

const rotateAnimation = keyframes`
  to {
    transform: rotateZ(360deg);
  }
`;

const buildError = keyframes`
  50% {
    stroke-dashoffset: 0px;
  } 100% {
    fill: #D0021B;
    stroke-dashoffset: 0px;
  }
`;

const buildSuccess = keyframes`
  50% {
    stroke-dashoffset: 0px;
  } 100% {
    fill: #4FA444;
    stroke-dashoffset: 0px;
  }
`;

export const OutsideCircle = Styled.circle`
  fill: transparent;
  stroke: ${props => props.stroke || theme.secondColor};
  `;

export const LoaderCircle = Styled(OutsideCircle)`
  transform-origin: 45px 45px;
  stroke-dasharray: 10px, 255px;
  stroke-width: ${props => props.strokeWidth};
  stroke: ${props => props.stroke || theme.secondColor};
  animation: ${materialPacman} 2.5s ease forwards infinite, ${rotateAnimation} 2.5s linear forwards infinite;
`;

export const StyledErrorGroup = Styled.g`
  path {
    stroke-dasharray: 264px;
    stroke-dashoffset: 264px;
    stroke: #D0021B;
    fill: transparent;
    stroke-width: 2;
    animation: ${buildError} 2s linear forwards ;
  }
`;

export const StyledSuccessGroup = Styled.g`
  path {
    stroke-dasharray: 264px;
    stroke-dashoffset: 264px;
    stroke: #4FA444;
    fill: transparent;
    stroke-width: 3;
    animation: ${buildSuccess} 2s linear forwards ;
  }
`;
