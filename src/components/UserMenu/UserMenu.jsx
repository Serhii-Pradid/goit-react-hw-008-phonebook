import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

import { Div } from './UserMenu.styled';
//import defaultAvatar from '.default.png'

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName)
    //const { user } = useAuth();
    //const avatar = defaultAvatar;
  
    return (
        <Div >
          {/*<img src={avatar} alt='' width='32'/>*/}
        <p>Welcome, </p>
        <p>{name}</p>
        <p>😃</p>
        <button
          type="submit"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Log out
        </button>
      </Div>
    );

  };
  
  export default UserMenu;