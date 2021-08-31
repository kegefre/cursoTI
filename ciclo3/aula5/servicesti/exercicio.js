const  express=require('express');
const cors=require('cors');

const models=require('./models');

const app=express();
app.use(cors());
app.use(express.json());

let cliente=models.Cliente;
let servico=models.Servico;
let pedido=models.Pedido;

//Lista Cliente
app.get('/listaclientes', async (req, res) => {
    await cliente.findAll({
        raw: true
    }).then((cliente) => {
        res.json({
            cliente
        })
    });
});



let port=process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log('Servidor ativo');
});