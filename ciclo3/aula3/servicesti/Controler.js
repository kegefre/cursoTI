const  express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

app.get('/',function(req,res){
    res.send('Olá Mundo');
});

app.get('/cliente',async (req,res)=>{
    let create=await cliente.create({
        nome: "Kellis",
        endereco: "Rua dos coqueiros",
        cidade:"Maringá",
        uf:"PR",
        nascimento:"1975-08-26",
    });
    res.send('Cliente foi inserido!');
});


app.get('/pedido',async (req,res)=>{
    let create=await pedido.create({
        idCliente:1,
        idServico:3,
        valor: "1200.00",
        data: "2021-08-27",
    });
    res.send('Pedido foi inserido!');
});
/*
app.get('/servico',async (req,res)=>{
    let create=await servico.create({
        nome: "Nodejs",
        descricao: "Desenvolvimento de aplicação back-end",
    });
    res.send('Servico foi inserido!');
});
*/
app.post('/servico',async (req,res)=>{
    let create=await servico.create(req.body);
    res.send('Servico foi inserido!');
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});