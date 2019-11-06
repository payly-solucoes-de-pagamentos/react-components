import Styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.color || theme.successColor};
  padding: 0px 20px;
  width: 100%;
  height: 40px;
  position: absolute;
  top: 60px;
  z-index: 2;
  transform: translateY(${props => (props.active ? '0px' : '-100px')});
  transition: all 0.3s ease;
`;

export const IconBox = Styled.div`
  display: flex;
`;

export const MessageBox = Styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  font-weight: normal;
  padding: 0px 15px;
`;

export const CloseButton = Styled.div`
  cursor: pointer;
`;
