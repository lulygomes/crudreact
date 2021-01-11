import React, { useContext, useEffect } from 'react';
import {
  FaMobileAlt,
  FaUserAlt,
  FaUsers,
  FaRegEnvelope,
  FaWarehouse,
} from 'react-icons/fa';
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
      icon: FaUsers,
    });
  }, [updateHeader]);

  return (
    <Container>
      <Form>
        <div>
          <h3>Dados pessoais</h3>
          <Input name="Nome" placeholder="Nome compelto" icon={FaUserAlt} />
          <Input
            name="Celular"
            placeholder="Ex: 11 99876 6543"
            icon={FaMobileAlt}
          />
          <Input name="E-mail" placeholder="E-mail" icon={FaRegEnvelope} />
        </div>
        <div>
          <h3>Endereço</h3>
          <Input name="Endereço" placeholder="Rua" icon={FaWarehouse} />
          <Input name="Numero" placeholder="N°" />
          <Input name="Bairro" placeholder="Bairro" />
          <Input name="Cidade" placeholder="Cidade" />
          <Input name="Estado" placeholder="Estado" />
        </div>
      </Form>
    </Container>
  );
};

export default Clients;
