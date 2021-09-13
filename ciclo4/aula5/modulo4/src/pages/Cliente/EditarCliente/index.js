import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import axios from "axios"
import { api } from "../../../config"

export const EditarCliente = (props) => {
 
    const [id] = useState(props.match.params.id);
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [nascimento, setNascimento] = useState('');

    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtCliente = async e => {
        e.preventDefault();

        setStatus({
            formSave: true
        });

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.put(api + "/editarcliente", { id, nome, endereco, cidade, uf, nascimento }, { headers })
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
        const getCliente = async () => {
            await axios.get(api + "/cliente/" + id)
                .then((response) => {
                    console.log(response.data.cliente);
                    setNome(response.data.cliente.nome);
                    setEndereco(response.data.cliente.endereco);
                    setCidade(response.data.cliente.cidade);
                    setUf(response.data.cliente.uf);
                    setNascimento(response.data.cliente.nascimento);
                })
                .catch(() => {
                    console.log("Erro, não foi possivel conectar a API.Effect");
                })
        }
        getCliente();
    }, [id]);

    return (
        <div>
            <Container>
            <div className="d-flex align-items-center">
                    <div className="p-2">
                        <h1>Editar um cliente</h1>
                    </div>

                    <div>
                        <Link to={"/visualizarcliente"}
                            className="btn btn-outline-primary btn-sm m-1">Listar</Link>
                        <Link to={"/cliente/" + id}
                            className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}
                <Form className="p-2" onSubmit={edtCliente}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" value={nome} placeholder="Nome do Cliente" onChange={e => setNome(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Endereço</Label>
                        <Input type="text" name="endereco" value={endereco} placeholder="Endereço do cliente" onChange={e => setEndereco(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Cidade</Label>
                        <Input type="text" name="cidade" value={cidade} placeholder="Cidade" onChange={e => setCidade(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>UF</Label>
                        <Input type="text" name="uf" value={uf} placeholder="Unidade Federal" onChange={e => setUf(e.target.value)} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Nascimento</Label>
                        <Input type="text" name="nascimento" value={nascimento} placeholder="Data de nascimento" onChange={e => setNascimento(e.target.value)} />
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