import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Path = styled.path`
  stroke: ${props => props.lineColor ? props.lineColor : '#b6b6b6'};
  transition: transform .3s ease-in-out;
  transform-origin: center;
`

const CheckIcon = ({ size, strokeWidth, strokeLinecap, strokeLinejoin, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20">
        <Path
          strokeWidth={strokeWidth}
          lineColor={color}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          fill="none"
          fillRule="evenodd"
          d="M16 5l-7 8-4-4"
        />
    </svg>
  );
};

CheckIcon.propTypes = {
  size: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string,
  color: PropTypes.string,
};

CheckIcon.defaultProps = {
  size: '20',
  strokeWidth: '2px',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export default CheckIcon;
