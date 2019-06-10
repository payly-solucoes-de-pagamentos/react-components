import React from 'react';
import PropTypes from 'prop-types';

const AlertTriangle = ({ color, size }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 13 13">
        <g fill={color || '#000'} fillRule="evenodd">
            <path fillRule="nonzero" d="M11.704 12L6.497 1.655l-5.2 10.347h10.407zM.05 12.239L6.046.283a.5.5 0 0 1 .902 0l6.002 11.955c.16.332-.082.762-.45.762H.5c-.368 0-.61-.43-.45-.762z"/>
            <path fillRule="nonzero" d="M6 5.5a.5.5 0 0 1 1 0v3.273a.5.5 0 0 1-1 0V5.5z"/>
            <path d="M6.5 10a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1"/>
        </g>
    </svg>
  );
};

AlertTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

AlertTriangle.defaultProps = {
  size: '13px',
}

export default AlertTriangle;
