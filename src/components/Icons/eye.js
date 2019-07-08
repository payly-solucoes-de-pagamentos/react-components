import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const G = Styled.g`
  fill: ${props => props.color || props.theme.global.main.colorAction}
`;

const Icon = ({ color, size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 10">
    <G color={color} fillRule="nonzero">
      <path d="M14.668 4.377a14.893 14.893 0 0 0-1.58-1.471C11.442 1.586 9.715.8 8 .8c-1.715 0-3.442.786-5.088 2.106A14.893 14.893 0 0 0 .954 4.8a14.893 14.893 0 0 0 1.958 1.894C4.558 8.014 6.285 8.8 8 8.8c1.715 0 3.442-.786 5.088-2.106A14.893 14.893 0 0 0 15.046 4.8c-.1-.117-.227-.26-.378-.423zm1.086.861a15.709 15.709 0 0 1-2.123 2.067C11.848 8.736 9.948 9.6 8 9.6c-1.948 0-3.848-.864-5.63-2.294A15.709 15.709 0 0 1 .245 5.238a6.874 6.874 0 0 1-.165-.202.384.384 0 0 1 0-.472 13.579 13.579 0 0 1 .62-.716 15.709 15.709 0 0 1 1.668-1.554C4.152.864 6.052 0 8 0c1.948 0 3.848.864 5.63 2.294a15.709 15.709 0 0 1 2.124 2.068c.08.094.135.163.165.202a.384.384 0 0 1 0 .472c-.03.039-.085.108-.165.202z" />
      <path d="M10.4 4.8a2.4 2.4 0 1 0-4.8 0 2.4 2.4 0 0 0 4.8 0zm.8 0a3.2 3.2 0 1 1-6.4 0 3.2 3.2 0 0 1 6.4 0z" />
    </G>
  </svg>
);

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

Icon.defaultProps = {
  color: undefined,
  size: '21px',
};

export default Icon;
