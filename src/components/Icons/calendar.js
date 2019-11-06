import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';

import { MAIN_COLOR } from '../../styles/variables';

const G = styled.g`
  stroke-linejoin: round;
  fill: ${props => props.color || theme.icons.mainColor};
  fill-rule: nonzero;
  stroke-width: auto;
`;

const IconCalendar = ({ color, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 21 21"
  >
    <G color={color} strokeLinejoin="round">
      <path d="M16.687 4.208V2h2.433C20.163 2 21 2.906 21 4.036v14.928C21 20.082 20.155 21 19.122 21H1.878C.836 21 0 20.093 0 18.964V4.036C0 2.917.846 2 1.88 2h2.433v2.208H2.027v14.756h16.946V4.208h-2.286z" />
      <path d="M4.068 5.773C3.478 5.773 3 5.294 3 4.705V1.068C3 .478 3.478 0 4.068 0h3.869c.59 0 1.068.478 1.068 1.068v3.637c0 .59-.478 1.068-1.068 1.068H4.068zm2.934-1.768V2H4.997v2.005h2.005zM13.068 5.773c-.59 0-1.068-.479-1.068-1.068V1.068C12 .478 12.478 0 13.068 0h3.869c.59 0 1.068.478 1.068 1.068v3.637c0 .59-.478 1.068-1.068 1.068h-3.869zm2.934-1.768V2h-2.005v2.005h2.005z" />
      <path d="M7 4V2h7v2zM0 10V8h21v2z" />
    </G>
  </svg>
);

IconCalendar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

IconCalendar.defaultProps = {
  color: MAIN_COLOR,
  size: '21px',
};

export default IconCalendar;
