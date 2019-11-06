import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionMixin } from '../../styles/mixins';

const Svg = styled.svg`
  &:hover {
    g {
      stroke: ${props => props.hover};
    }
  }
  scale: 2.0;
`;

const G = styled.g`
  ${TransitionMixin()}
  stroke: ${props => props.stroke};
`;

const SearchIcon = ({ color, size, hover }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" hover={hover} width={size} height={size} viewBox="0 0 16 16">
      <G fill="none" fillRule="evenodd" stroke={color} strokeLinejoin="round" strokeWidth="2">
        <path d="M11.588 6.294A5.294 5.294 0 1 1 1 6.294a5.294 5.294 0 0 1 10.588 0z" />
        <path strokeLinecap="round" d="M10.206 10.206l4.812 4.813" />
      </G>
    </Svg>
  );
};

SearchIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  hover: PropTypes.string,
};

SearchIcon.defaultProps = {
  color: '#ff4e6b',
  size: '21px',
  hover: undefined,
};

export default SearchIcon;
