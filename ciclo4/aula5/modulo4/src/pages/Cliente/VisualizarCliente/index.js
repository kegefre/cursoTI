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

    const apagarCliente = async (idCliente) => {
        await axios.delete(api + "/apagarcliente/" + idCliente)
            .then((response) => {
                if (response.data.error) {
                    setStatus({
                        formSave: false,
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        formSave: false,
                        type: 'success',
                        message: response.data.message
                    });
                }
            })
            .catch(() => {
                setStatus({
                    formSave: false,
                    type: 'error',
                    message: 'Erro: não Conectado com a API'
                });
            });
    };

    return (
        <div className="p-2">
            <Container>
                <div className="d-flex align-items-center">
                    {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

                    <h1>Clientes</h1>
                    <div className="p-2">
                        <Link to="/cadastrarcliente"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                </div>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}
                <Table striped >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Nascimento</th>
                            <th className="text-center">Ação</th>
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
                                <td className="text-center">
                                    <Link to={"/cliente/" + item.id}
                                        className="btn btn-outline-primary btn-sm">Consultar</Link>
                                    <Link to={"/editarcliente/" + item.id}
                                        className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm m-1"
                                        onClick={() => apagarCliente(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}