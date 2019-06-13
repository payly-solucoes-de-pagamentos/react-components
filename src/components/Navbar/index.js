import React from 'react';
import { withRouter } from 'react-router-dom';
import * as Style from './style';

const Navbar = props => {

  return (
    <Style.NavbarContainer>
      <Style.LineNav />
      <Style.Content>
        <Style.Nav>
          <Style.NavItem to="/lots" activeClassName="active">Em lote</Style.NavItem>
        </Style.Nav>
      </Style.Content>
    </Style.NavbarContainer>
  );
};

export default withRouter(Navbar);
