//import axios from 'axios';

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const Cliente = (props) => {

    const [data, setData] = useState([]);
    const [id, setId] = useState(props.match.params.id);

    useEffect(() => {
        const getCliente = async () => {
            await axios.get(api + "/cliente/" + id)
                .then((response) => {
                    setData(response.data.cliente)
                })
                .catch(() => {
                    console.log("Erro: Não foi possivel conectar à API.");
                })
        }
        getCliente()
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Cliente</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarcliente"
                            className="btn btn-outline-primary btn-sm">Clientes</Link>
                    </div>
                </div>
                <dl className="row">
                    <dt className="col-sm-3">Nome</dt>
                    <dt className="col-sm-9">{data.nome}</dt>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Descrição</dt>
                    <dt className="col-sm-9">{data.endereco}</dt>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Descrição</dt>
                    <dt className="col-sm-9">{data.cidade}</dt>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">UF</dt>
                    <dt className="col-sm-9">{data.endereco}</dt>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Descrição</dt>
                    <dt className="col-sm-9">{data.nascimento}</dt>
                </dl>
                <dl className="row"></dl>
            </Container>
        </div>
    )
}