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

/*
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
*/
/*
app.get('/pedido',async (req,res)=>{
    let create=await pedido.create({
        idCliente:1,
        idServico:3,
        valor: "1200.00",
        data: "2021-08-27",
    });
    res.send('Pedido foi inserido!');
});
*/
/*
app.get('/servico',async (req,res)=>{
    let create=await servico.create({
        nome: "Nodejs",
        descricao: "Desenvolvimento de aplicação back-end",
    });
    res.send('Servico foi inserido!');
});
*/

app.post('/cliente',async (req,res)=>{
    let create=await cliente.create(req.body);
    res.send('Cliente foi inserido!');
});

app.post('/pedido',async (req,res)=>{
    let create=await pedido.create(req.body);
    res.send('Pedido foi inserido!');
});

app.post('/servico',async (req,res)=>{
    let create=await servico.create(req.body);
    res.send('Servico foi inserido!');
});


app.get('/listaservicos', async (req, res)=>{
    await servico.findAll({
        //raw: true,
        order: [['nome','DESC']]
    }).then(function(servicos){
        res.json({servicos})
    });
});


app.get('/ofertas', async (req, res)=>{
    await servico.count('id')
    .then(function(servicos){
        res.json({servicos})
    });
});

app.get('/servic/:id', async (req, res)=>{
    await servico.findByPk(req.params.id)
    .then(servicos=>{
        return res.json({
            error: false,
            servicos
        });
        
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Código não está cadastrado!"
        });
    });
});


//Lista clientes
app.get('/listaclientes', async (req, res)=>{
    await cliente.findAll({
        //raw: true,
        order: [['nome','DESC']]
    }).then(function(clientes){
        res.json({clientes})
    });
});

//Lista Cliente Antigo
app.get('/listaclientesantigo', async (req, res) => {
    await cliente.findAll({
        order : [['createdAt','ASC']]
    }).then((clientes) => {
        res.json({
            clientes
        })
    });
});

//Todos Pedidos
app.get('/listapedidos', async (req, res) => {
    await pedido.findAll({
        raw : true
    }).then((pedidos) => {
        res.json({pedidos});
    });
});

//Pedido a partir do maior
app.get('/pedidosmaior', async (req, res)=>{
    await pedido.findAll({
        //raw: true,
        order: [['valor','DESC']]
    }).then(function(pedidos){
        res.json({pedidos})
    });
});

//Total de clientes
app.get('/totalclientes', async (req, res) => {
    await cliente.count('id').then((cliente) => {
        res.json(cliente)
    });
});

//total de pedidos
app.get('/totalpedidos', async (req, res) => {
    await pedido.count('id').then((pedidos) => {
        res.json(pedidos)
    });
});





let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});