import styled from "styled-components";
import {
  GRAY_DARKER,
  GRAY_MEDIUM,
  GRAY_LIGHTER,
  BORDER_RADIUS,
  DANGER_COLOR,
  FONT_SIZE_5
} from "../../styles/variables";
import { flexPosition, fontStyle } from "../../styles/mixins";
import theme from "../../styles/theme";

export const DateCalendarWrapper = styled.div`
  margin-right: 40px;
  ${flexPosition("center", "space-between")}
  ${props =>
    props.weekDaysPosition === "right" &&
    `
    flex-direction: row;
  `}
  ${props =>
    props.weekDaysPosition === "left" &&
    `
    flex-direction: row-reverse;
    > div {
      div &:last-of-type {
        margin-right: 5px;
      }
    }
  `}
  ${props =>
    props.weekDaysPosition === "up" &&
    `
    flex-direction: column-reverse;
    align-items: start;
    > div {
      div &:last-of-type {
        margin-bottom: 10px;
      }
    }
  `}
  ${props =>
    props.weekDaysPosition === "down" &&
    `
    flex-direction: column;
    align-items: start;
    > div {
      div &:last-of-type {
        margin-top: 10px;
      }
    }
  `}
`;

export const CustomReactDatesStyle = styled.div`
  ${flexPosition("center")}
  .SingleDatePickerInput__withBorder {
    border: 1px solid ${props => (props.disabled ? GRAY_MEDIUM : GRAY_LIGHTER)};
    border-radius: ${BORDER_RADIUS};
    padding: 1px;
    display: flex;
    width: ${props => props.width};
    height: 45px;
    overflow: hidden;
  }

  .DateInput {
    display: flex;
    align-items: center;
    .DateInput_input {
      font-family: ${theme.text.fontFamily};
      padding: 0px 9px;

      ${props =>
        fontStyle(
          props.disabled ? GRAY_MEDIUM : GRAY_DARKER,
          FONT_SIZE_5,
          "normal"
        )}
    }

    .DateInput_input__focused {
      border-bottom: none;
    }
  }

  .SingleDatePickerInput_calendarIcon {
    padding: 0px;
    margin-left: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    color: ${props => (props.disabled ? GRAY_MEDIUM : "#FFF")};
    background-color: ${props =>
      props.disabled ? "transparent" : theme.secondColor};
    border-color: ${props =>
      props.disabled ? GRAY_MEDIUM : theme.secondColor};
  }

  .SingleDatePicker {
    z-index: 3;
  }
`;

export const DatePickerContainer = styled.div`
  ${props =>
    props.error &&
    `
    .SingleDatePickerInput__withBorder {
      border: 1px solid ${DANGER_COLOR};
    }
  `}
`;

export const Label = styled.label`
  color: ${theme.text.mainColor};
  font-family: ${theme.text.fontFamily};
  font-weight: 600;
  font-size: 13px;
  padding-bottom: 10px;
  display: block;
`;
