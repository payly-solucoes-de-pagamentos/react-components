import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  &:hover {
    & g {
      fill: ${ props => props.theme.global.icons.mainColor };
    }
  }
`

const G = styled.g`
  fill: ${props => props.iconColor ? props.iconColor : props.theme.global.icons.mainColor};
  transition: all 0.2s ease;
`;

const TrashSlinIcon = ({ color, size }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
        <G iconColor={color} fillRule="nonzero">
          <path d="M2.514 16A.502.502 0 0 1 2 15.512V2.488c0-.27.23-.488.514-.488h10.972c.284 0 .514.219.514.488v13.024c0 .27-.23.488-.514.488H2.514zM13 15V3H3v12h10z"/>
          <path d="M5.553 3C5.247 3 5 2.776 5 2.5v-2c0-.276.247-.5.553-.5h4.894c.306 0 .553.224.553.5v2c0 .276-.247.5-.553.5H5.553zM10 2V1H6v1h4z"/>
          <path d="M.51 3A.505.505 0 0 1 0 2.5c0-.276.229-.5.51-.5h14.98c.281 0 .51.224.51.5s-.229.5-.51.5H.51zM6 4.5a.5.5 0 0 1 1 0v8a.5.5 0 1 1-1 0v-8zM9 4.5a.5.5 0 0 1 1 0v8a.5.5 0 1 1-1 0v-8z"/>
        </G>
    </Svg>
  );
};

TrashSlinIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

TrashSlinIcon.defaultProps = {
  size: '21px',
}

export default TrashSlinIcon;
