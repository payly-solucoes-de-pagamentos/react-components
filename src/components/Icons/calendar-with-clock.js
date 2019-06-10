import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const G = styled.g`
  transition: all 0.2s ease;
`;

const P = styled.path`
  fill: ${props => props.fill ? props.fill : props.theme.global.icons.mainColor};
`

const CalendarWithClock = ({ color, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <G fillRule="nonzero">
          <path fill="#4A4A4A" d="M20 4h-3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v6.5a1 1 0 0 1-2 0V4zM5 6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5zm1-2h1V2H6v2z"/>
          <path fill="#4A4A4A" d="M14 6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3zm1-2h1V2h-1v2z"/>
          <path fill="#4A4A4A" d="M8 4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2H8zM1 9a1 1 0 1 1 0-2h20a1 1 0 0 1 0 2H1z"/>
          <P fill={color} d="M17.5 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0 2a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"/>
          <P fill={color} d="M18 16.998h1.002c.552 0 .98.448.98 1 0 .553-.428 1-.98 1H17a1 1 0 0 1-1-1V15a1 1 0 0 1 2 0v1.998z"/>
          <path fill="#4A4A4A" d="M2 20h8a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2v16z"/>
        </G>
    </svg>
  );
};

CalendarWithClock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

CalendarWithClock.defaultProps = {
  size: '21px',
}

export default CalendarWithClock;
