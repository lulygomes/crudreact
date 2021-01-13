import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  FaMobileAlt,
  FaUserAlt,
  FaUsers,
  FaRegEnvelope,
  FaWarehouse,
} from 'react-icons/fa';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import { HeaderContext } from '../../context/HeaderContext';
import api from '../../services/api';
// import HeaderContext from '../../context/HeaderContext';

import { Container, Button, Table } from './styles';

interface ClientsInterface {
  _id: string;
  name: string;
  phone: string;
  email: string;
  address: {
    street: string;
    number: string;
    neighbor: string;
    city: string;
    state: string;
  };
}

const Clients: React.FC = () => {
  const { updateHeader } = useContext(HeaderContext);

  const [clients, setClients] = useState<ClientsInterface[]>();

  useEffect(() => {
    updateHeader({
      title: 'Clientes',
      subTitle: 'Gerencie os clientes: Incluir, Listar, Alterar e Excluir.',
      icon: FaUsers,
    });
  }, [updateHeader]);

  useEffect(() => {
    const loadData = async () => {
      const response = await api.get('clientes');

      setClients(response.data.clientes);
    };

    loadData();
  }, []);

  function handeSubmit(data: ClientsInterface): void {
    console.log(data);
  }

  return (
    <Container>
      <Form className="form" onSubmit={handeSubmit}>
        <div>
          <h3>Dados pessoais</h3>
          <Input name="nome" placeholder="Nome compelto" icon={FaUserAlt} />
          <Input
            name="phone"
            placeholder="Ex: 11 99876 6543"
            icon={FaMobileAlt}
          />
          <Input name="email" placeholder="E-mail" icon={FaRegEnvelope} />
        </div>

        <div>
          <h3>Endereço</h3>
          <Input name="street" placeholder="Rua" icon={FaWarehouse} />
          <Input name="number" placeholder="N°" />
          <Input name="neighbor" placeholder="Bairro" />
          <Input name="city" placeholder="Cidade" />
          <Input name="state" placeholder="Estado" />
        </div>

        <Button>
          <button className="save" type="submit">
            Salvar
          </button>
          <button className="cancel" type="button">
            Cancelar
          </button>
        </Button>
      </Form>
      <hr />
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Celular</th>
            <th>E-mail</th>
            <th>Endereço</th>
            <th>Numero</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Obções</th>
          </tr>
        </thead>

        <tbody>
          {clients?.map(client => {
            return (
              <tr key={client.name}>
                <td>{client.name}</td>
                <td>{client.phone}</td>
                <td>{client.email}</td>
                <td>{client.address.street}</td>
                <td>{client.address.number}</td>
                <td>{client.address.neighbor}</td>
                <td>{client.address.city}</td>
                <td>{client.address.state}</td>
                <td>options !</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Clients;
