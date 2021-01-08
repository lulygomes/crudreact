import React from 'react';
import { FaHome } from 'react-icons/fa';
import img from '../../assets/logo.jpeg';

import { Container, Logo, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={img} alt="Logo CIAP" />
      </Logo>
      <Content>
        <FaHome size={50} />
        <div>
          <h1>Bem-vindo à CIAP </h1>
          <p>sua loja de produtos diversos</p>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
