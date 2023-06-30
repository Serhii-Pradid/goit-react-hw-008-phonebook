//import { NavLink } from 'react-router-dom';
import { Nav, StyleNavLink} from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <StyleNavLink to="/register">
        Register
      </StyleNavLink>
      <StyleNavLink to="/login">
        Log In
      </StyleNavLink>
    </Nav>
  );
};
