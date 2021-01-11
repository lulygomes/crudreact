import React, { useContext, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import { HeaderContext } from '../../context/HeaderContext';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  const { updateHeader } = useContext(HeaderContext);

  useEffect(() => {
    updateHeader({
      title: 'Início',
      subTitle: 'um sistema',
      icon: FaHome,
    });
  }, [updateHeader]);

  return (
    <Container>
      <Content>
        <h1>Bem-Vindo!</h1>
        <hr />
        <p>
          Este sistema foi desenvolvido para praticar a criação de um Front-end
          simples e a conexão com um Back-end via API REST.
        </p>
      </Content>
    </Container>
  );
};

export default Dashboard;
