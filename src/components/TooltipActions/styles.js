import styled from 'styled-components';


export const TooltipContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  opacity: ${props => props.isOpen ? 1 : 0};
  transform: translateX(${ props => props.isOpen ? '0px' : '20px' });
  transition: all 0.3s ease-in-out;
  z-index: 2;
`;

export const TooltipBtn = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 2;
  right: 75%;
`

export const Dots = styled.div`
  visibility: ${props => props.isOpen ? 'hidden' : 'visible'};
  transform: rotate(90deg);
  letter-spacing: 1.5px;
`

export const Container = styled.div`
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
`;
