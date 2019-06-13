import styled from 'styled-components';
import { GRAY_DARKER, GRAY_MEDIUM, GRAY_LIGHTER, BORDER_RADIUS, DANGER_COLOR, FONT_SIZE_5 } from '../../styles/variables';
import { flexPosition, fontStyle } from '../../styles/mixins';

export const RangerCalendarWrapper = styled.div`
  margin: 0 15px;
  ${flexPosition('center', 'space-between')}
  ${props => props.weekDaysPosition === 'right' && `
    flex-direction: row;
  `}
  ${props => props.weekDaysPosition === 'left' && `
    flex-direction: row-reverse;
    > div {
      div &:last-of-type {
        margin-right: 5px;
      }
    }
  `}
  ${props => props.weekDaysPosition === 'up' && `
    flex-direction: column-reverse;
    align-items: start;
    > div {
      div &:last-of-type {
        margin-bottom: 10px;
      }
    }
  `}
  ${props => props.weekDaysPosition === 'down' && `
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
${flexPosition('center')}

  .DateRangePicker_picker {
    z-index: 3;
  }

  .DateRangePickerInput__withBorder {
    border: 1px solid ${props => props.disabled ? GRAY_MEDIUM : GRAY_LIGHTER};
    border-radius: ${BORDER_RADIUS};
    padding: 1px;
    display: flex;
    width: ${ props => props.width};
    height:45px;
    overflow: hidden;
  }

  .DateInput {
    display: flex;
    align-items: center;
    width: 100px;
    .DateInput_input {
      font-family: ${props => props.theme.global.main.fontNormal};
      padding: 0px 9px;


      ${props => fontStyle(
  props.disabled ? GRAY_MEDIUM : GRAY_DARKER,
  FONT_SIZE_5,
  'normal',
)}
    }

    .DateInput_input__focused {
      border-bottom: none;
    }
  }

  .DateInput {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .DateInput_input__focused {
    border-bottom: none;
  }

  .DateInput_input {
    ${props => fontStyle(
  props.disabled ? GRAY_MEDIUM : GRAY_DARKER,
  FONT_SIZE_5,
)}
    font-style: normal;
    padding: 0px;
    text-align: center
  }

  .SingleDatePickerInput_calendarIcon {
    padding: 0px;
    margin-left: 4px;
  }

  .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover {
    color: ${props => props.disabled ? GRAY_MEDIUM : '#FFF'};
    background-color: ${props => props.disabled ? 'transparent' : props.theme.global.main.colorAction};
    border-color: ${props => props.disabled ? GRAY_MEDIUM : props.theme.global.main.colorAction};
  }

  .SingleDatePicker {
    z-index: 3;
  }

  .DateRangePickerInput_calendarIcon {
    padding: 0;
  }

  .DateRangePickerInput_arrow {
    display: flex;
    align-items: center;
  }
`;

export const DateRangerContainer = styled.div`
  margin-left: 16px;
  ${props => props.error && (`
    .SingleDatePickerInput__withBorder {
      border: 1px solid ${DANGER_COLOR};
    }
  `)}
`;

