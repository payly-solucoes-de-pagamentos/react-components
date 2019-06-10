import styled from 'styled-components';

export const Switch = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitchBlock = styled.label`
  position: relative;
  display: inline-block;
  width: 41px;
  min-width: 41px;
  height: 24px;
  margin: 0;
`;

export const SwitchText = styled.span`
  position: relative;
  margin-left: 10px;
  ${({ labelStyles }) => labelStyles};
`;

export const SwitchInput = styled.input`
  position: absolute;
  opacity: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f9f9f9;
  -webkit-transition: transform .4s;
  transition: transform .4s;
  border-radius: 34px;
  background-color: ${props => props.checked ? '#4fa444' : props.theme.global.buttom.colorBackgroundDisabled};
  ${({ customStyles }) => customStyles};

  :before{
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    bottom: 4px;
    background-color: #fff;
    -webkit-transition: transform .4s;
    transition: transform .4s;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    /* box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.24), 0 0 1px 0 rgba(0, 0, 0, 0.12); */
    border-radius: 50%;
    background-color: ${props => props.checked ? '#fff' : ''};
    transform: ${props => props.checked ? 'translateX(20px)' : 'translateX(4px)'};
    -webkit-transform: ${props => props.checked ? 'translateX(20px)' : 'translateX(4px)'};
    -ms-transform: ${props => props.checked ? 'translateX(20px)' : 'translateX(4px)'};
    ${({ sliderStyles }) => sliderStyles};
  }
`;
