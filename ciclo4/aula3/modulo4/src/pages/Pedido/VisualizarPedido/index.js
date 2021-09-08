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

    return (
        <div className="p-2">
            <Container>
                {status.type ==='error'?<Alert color="danger">{status.message}</Alert>:""}
                
                <h1>Pedidos</h1>
                <Table striped >
                    <thead>
                        <tr>
                            <th>Valor</th>
                            <th>Data</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.valor}</td>
                                <td>{item.data}</td>
                                <td className="texto-center">
                                    <Link to={"/pedido/"+item.id}
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