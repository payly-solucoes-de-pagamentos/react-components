import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Path = Styled.path`
  stroke: ${props => props.stroke || props.theme.global.main.colorSecondary};
`;

const Icon = ({ color, size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 42 42">
    <g fill="none" fillRule="evenodd">
      <Path stroke={color} strokeLinejoin="round" strokeWidth="2" d="M1 40h7V26H1z" />
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 36.345c17.708 6.936 13 6.436 32.99-4.329-1.86-1.86-3.069-2.344-4.99-1.796L28.933 33" />
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 28h5.25c4.116 0 7 2.17 7.875 3.045h5.25c2.79 0 2.79 3.955 0 3.955H16.75M37 8.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z" />
      <Path fill={color} fillRule="nonzero" d="M29 11.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 1 0-1 0zM21 19.5v2a.5.5 0 1 0 1 0v-2a.5.5 0 1 0-1 0zM29 3.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 1 0-1 0zM21 11.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 1 0-1 0z" />
      <Path fill={color} fillRule="nonzero" d="M27 9.75c0 1.258 1.134 2.25 2.5 2.25s2.5-.992 2.5-2.25c0-1.259-1.133-2.25-2.5-2.25-.842 0-1.5-.576-1.5-1.25 0-.675.658-1.25 1.5-1.25s1.5.575 1.5 1.25a.5.5 0 1 0 1 0C32 4.991 30.867 4 29.5 4S27 4.991 27 6.25c0 1.258 1.134 2.25 2.5 2.25.842 0 1.5.575 1.5 1.25 0 .674-.658 1.25-1.5 1.25S28 10.424 28 9.75a.5.5 0 1 0-1 0zM19 17.75c0 1.258 1.134 2.25 2.5 2.25s2.5-.992 2.5-2.25c0-1.259-1.133-2.25-2.5-2.25-.842 0-1.5-.576-1.5-1.25 0-.675.658-1.25 1.5-1.25s1.5.575 1.5 1.25a.5.5 0 1 0 1 0c0-1.259-1.133-2.25-2.5-2.25s-2.5.991-2.5 2.25c0 1.258 1.134 2.25 2.5 2.25.842 0 1.5.575 1.5 1.25 0 .674-.658 1.25-1.5 1.25s-1.5-.576-1.5-1.25a.5.5 0 1 0-1 0z" />
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22.026 9.018A7.486 7.486 0 0 0 14 16.492a7.5 7.5 0 0 0 7.5 7.5 7.485 7.485 0 0 0 7.473-8.027" />
    </g>
  </svg>
);

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  size: '42px',
  color: false,
};

export default Icon;
