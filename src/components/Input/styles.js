import styled from 'styled-components';
import { inputIcon, inputIconContainer } from '../../styles/mixins';

export const InputContainer = styled.div`${props => inputIconContainer(props)}`;

export const Input = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 3px;
  border: 1px solid ${props => props.borderColor || '#e4e4e4'};
  font-size: 13px;
  font-family: ${props => props.theme.global.main.fontNormal};
  font-weight: 600;
  padding: 0px;
  padding-right: '10px';
  text-indent: ${props => props.hasIcon ? '40px' : '0px'};
  &:disabled {
    background: #f5f5f5;
    color: ${props => props.theme.global.main.colorFontNormal || '#333333'};
    font-weight: 600;
  }
`;

export const IconWrapper = styled.div`${inputIcon()}`;

export const Label = styled.label`
  color:#333;
  font-size:16px;
  padding-bottom:10px;
  display:block;
`;
