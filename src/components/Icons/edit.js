import React from 'react';
import PropTypes from 'prop-types';

const edit = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
      <g fill="none" fillRule="evenodd" stroke={color || '#A0A0A0'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67">
        <path d="M11.079 23.062L5.69 24.326l1.264-5.387 13-13.002a1.668 1.668 0 0 1 2.358 0l1.768 1.768c.65.652.65 1.706 0 2.357l-13.001 13zM22.128 12.127L18 8M11.289 22.854l-4.125-4.125"/>
      </g>
    </svg>
  );
};

edit.propTypes = {
  color: PropTypes.string
};

export default edit;