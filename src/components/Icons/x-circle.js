import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const G = styled.g`
  fill: ${props => props.fill ? props.fill : props.theme.global.icons.mainColor};
  transition: all 0.2s ease;
`;

const XCircle = ({ color, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 12">
        <G fill={color} fillRule="nonzero">
          <path d="M6 11a5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5 5 5 0 0 0 5 5zm0 1a6 6 0 0 1-6-6 6 6 0 0 1 6-6 6 6 0 0 1 6 6 6 6 0 0 1-6 6z"/>
          <path d="M3.854 8.854a.5.5 0 1 1-.708-.708l5-5a.5.5 0 1 1 .708.708l-5 5z"/>
          <path d="M8.854 8.146a.5.5 0 1 1-.708.708l-5-5a.5.5 0 1 1 .708-.708l5 5z"/>
        </G>
    </svg>
  );
};

XCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

XCircle.defaultProps = {
  size: '21px',
}

export default XCircle;
