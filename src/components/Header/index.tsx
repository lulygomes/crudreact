import React, { useContext } from 'react';
import { FaCuttlefish } from 'react-icons/fa';
import img from '../../assets/logo.jpeg';
import { HeaderContext } from '../../context/HeaderContext';

import { Container, Logo, Content } from './styles';

const Header: React.FC = () => {
  const { headerProps } = useContext(HeaderContext);
  // const { icon: Icon } = headerProps;

  return (
    <Container>
      <Logo>
        <img src={img} alt="Logo CIAP" />
      </Logo>
      <Content>
        <FaCuttlefish size="50" />

        <div>
          <h1>{headerProps.title}</h1>
          <p>{headerProps.subTitle}</p>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
