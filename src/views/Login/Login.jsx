import { useState } from 'react';
import authOperations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import './Login.module.css';


const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleChange = event => {
      const { name, value } = event.target;
      switch (name) {
        case 'email':
          setEmail(value);
          break;
        case 'password':
          setPassword(value);
          break;
        default:
          break;
      }
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      dispatch(authOperations.logIn({ email, password }));
  
      setEmail('');
      setPassword('');
    };
  
    return (
      <section>
        <h2 >Log in form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="*************@email.com"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleChange}
          />
          <button type="submit "> Log in </button>
        </form>
      </section>
    );
  };
  
  export default Login;