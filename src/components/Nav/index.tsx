/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FaHome, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container, NavList, NavItem } from './styles';

const Nav: React.FC = () => {
  return (
    <Container>
      <NavList>
        <NavItem>
          <Link to="/">
            <FaHome /> Início
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/clients">
            <FaUsers /> Clientes
          </Link>
        </NavItem>
        <NavItem>
          <a href="/">
            <FaHome /> Item 3
          </a>
        </NavItem>
        <NavItem>
          <a href="/">
            <FaHome /> Item 4
          </a>
        </NavItem>
      </NavList>
    </Container>
  );
};

export default Nav;
