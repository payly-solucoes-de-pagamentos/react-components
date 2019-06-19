import styled from "styled-components";
import ReactSelect from "react-select";
import theme from "../../styles/theme";

export const SelectIconContainer = styled.div`
  height: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
`;

export const MultiSelect = styled(ReactSelect)`
  & .select__control {
    cursor: ${props => props.isSearchable || "pointer"};
    border: ${props => props.basicStyle && "0px"};

    flex: 1;

    & .select__value-container {
      ${props =>
        props.basicStyle &&
        `
        & .select__single-value {
          font-family: ${theme.text.fontFamily};
          font-size: 12px;
          font-weight: 600;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: right;
          right: 0;
          top: 30%;
        }

        & .select__placeholder {
          font-family: ${theme.text.fontFamily};
          font-size: 12px;
          font-weight: 600;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: right;
        }
      `}
    }
  }

  & .select__value-container {
    & .select__multi-value {
      background: ${theme.mainColor};
      height: 25px;
      object-fit: contain;
    }
  }

  & .select__value-container--has-value {
    padding-right: 0;
    &.select__value-container--is-multi {
      div.select__multi-value,
      div .select__multi-value {
        &:nth-child(n
            + ${props => props.labelLimitator && props.labelLimitator + 1}) {
          display: none;
        }
      }
    }
  }
`;

export const LabelCounter = styled.span`
  display: none;

  padding-left: 8px;
  font-size: 13px;
  font-family: ${theme.text.fontFamily};
  font-weight: 600;

  color: ${props => props.color || theme.mainColor};
  &:nth-child(${props => props.labelLimitator && props.labelLimitator + 1}){
    display: inline;
  }
`;
