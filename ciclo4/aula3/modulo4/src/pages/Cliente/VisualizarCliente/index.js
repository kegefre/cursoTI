import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, NavItem, Table } from 'reactstrap';

import { api } from '../../../config';

export const VisualizarCliente = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        Type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + "/listaclientes")
            .then((response) => {
                //console.log(response.data.servicos);
                setData(response.data.clientes);
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro, não foi possivel conectar na base de dados.'
                });

            });
    }

    useEffect(() => {
        getClientes();
    }, []);

    return (
        <div className="p-2">
            <Container>
                {status.type ==='error'?<Alert color="danger">{status.message}</Alert>:""}
                
                <h1>Clientes</h1>
                <Table striped >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Nascimento</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td className="texto-center">
                                    <Link to={"/cliente/"+item.id}
                                    className="btn btn-outline-primary btn-sm">Consultar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}