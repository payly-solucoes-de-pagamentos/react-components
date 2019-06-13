import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FONT_SIZE_5, GRAY_MEDIUM, GRAY_DARKER, FONT_WEIGHT_BOLD, MAIN_COLOR, DANGER_COLOR } from '../../styles/variables';
import { fontStyle } from '../../styles/mixins';

import { DAYS_OF_WEEK } from '../../helpers/constants';

const DaysContainer = styled.div`
  display: flex;
`;

const Day = styled.button`
  width: 45px;
  height: 45px;
  cursor: pointer;
  ${props => fontStyle(
    props.disabled ? GRAY_MEDIUM : props.color,
    FONT_SIZE_5,
    FONT_WEIGHT_BOLD,
  )}
  border: 1px solid ${props => props.error
    ? DANGER_COLOR
    : (props.disabled ? GRAY_MEDIUM : props.borderColor)};
  background-color: ${props => props.disabled ? 'transparent' : props.bgColor};
  border-radius: 5px;
  margin-right: 7px;
  &:last-of-type {
    margin-right: 0px;
  }
  ${props => !props.disabled && (`
    &:hover {
      border: 1px solid ${MAIN_COLOR};
    }
    ${props.active && (`
      ${fontStyle('#FFF')};
      background-color: ${MAIN_COLOR};
      border-color: ${MAIN_COLOR};
    `)}`
  )}
`;

const daysOfWeek = (props) => {
  return (
    <DaysContainer>
      {props.days.map(day => (
        <Day
          id={`day-${day.id}`}
          key={day.id}
          disabled={props.disabled}
          color={props.color}
          active={props.active.some(item => item === day.id)}
          bgColor={props.bgColor}
          onClick={() => props.onSelect(day)}
          error={props.error}
          borderColor={props.borderColor}>
          {day.name}
        </Day>
      ))}
    </DaysContainer>
  );
};

daysOfWeek.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  active: PropTypes.array,
  onSelect: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  days: PropTypes.array,
}

daysOfWeek.defaultProps = {
  bgColor: '#FFF',
  color: GRAY_DARKER,
  borderColor: '#FFF',
  active: [],
  disabled: false,
  error: false,
  days: DAYS_OF_WEEK,
}

export default daysOfWeek;
