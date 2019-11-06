
import React from 'react';
import PropTypes from 'prop-types';
import { MAIN_COLOR } from '../../styles/variables';

const DeliveryIcon = ({ width, height, color, alt }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || "30px"} height={height || "30px"} viewBox="0 0 30 30" alt={alt}>
      <g fill="none" fillRule="evenodd" stroke={ color || MAIN_COLOR } strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67">
        <path d="M20.296 18.279c5.53-.324 7.26 3.46 7.26 5.26H13.6s.084-4.79-5.026-4.79c-5.11 0-5.11 4.79-5.11 4.79"/>
        <path d="M18 9h1.63v14.24M11 23.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0zM22.5 26.5A2.5 2.5 0 0 1 20 24h5a2.5 2.5 0 0 1-2.5 2.5zM8 18.749h5s3.516-.103 3.516 3.697M6 15.609h6.609V9H6zM20 12.429L23.174 11v5L20 14.571"/>
      </g>
  </svg>
  );
};

DeliveryIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  alt: PropTypes.string,
};

export default DeliveryIcon;