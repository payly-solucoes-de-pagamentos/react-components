import Styled, { keyframes } from 'styled-components';

const horizontalLoaderAnimation = keyframes`
  from {
    transform: translate(-100%);
  }
  to {
    transform: translate(110%);
  }
`;

export const HorizontalLoader = Styled.div`
  width: 100%;
  padding: 0px 15px;
  overflow: hidden;
  margin: auto;
`;

export const InternalLoader = Styled.div`
  height: ${props => props.height};
  animation: ${horizontalLoaderAnimation} 1.5s forwards infinite;
  background: linear-gradient(90deg, #fff4f6 0%,#ffeaed 74%,#ffa1b0 100%);
`;
