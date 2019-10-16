import Styled from 'styled-components';

import { TransitionMixin } from '../../styles/mixins';

export const Container = Styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export const InputWrapper = Styled.div`
  position: relative;
  width: 100%;
  height: 45px;
 `;

export const Input = Styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 0px 30px;
  object-fit: contain;
  ${TransitionMixin()};
  border: solid 1px #e4e4e4;
  border-radius: 27.5px;
  &:focus{
    outline: none;
    box-shadow: 0 0 10px 3px rgba(0,0,0,0.05);
  }
`;

export const IconWrapper = Styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 15px;
  right: 30px;
`;

export const LoaderWrapper = Styled.div`
  position: absolute;
  width: 100%;
  bottom: 2px;
  overflow: hidden;
  padding: 0px 30px;
`;
