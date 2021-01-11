import React, { useContext, useEffect } from 'react';
import Input from '../../components/Input';
import { HeaderContext } from '../../context/HeaderContext';
// import HeaderContext from '../../context/HeaderContext';

import { Container, Form } from './styles';

const Clients: React.FC = () => {
  const { updateHeader } = useContext(HeaderContext);

  useEffect(() => {
    updateHeader({
      title: 'Clientes',
      subTitle: 'Gerencie os clientes: Incluir, Listar, Alterar e Excluir.',
      icon: 'users',
    });
  }, [updateHeader]);

  return (
    <Container>
      <Form>
        <Input
          name="Nome"
          placeholder="Digite o seu nome compelto"
          style={{ flexGrow: 6 }}
        />
        <Input name="Celular" placeholder="Ex: 11 99876 6543" />
        <Input name="E-mail" placeholder="Digite o seu Email" />
        <Input name="Endereço" placeholder="Digite a rua" />
        <Input name="Numero" placeholder="N°" />
        <Input name="Bairro" placeholder="Digite o bairro" />
        <Input name="Cidade" placeholder="Digite a cidade" />
        <Input name="Estado" placeholder="Digite o estado" />
      </Form>
    </Container>
  );
};

export default Clients;
