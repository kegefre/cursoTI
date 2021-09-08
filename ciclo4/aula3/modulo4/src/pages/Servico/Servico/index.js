//import axios from 'axios';

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const Servico = (props) => {

    const [data, setData] = useState([]);
    const [id, setId] = useState(props.match.params.id);

    useEffect(() => {
        const getServico = async () => {
            await axios.get(api + "/servico/" + id)
                .then((response) => {
                    setData(response.data.servico)
                })
                .catch(() => {
                    console.log("Erro: Não foi possivel conectar à API.");
                })
        }
        getServico()
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Serviço</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarservico"
                            className="btn btn-outline-primary btn-sm">Servicos</Link>
                    </div>
                </div>
                <dl className="row">
                    <dt className="col-sm-3">Nome</dt>
                    <dt className="col-sm-9">{data.nome}</dt>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Descrição</dt>
                    <dt className="col-sm-9">{data.descricao}</dt>
                </dl>
                <dl className="row"></dl>
            </Container>
        </div>
    )
}