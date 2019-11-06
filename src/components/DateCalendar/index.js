import React from "react";
import PropTypes from "prop-types";
import { SingleDatePicker } from "react-dates";
import momentPropTypes from "react-moment-proptypes";
import { GRAY_MEDIUM } from "../../styles/variables";
import DaysOfWeek from "./daysOfWeek";
import IconCalendar from "../Icons/calendar";
import "moment/locale/pt-br";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import * as Styled from "./style";

const DateCalendar = ({
  onChange,
  weekDaysPosition,
  startDate,
  startDateId,
  onFocus,
  focusedInput,
  onSelectDay,
  activeDays,
  hasWeekDays,
  disabled,
  errors,
  label,
  placeholder,
  width,
  openDirection,
  isOutsideRange,
  readOnly
}) => (
  <Styled.DateCalendarWrapper weekDaysPosition={weekDaysPosition}>
    <Styled.CustomReactDatesStyle width={width} disabled={disabled}>
      <Styled.DatePickerContainer error={errors && errors[startDateId]}>
        <Styled.Label>{label}</Styled.Label>
        <SingleDatePicker
          date={startDate}
          id={startDateId}
          placeholder={placeholder}
          onDateChange={date => onChange({ type: startDateId, date })}
          focused={focusedInput === startDateId}
          onFocusChange={() => onFocus(startDateId)}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel
          customInputIcon={<IconCalendar color={disabled ? GRAY_MEDIUM : ""} />}
          onClose={() => onFocus(null)}
          disabled={disabled}
          openDirection={openDirection}
          isOutsideRange={isOutsideRange}
          readOnly={readOnly}
        />
      </Styled.DatePickerContainer>
    </Styled.CustomReactDatesStyle>
    {hasWeekDays && (
      <DaysOfWeek
        error={errors && errors.daysOfWeek}
        disabled={disabled}
        onSelect={onSelectDay}
        active={activeDays}
      />
    )}
  </Styled.DateCalendarWrapper>
);

DateCalendar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  startDateId: PropTypes.string.isRequired,
  focusedInput: PropTypes.any.isRequired,
  startDate: momentPropTypes.momentObj.isRequired,
  readOnly: PropTypes.bool,
  endDate: momentPropTypes.momentObj,
  onSelectDay: PropTypes.func,
  activeDays: PropTypes.array,
  hasWeekDays: PropTypes.bool,
  disabled: PropTypes.bool,
  errors: PropTypes.object,
  weekDaysPosition: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  openDirection: PropTypes.string,
  isOutsideRange: PropTypes.func
};

DateCalendar.defaultProps = {
  startDateId: "inp-start-date-id",
  activeDays: [],
  hasWeekDays: true,
  disabled: false,
  errors: null,
  weekDaysPosition: "right",
  label: "",
  placeholder: "Selecione um dia",
  width: "150px",
  isOutsideRange: () => false,
  readOnly: true,
  openDirection: "up",
  endDate: null,
  onSelectDay: () => {}
};

export default DateCalendar;
