import Styled from 'styled-components';

export const Container = Styled.div`
  width: 100%;
  max-width: 843px;
  padding: 15px 30px 28px;

  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: 3px;
`;

export const ComponentTitleBox = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ComponentTitle = Styled.span`
  color: ${props => props.theme.global.main.colorFontNormal};
  font-family: ${props => props.theme.global.main.fontNormal};
  font-size: 20px;
`;

export const CleanFiltersOpt = Styled.span`
  color: ${props => props.disabled ? '#e4e4e4' : '#333333'};
  margin-left: 9px;
  font-size: 14px;
  cursor: pointer;
`;

export const FilterOptBox = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const SelectLimitator = Styled.div`
  width: 190px;
`;

