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


app.get('/valorpedidos/:ClienteId', async (req, res)=>{
    await pedido.sum('valor',{
        where: {
            'ClienteId': req.params.ClienteId,
        },
    }).then(function(valor){
        res.json({valor})
    });
});

app.get('/atualizaservico', async (req,res)=>{
    await servico.findByPk(2)
    .then(servicos=>{
        servicos.nome='HTML/CSS/JS';
        servicos.descricao='Páginas dinâmicas e estáticas.'
        servicos.save();
        return res.json({servicos});
    });
});

app.put('/editarservico', (req,res)=>{
    servico.update(req.body,{
        where: {id: req.body.id},
    }).then(()=>{
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        }).catch(()=>{
            return res.status(400).json({
                errot: true,
                message: "Erro na alteração do serviço"
            });
        });
    });
});

app.get('/servicospedidos', async (req,res)=>{
    await servico.findByPk(1, {
        include: [{all: true}],
    }).then(servico =>{
        return res.json({servico});
    });
});

app.put('/editarpedido', (req,res)=>{
    pedido.update(req.body,{
        where: {
            ServicoId: req.body.ServicoId
        },
    }).then(()=>{
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso.",
        });
    }).catch((erro)=>{
        return res.status(400).json({
            error: true,
            message: "Não foi ppossivel modificar o pedido."
        });
    });
});

//exercicio aula 5 ***********
app.get('/servicosclientes', async (req,res)=>{
    await cliente.findByPk(req.body.id, {
        include: [{all: true}],
    }).then(cliente =>{
        return res.json({cliente});
    });
});

//usar rota para consultar cliente e edita-lo pelo metodo put
app.put('/editarcliente/:id', (req,res)=>{
    cliente.update(req.body,{
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Cliente alterado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do cliente."
        });
    });
});

//usar rota para consultar pedidos e edita-lo pelo metodo put
app.put('/editarpedido/:id', (req,res)=>{
    pedido.update(req.body,{
        where: {id: req.params.id}
    }).then(function(){
        return res.json({
            error: false,
            message: "Pedido alterado com sucesso."
        });
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do pedido."
        });
    });
});
//************************

app.get('/excluircliente', async(req,res)=>{
    await cliente.destroy({
        where: {id:2}
    });
});

app.delete('/apagarcliente/:id',(req,res)=>{
    cliente.destroy({
        where: {id:req.params.id}
    }).then(()=>{
        return res.json({
            error: false,
            message: "Cliente foi excluido com sucesso."
        });
    }).catch((erro)=>{
            return res.status(400).json({
                error: true,
                message: "Não foi possivel excluir o cliente."
            });
        });
 });


 // desafio aula 4

 app.get('/pedidoscliente/:ClienteId', async (req, res)=>{
    await pedido.findAll({
        where: {
            'ClienteId': req.params.ClienteId,
        },
    }).then(function(pedido){
        res.json({pedido})
    });
});

app.put('/editarpedidoporcliente/:ClienteId', (req,res)=>{
    pedido.update(req.body,{
        where: {
            ClienteId: req.params.ClienteId
        },
    }).then(()=>{
        return res.json({
            error: false,
            message: "Pedido modificado com sucesso.",
        });
    }).catch((erro)=>{
        return res.status(400).json({
            error: true,
            message: "Não foi possivel modificar o pedido."
        });
    });
});

let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});