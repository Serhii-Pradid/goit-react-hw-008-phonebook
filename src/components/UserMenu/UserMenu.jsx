import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { FcReading } from "react-icons/fc"

import { Container,ButtonLogOut } from './UserMenu.styled';

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName)
    //const { user } = useAuth();
    //const avatar = defaultAvatar;
  
    return (
        <Container >
          {/*<img src={avatar} alt='' width='32'/>*/}
        <p> <FcReading /></p>
        <p>Welcome, </p>
        <p>{name} !</p>
     
        <ButtonLogOut
          type="submit"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log out
        </ButtonLogOut>
      </Container>
    );

  };
  
  export default UserMenu;

  