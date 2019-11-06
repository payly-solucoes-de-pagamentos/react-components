import styled from 'styled-components';
import { flexPosition, fontStyle } from '../../styles/mixins';
import { GRAY_MEDIUM, MAIN_COLOR } from '../../styles/variables';

export const PaginationContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.bgColor};
  ${props => fontStyle(props.color, props.fontSize, props.fontWeight)}
  cursor: pointer;
  ${flexPosition('right', 'flex-end')}
  padding: 0px 0px 0px 20px;
  min-width: 120px;
  transition: all 0.2s ease;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    border-color: ${GRAY_MEDIUM};
    ${fontStyle('#FFF')}
    background-color: ${GRAY_MEDIUM};
  }
  flex:1
`;

export const PagesWrapper =  styled.div`
  ${flexPosition('center', 'right')}
`;

export const PageNumber =  styled.button`
  width: 35px;
  height: 35px;
  background: ${props => props.active === true ? props.theme.global.main.colorAction : 'transparent'};
  border-radius: 100%;
  ${props => fontStyle(props.active ? '#FFF' : '#000', '13px', props.fontWeight)}
  cursor: pointer;
  ${flexPosition('center', 'center')}
  transition: all 0.2s ease;
  border:none;
  &:focus {
    outline:0;
  }
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline:0;
  }
`;


