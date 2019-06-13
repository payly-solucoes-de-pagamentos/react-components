
import React from 'react';
import PropTypes from 'prop-types';
import { MAIN_COLOR } from '../../styles/variables';

const TakeawayIcon = ({ width, height, color, alt }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || "30px"} height={height || "30px"} viewBox="0 0 30 30" alt={alt}>
      <g fill="none" fillRule="evenodd" stroke={ color || MAIN_COLOR } strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67">
        <path d="M2 28h3v-7H2zM5.243 26.141c5.797 3.428 7.227 1.605 13.99-2.135-.374-1.17-1.924-2.01-2.673-1.787l-2.89 1.313"/>
        <path d="M4.432 21h2.07c1.624 0 2.76 1.28 3.106 1.28h2.415c1.79 0 1.79 2.552 0 2.552H8.228M25 16H4l2 3h17zM2 15.835h25.06M17 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
        <path d="M4 16c0-4.971 4.7-9 10.5-9S25 11.029 25 16M7.588 13.378c.66-.95 2.43-2.93 4.862-3.52"/>
      </g>
    </svg>
  );
};

TakeawayIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  alt: PropTypes.string,
};

export default TakeawayIcon;