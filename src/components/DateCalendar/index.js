import React from 'react';
import PropTypes from 'prop-types';
import { SingleDatePicker, isInclusivelyAfterDay } from 'react-dates';
import momentPropTypes from 'react-moment-proptypes';
import { GRAY_MEDIUM } from '../../styles/variables';
import DaysOfWeek from './daysOfWeek';
import IconCalendar from '../Icons/calendar';
import 'moment/locale/pt-br';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import * as Styled from './style';

const DateCalendar = ({
  onChange,
  weekDaysPosition,
  startDate,
  startDateId,
  endDate,
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
  readOnly,
}) => (
    <Styled.DateCalendarWrapper weekDaysPosition={weekDaysPosition}>
      <Styled.CustomReactDatesStyle width={width} disabled={disabled}>
        <Styled.DatePickerContainer error={errors && errors[startDateId]}>
          <Styled.Label>{label}</Styled.Label>
          <SingleDatePicker
            openDirection="up"
            date={startDate}
            id={startDateId}
            placeholder={placeholder}
            onDateChange={date => onChange({ type: startDateId, date })}
            focused={focusedInput === startDateId}
            onFocusChange={() => onFocus(startDateId)}
            numberOfMonths={1}
            hideKeyboardShortcutsPanel={true}
            customInputIcon={<IconCalendar color={disabled ? GRAY_MEDIUM : ''} />}
            isOutsideRange={day => endDate && isInclusivelyAfterDay(day, endDate)}
            onClose={() => onFocus(null)}
            disabled={disabled}
            openDirection={openDirection}
            isOutsideRange={isOutsideRange}
            readOnly={readOnly}
          />
        </Styled.DatePickerContainer>
      </Styled.CustomReactDatesStyle>
      {hasWeekDays &&
        <DaysOfWeek
          error={errors && errors.daysOfWeek}
          disabled={disabled}
          onSelect={onSelectDay}
          active={activeDays} />
      }
    </Styled.DateCalendarWrapper>
  );


DateCalendar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  startDate: momentPropTypes.momentObj,
  startDateId: PropTypes.string,
  endDate: PropTypes.any,
  endDateId: PropTypes.string,
  focusedInput: PropTypes.any,
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
  isOutsideRange: PropTypes.func,
};

DateCalendar.defaultProps = {
  startDateId: 'inp-start-date-id',
  endDateId: 'inp-end-date-id',
  focusedInput: null,
  activeDays: [],
  hasWeekDays: true,
  disabled: false,
  errors: {},
  weekDaysPosition: 'right',
  label: '',
  placeholder: 'Selecione um dia',
  width: '150px',
  isOutsideRange: () => false,
  readOnly: true,
}

export default DateCalendar;
