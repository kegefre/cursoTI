//import axios from 'axios';

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const Pedido = (props) => {

    const [data, setData] = useState([]);
    const [id, setId] = useState(props.match.params.id);

    useEffect(() => {
        const getPedido = async () => {
            await axios.get(api + "/pedido/" + id)
                .then((response) => {
                    setData(response.data.pedido)
                })
                .catch(() => {
                    console.log("Erro: Não foi possivel conectar à API.");
                })
        }
        getPedido()
    }, [id]);

    return (
        <div>
            <Container>
            <div className="d-flex align-items-center">
                    <div className="p-2">
                        <h1>Informações do Pedido</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarpedido"
                            className="btn btn-outline-primary btn-sm m-1">Listar</Link>
                        <Link to={"/editarpedido/"+data.id}
                            className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                    </div>
                </div>
                <dl className="row">
                    <dt className="col-sm-3">ClienteId:</dt>
                    <dt className="col-sm-9">{data.ClienteId}</dt>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">ServicoId:</dt>
                    <dt className="col-sm-9">{data.ServicoId}</dt>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Valor:</dt>
                    <dt className="col-sm-9">{data.valor}</dt>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Data:</dt>
                    <dt className="col-sm-9">{data.data}</dt>
                </dl>
                <dl className="row"></dl>
            </Container>
        </div>
    )
}