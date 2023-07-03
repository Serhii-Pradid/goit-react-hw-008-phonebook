import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 40px;
  padding-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  color:  #515133;
  
`;

export const StyleNavLink = styled(NavLink)`
  font-weight: 400;
  font-size: 20px;
  color: #515133;
  margin-right: 30px;
  text-decoration: none;
  &.active {
    color: #515133;
    font-size: 20px;
    font-weight: 600;
    transform: scale(1.4);
  };
  &:hover {
    color: #515133;
    font-size: 20px;
    font-weight: 600;
    transform: scale(1.4);
    };
`;