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
  color: fffff66;
  `;

export const StyleNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 30px;
  color: #ffffff66;
  margin-right: 30px;
  text-decoration: none;
  &.active {
    color: #ececf1;
    font-size: 33px;
    font-weight: 600;
    transform: scale(1.4);
  };
  &:hover {
    color: #515133;
    };
`;