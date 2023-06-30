import React from 'react';
//import { NavLink } from 'react-router-dom';

import { Nav, StyleNavLink} from './Navigations.styled';

const Navigation = () => {
  
  return (
    <Nav>
      <StyleNavLink to="/"> Home  </StyleNavLink>
      <StyleNavLink to="/contacts"> Contacts </StyleNavLink>
    </Nav>
  );
};

export default Navigation;