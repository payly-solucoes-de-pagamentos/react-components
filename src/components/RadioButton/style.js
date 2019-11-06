import Styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = Styled.div`
  display: flex;
  flex-flow: row;
`;

export const Box = Styled.label`
  display: flex;
  cursor: pointer;
  align-items: center;
`;
export const RadioHolder = Styled.span`
  width: 15px;
  height: 15px;
  display: block;
  border-radius: 35px;
  background: white;
  border: ${theme.button.borderSecondary};
  transition: all 0.1s ease-in-out;
`;

export const RadioInput = Styled.input`
  display: none;
  &:checked {
    & + ${Box} {
      ${RadioHolder} {
        background: ${theme.secondColor};
        border: none;
      }
    }
  }
`;

export const Text = Styled.span`
    padding-left: 10px;
`;
