import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGroup = styled.g`
  stroke: ${props => props.stroke || props.theme.global.icons.darkIcon};
  transition: all 0.2s ease;
`;

export const IconError = ({ color }) => (
  <svg viewBox="0 0 37 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <g id="07.-Transferências" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <StyledGroup id="Group-23" transform="translate(0.585786, 0.585786)" stroke={color}>
        <path d="M-9.09494702e-13,0 L35.8284271,35.8284271" id="Path-5"></path>
        <path d="M9.09494702e-13,35.8284271 L35.8284271,0" id="Path-8"></path>
      </StyledGroup>
    </g>
  </svg>
)

IconError.propTypes = {
  color: PropTypes.string
};

IconError.defaultProps = {
  color: undefined,
}

export default IconError;
