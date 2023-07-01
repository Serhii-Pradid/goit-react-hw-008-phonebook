import { useSelector } from "react-redux";
import Navigation from "components/Navigations/Navigations";
import { AuthNav } from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import authSelectors from "redux/auth/auth-selectors";

import { Nav } from './AppBar.styled';



const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  
  return (
    <header >
      <Nav>
      <Navigation />
      {isLoggedIn ? <UserMenu/> : <AuthNav /> }
      </Nav>
    </header>
  );
};

export default AppBar;