import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const G = styled.g`
  transition: all 0.2s ease;
`;

const P = styled.path`
  fill: ${props => props.fill ? props.fill : props.theme.global.icons.mainColor};
`

const CalendarWithSearch = ({ color, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
        <G fill="none" fill-rule="nonzero">
            <path fill="#4A4A4A" d="M20 4h-3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v6.5a1 1 0 0 1-2 0V4zM5 6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5zm1-2h1V2H6v2z"/>
            <path fill="#4A4A4A" d="M14 6a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3zm1-2h1V2h-1v2z"/>
            <path fill="#4A4A4A" d="M8 4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2H8zM1 9a1 1 0 1 1 0-2h20a1 1 0 0 1 0 2H1z"/>
            <path fill="#4A4A4A" d="M2 20h9a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H2v16z"/>
            <P fill={color} d="M20 16a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm2 0a5 5 0 1 1-10.001-.001A5 5 0 0 1 22 16z"/>
            <P fill={color} d="M19.118 19.536a1 1 0 1 1 1.415-1.414l3.172 3.172a1 1 0 1 1-1.415 1.414l-3.172-3.172z"/>
        </G>
    </svg>
  );
};

CalendarWithSearch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

CalendarWithSearch.defaultProps = {
  size: '21px',
}

export default CalendarWithSearch;
