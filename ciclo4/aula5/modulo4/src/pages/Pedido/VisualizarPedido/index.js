import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container, NavItem, Table } from 'reactstrap';

import { api } from '../../../config';

export const VisualizarPedido = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        Type: '',
        message: ''
    });

    const getPedidos = async () => {
        await axios.get(api + "/listapedidos")
            .then((response) => {
                //console.log(response.data.servicos);
                setData(response.data.pedidos);
            }).catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro, não foi possivel conectar na base de dados.'
                });

            });
    }

    useEffect(() => {
        getPedidos();
    }, []);


    const apagarPedido = async (idPedido) => {
        await axios.delete(api + "/apagarpedido/" + idPedido)
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
                    <div className="p-2">
                        <h1>Pedidos</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/cadastrarpedido"
                            className="btn btn-outline-primary btn-sm">Cadastrar</Link>
                    </div>
                </div>
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}
                <Table striped >
                    <thead>
                        <tr>
                            <th>ClienteId</th>
                            <th>ServicoId</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.ClienteId}</td>
                                <td>{item.ServicoId}</td>
                                <td>{item.valor}</td>
                                <td>{item.data}</td>
                                <td className="text-center">
                                    <Link to={"/pedido/" + item.id}
                                        className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                                    <Link to={"/editarpedido/" + item.id}
                                        className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm m-1"
                                        onClick={() => apagarPedido(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}