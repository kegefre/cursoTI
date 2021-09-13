import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Alert, Button, Container, Form, FormGroup, Input, Label, Spinner } from "reactstrap"
import axios from "axios"
import { api } from "../../../config"

export const EditarServico = (props) => {
        
        const [data,setData] = useState({
            id: props.match.params.id,
            nome:'',
            descricao:''
        })

    const [id] = useState(props.match.params.id);
    /*
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
*/
    const [status, setStatus] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const edtServico = async e => {
        e.preventDefault();
        console.log("Editada");
        setData({id:id});
        const headers = {
            'Content-Type': 'application/json'
        }
        console.log(data);
        await axios.put(api + "/editarservico", data, { headers })
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
        const getServico = async () => {
            await axios.get(api + "/servico/" + data.id)
                .then((response) => {
                    setData({
                        nome:response.data.servico.nome,
                        descricao:response.data.servico.descricao
                    });
                })
                .catch(() => {
                    console.log("Erro, não foi possivel conectar a API.");
                })
        }
        getServico();
    }, [id]);

    const valorInput = e => setData({
        ...data, [e.target.name]: e.target.value
    });

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Editar um serviço</h1>
                    </div>

                    <div>
                        <Link to={"/visualizarservico"}
                            className="btn btn-outline-primary btn-sm m-1">Listar</Link>
                        <Link to={"/servico/" + id}
                            className="btn btn-outline-primary btn-sm m-1">Consultar</Link>
                    </div>
                </div>
                <hr className="m-1" />
                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}
                <Form className="p-2" onSubmit={edtServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do Serviço" value={data.nome} onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descrição do Serviço" value={data.descricao} onChange={valorInput} />
                    </FormGroup>
                    {status.formSave ?
                        <FormGroup className="p-2">
                            <Button type="submit" outline color="warning" disabled><Spinner size="sm" clor="info" /></Button>
                        </FormGroup> :

                        <FormGroup className="p-2">
                            <Button type="submit" outline color="warning">Salvar</Button>
                        </FormGroup>
                    }
                </Form>
            </Container>
        </div>
    )
}