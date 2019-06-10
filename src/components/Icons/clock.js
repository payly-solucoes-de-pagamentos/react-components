import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const G = styled.g`
  fill: ${props => props.fill ? props.fill : props.theme.global.icons.mainColor};
  transition: all 0.2s ease;
`;

const Clock = ({ color, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 21 21">
        <G fill={color} fillRule="nonzero">
            <path d="M19 10.5a8.5 8.5 0 1 0-17 0 8.5 8.5 0 0 0 17 0zm2 0C21 16.299 16.298 21 10.5 21 4.7 21 0 16.3 0 10.5S4.7 0 10.5 0C16.298 0 21 4.701 21 10.5z"/>
            <path d="M14.705 14.287c.391.39.394 1.024.005 1.417a.998.998 0 0 1-1.413.005l-4.002-3.98A1.003 1.003 0 0 1 9 11.018V7.002A1 1 0 0 1 10 6a1 1 0 0 1 .999 1.002V10.6l3.706 3.686z"/>
        </G>
    </svg>
  );
};

Clock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

Clock.defaultProps = {
  size: '21px',
}

export default Clock;
