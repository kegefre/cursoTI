import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { api } from "../../../config"

export const EditarPedido = (props) => {

    const [id] = useState(props.match.params.id);
    const [ClienteId, setClienteId] = useState('');
    const [ServicoId, setServicoId] = useState('');
    const [valor, setValor] = useState('');
    const [datas, setDatas] = useState('');

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtPedido = async e => {
        e.preventDefault();
        console.log("Editada");

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.put(api + "/editarpedido", { id, ClienteId, ServicoId, valor, datas }, { headers })
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

    useEffect(() => {
        const getPedido = async () => {

            await axios.get(api + "/pedido/" + id)
                .then((response) => {
                    setClienteId(response.data.pedido.ClienteId);
                    setServicoId(response.data.pedido.ServicoId);
                    setValor(response.data.pedido.valor);
                    setDatas(response.data.pedido.data);
                })
                .catch(() => {
                    console.log("Erro, não foi possivel conectar a API.");
                })
        }
        getPedido();
    }, [id]);

    return (

        <div className="p-2">
            <Container>
                <div className="d-flex align-items-center">
                    <div className="mr-auto p-2">
                        <h1>Editar um pedido</h1>
                    </div>

                    <div>
                        <Link to={"/visualizarpedido"}
                            className="btn btn-outline-primary btn-sm m-1">Listar</Link>
                        <Link to={"/pedido/" + id}
                            className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}
                <Form className="p-2" onSubmit={edtPedido}>
                    <FormGroup className="p-2">
                        <Label>ClienteId</Label>
                        <Input type="text" name="ClienteId" placeholder="Id do cliente" value={ClienteId} onChange={e => setClienteId(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>ServiçoId</Label>
                        <Input type="text" name="ServicoId" placeholder="Id do serviço" value={ServicoId} onChange={e => setServicoId(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Valor</Label>
                        <Input type="text" name="valor" placeholder="Valor" value={valor} onChange={e => setValor(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Data</Label>
                        <Input type="text" name="datas" placeholder="Data do serviço" value={datas} onChange={e => setDatas(e.target.value)} />
                    </FormGroup>

                    <FormGroup className="p-2">
                        <Button type="submit" outline color="warning" disabled={status.formSave}>
                            {status.formSave && <span>Salvando</span>}
                            {status.formSave && <Spinner
                                size="sm" children="" />}
                            {!status.formSave && <span>Salvar</span>}
                        </Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}