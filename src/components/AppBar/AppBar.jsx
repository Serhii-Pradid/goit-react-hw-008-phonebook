import Navigation from "components/Navigations/Navigations";
import { AuthNav } from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";

import { Nav } from './AppBar.styled';



const AppBar = () => {
  
  return (
    <header >
      <Nav>
      <Navigation />
      <UserMenu/>
      <AuthNav />
      
      </Nav>
    </header>
  );
};

export default AppBar;