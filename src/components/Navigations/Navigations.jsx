import React from 'react';
import { useSelector } from "react-redux";
import { Nav, StyleNavLink} from './Navigations.styled';
import authSelectors from 'redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
    <Nav>
      <StyleNavLink to="/"> Home  </StyleNavLink>
      {isLoggedIn && (<StyleNavLink to="/contacts"> Contacts </StyleNavLink>)}
      
    </Nav>
  );
};

export default Navigation;