import Styled from 'styled-components';

export const Container = Styled.div`
  width: 260px;
  max-height: 530px;
  border-radius: 3px;
  padding: 30px;
  padding-top: 15px
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
  background-color: ${props => props.theme.global.main.colorBackground};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

