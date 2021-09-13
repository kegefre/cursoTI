import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, NavItem, Table } from 'reactstrap';

import { api } from '../../../config';
import { ApagarServico } from '../ApagarServico';

export const VisualizarServico = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        Type: '',
        message: ''
    });

    const getServicos = async () => {
        await axios.get(api + "/listaservicos")
            .then((response) => {
                //console.log(response.data.servicos);
                setData(response.data.servicos);
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro, não foi possivel conectar na base de dados.'
                });

            });
    }

    useEffect(() => {
        getServicos();
    }, []);

    const apagarServico = async (idServico) => {
        await axios.delete(api + "/apagarservico/" + idServico)
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
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                <h1>Serviços</h1>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/cadastrarservico"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                </div>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}
                <Table striped >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Serviço</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="texto-center">
                                    <Link to={"/servico/" + item.id}
                                        className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                                    <Link to={"/editarservico/" + item.id}
                                        className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm m-1"
                                        onClick={() => apagarServico(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}