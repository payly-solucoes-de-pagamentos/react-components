import styled from 'styled-components';
import { flexPosition, fontStyle } from '../../styles/mixins';
import { GRAY_MEDIUM } from '../../styles/variables';

export const MainButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.theme.global.buttom.backgroundMain};
  border: ${props => props.theme.global.buttom.borderMain || '0px'};
  border-radius: ${props => props.theme.global.buttom.radius};
  ${props => fontStyle(props.theme.global.buttom.colorFontMain, props.fontSize, props.fontWeight)}
  cursor: pointer;
  ${flexPosition('center', 'center')}
  padding: 0px 20px 0px 20px;
  min-width: 130px;
  transition: all 0.2s ease;

  :focus {outline:0;}

  &:disabled {
    cursor: not-allowed;
    border-color: ${GRAY_MEDIUM};
    ${fontStyle('#FFF')}
    background-color: ${props => props.theme.global.buttom.colorBackgroundDisabled};
    font-weight: 600;
  }

  &:hover:enabled {
    border: 0px;
    background: ${props => props.theme.global.buttom.backgroundMainHover || props.theme.global.buttom.backgroundMain};
    color: ${props => props.theme.global.buttom.colorFontMainHover || props.theme.global.buttom.colorFontMain};
  }
`;

export const SecondaryButton = styled(MainButton)`
  :focus {outline:0;}
  background: ${props => props.theme.global.buttom.backgroundSecondary};
  color: ${props => props.theme.global.buttom.colorFontSecondary};
  border: ${props => props.theme.global.buttom.borderSecondary || '0px'};
`

export const IconButton = styled.img`
  width: 30px;
  height: 30px;
  padding-right: 10px;
`;

export const FileButton = styled.label`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.isSecondary ? props.theme.global.buttom.backgroundMain : props.theme.global.buttom.backgroundSecondary};
  border: ${props => props.isSecondary ? props.theme.global.buttom.borderMain || '0px' : props.theme.global.buttom.borderSecondary || '0px'};
  border-radius: ${props => props.theme.global.buttom.radius};
  ${props => fontStyle(props.isSecondary ? props.theme.global.buttom.colorFontMain : props.theme.global.buttom.colorFontSecondary, props.fontSize, props.fontWeight)}
  cursor: pointer;
  ${flexPosition('center', 'center')}
  padding: 0px 20px 0px 20px;
  min-width: 120px;
  transition: all 0.2s ease;
  flex:1;
  ${props => {
    if (props.disabled) {
      return (
        `
        cursor: not-allowed;
        border-color: ${GRAY_MEDIUM};
        ${fontStyle('#FFF')}
        background-color: ${props.theme.global.buttom.colorBackgroundDisabled};
        font-weight: 600;
        border: 0;
      `
      )
    } else {
      return (`
        &: hover {
        background: ${ props.theme.global.buttom.backgroundMainHover || props.theme.global.buttom.backgroundMain};
        color: ${ props.theme.global.buttom.colorFontMainHover || props.theme.global.buttom.colorFontMain};
        }
      `
      )
    }
  }}


`;

export const HiddenInput = styled.input`
display: none !important;
`;

