import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GRAY_DARKER, GRAY_LIGHT_2 } from '../../styles/variables';
import { fontStyle, container, flexPosition } from '../../styles/mixins';

export const LineNav = styled.div`
  width: 100%;
  position: absolute;
  height: 2px;
  border-top: 1px solid ${GRAY_LIGHT_2};
  right: 0;
`;

export const NavbarContainer = styled.div`
  width:100%;
`;

export const Content = styled.div`
  ${container}
  ${flexPosition('center', 'space-between')}
`;

export const Nav = styled.nav`
  display: flex;
`;

export const NavItem = styled(NavLink)`
  ${fontStyle(GRAY_DARKER, '15px', '600')}
  text-decoration: none;
  padding: 24px 20px;
  width: 160px;
  text-align: center;
  &.active {
    border-bottom: 4px solid ${props => props.theme.global.main.colorAction};
    text-decoration: none;
  }
`;
