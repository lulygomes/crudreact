import React, { useContext, useEffect } from 'react';
import { HeaderContext } from '../../context/HeaderContext';
// import HeaderContext from '../../context/HeaderContext';

import { Container } from './styles';

const Clients: React.FC = () => {
  const { updateHeader } = useContext(HeaderContext);

  useEffect(() => {
    updateHeader({
      title: 'Clientes',
      subTitle: 'Gerencie os clientes: Incluir, Listar, Alterar e Excluir.',
      icon: 'users',
    });
  }, [updateHeader]);
  return <Container />;
};

export default Clients;
