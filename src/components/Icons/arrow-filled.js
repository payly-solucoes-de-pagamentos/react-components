import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const G = styled.g`
  fill: ${props => props.fillColor || props.theme.global.icons.mainColor};
  fill-rule: evenodd;
  transform-origin: center;
  transition: transform .3s ease-in-out;
  ${props => props.position === 'left' && `
    transform: rotate(180deg) translate(12%, 15%);
  `}
  ${props => props.position === 'right' && `
    transform: rotate(0deg) translate(12%, 15%);
  `}
`;

const ArrowFilledIcon = ({ width, height, color, alt, position }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 20" alt={alt}>
      <G position={position} fillColor={color} fillRule="nonzero">
        <path d="M8.793 1.707A1 1 0 0 1 10.207.293l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L13.086 6 8.793 1.707z" />
        <path d="M1.5 7a1 1 0 0 1 0-2h12a1 1 0 1 1 0 2h-12z" />
      </G>
    </svg>
  );
};

ArrowFilledIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  alt: PropTypes.string,
  position: PropTypes.string,
};

ArrowFilledIcon.defaultProps = {
  color: 'inherit',
  width: '27px',
  height: '20px',
  position: 'right',
  alt: 'ícone',
}

export default ArrowFilledIcon;
