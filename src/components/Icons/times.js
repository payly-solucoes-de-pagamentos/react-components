import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const G = styled.g`
  fill: ${props => props.fill ? props.fill : props.theme.global.icons.mainColor};
  transition: all 0.2s ease;
`;

const TimesIcon = ({ color, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 12">
        <G fill={color} fillRule="nonzero">
          <path d="M1.707 11.707a1 1 0 1 1-1.414-1.414l10-10a1 1 0 0 1 1.414 1.414l-10 10z"/>
          <path d="M11.707 10.293a1 1 0 0 1-1.414 1.414l-10-10A1 1 0 1 1 1.707.293l10 10z"/>
        </G>
    </svg>
  );
};

TimesIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

TimesIcon.defaultProps = {
  size: '21px',
}

export default TimesIcon;
