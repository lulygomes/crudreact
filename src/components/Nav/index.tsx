/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container, NavList, NavIten } from './styles';

const Nav: React.FC = () => {
  return (
    <Container>
      <NavList>
        <NavIten>
          <Link to="/">
            <FaHome /> Item 1
          </Link>
        </NavIten>
        <NavIten>
          <a href="/">
            <FaHome /> Item 2
          </a>
        </NavIten>
        <NavIten>
          <a href="/">
            <FaHome /> Item 3
          </a>
        </NavIten>
        <NavIten>
          <a href="/">
            <FaHome /> Item 4
          </a>
        </NavIten>
      </NavList>
    </Container>
  );
};

export default Nav;
