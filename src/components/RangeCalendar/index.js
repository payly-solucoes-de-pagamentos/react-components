import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import { GRAY_MEDIUM } from '../../styles/variables';
import IconCalendar from '../Icons/calendar';
import 'moment/locale/pt-br';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import * as Styled from './style';

const RangerCalendar = ({
  onDatesChange,
  weekDaysPosition,
  startDate,
  startDateId,
  startDatePlaceholderText,
  endDateId,
  endDatePlaceholderText,
  endDate,
  onFocusChange,
  focusedInput,
  disabled,
  errors,
  width,
  openDirection,
  isOutsideRange,
  readOnly,
}) => (
    <Styled.RangerCalendarWrapper weekDaysPosition={weekDaysPosition}>
      <Styled.CustomReactDatesStyle width={width} disabled={disabled}>
        <IconCalendar color={disabled ? GRAY_MEDIUM : ''} />
        <Styled.DateRangerContainer error={errors && errors[startDateId]}>
          <DateRangePicker
            startDate={startDate}
            startDateId={startDateId}
            startDatePlaceholderText={startDatePlaceholderText}
            endDateId={endDateId}
            endDate={endDate}
            endDatePlaceholderText={endDatePlaceholderText}
            onDatesChange={onDatesChange}
            focusedInput={focusedInput}
            onFocusChange={onFocusChange}
            numberOfMonths={2}
            hideKeyboardShortcutsPanel={true}
            onClose={() => onFocusChange(null)}
            disabled={disabled}
            onDatesChange={onDatesChange}
            openDirection={openDirection}
            isOutsideRange={isOutsideRange}
            readOnly={readOnly}
          />
        </Styled.DateRangerContainer>
      </Styled.CustomReactDatesStyle>
    </Styled.RangerCalendarWrapper>
  );


RangerCalendar.propTypes = {
  onDatesChange: PropTypes.func.isRequired,
  startDate: PropTypes.any,
  startDateId: PropTypes.string.isRequired,
  endDate: PropTypes.any,
  endDateId: PropTypes.string.isRequired,
  onFocusChange: PropTypes.func.isRequired,
  focusedInput: PropTypes.any,
  onSelectDay: PropTypes.func,
  activeDays: PropTypes.array,
  hasWeekDays: PropTypes.bool,
  disabled: PropTypes.bool,
  errors: PropTypes.object,
  weekDaysPosition: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  openDirection: PropTypes.string,
  isOutsideRange: PropTypes.func,
  readOnly: PropTypes.bool,
};

RangerCalendar.defaultProps = {
  focusedInput: null,
  activeDays: [],
  hasWeekDays: true,
  disabled: false,
  errors: {},
  weekDaysPosition: 'right',
  placeholder: 'Selecione um dia',
  width: '',
  isOutsideRange: () => false,
  readOnly: true,
}

export default RangerCalendar;
