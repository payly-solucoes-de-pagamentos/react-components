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

const CalendarSlinIcon = ({ color, size }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16">
      <G iconColor={color} fillRule="nonzero">
        <path d="M12.898 1.933a.479.479 0 0 1-.49-.466c0-.258.22-.467.49-.467h2.612c.27 0 .49.209.49.467v14.066c0 .258-.22.467-.49.467H.49a.479.479 0 0 1-.49-.467V1.467C0 1.209.22 1 .49 1h2.612c.27 0 .49.209.49.467 0 .257-.22.466-.49.466H.98v13.134h14.04V1.933h-2.122z" />
        <path d="M3.5 3.667a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2.667a.5.5 0 0 1-.5.5h-2zm1.5-1V1H4v1.667h1zM10.5 3.667a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2.667a.5.5 0 0 1-.5.5h-2zm1.5-1V1h-1v1.667h1z" />
        <path d="M5.429 2C5.192 2 5 1.776 5 1.5s.192-.5.429-.5h5.142c.237 0 .429.224.429.5s-.192.5-.429.5H5.43zM.49 6A.495.495 0 0 1 0 5.5c0-.276.22-.5.49-.5h15.02c.27 0 .49.224.49.5s-.22.5-.49.5H.49z" />
      </G>
    </Svg>
  );
};

CalendarSlinIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

CalendarSlinIcon.defaultProps = {
  color: '4A4A4A',
  size: '16px',
};

export default CalendarSlinIcon;
