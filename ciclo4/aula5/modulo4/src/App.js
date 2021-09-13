import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';

import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';
import {VisualizarPedido} from './pages/Pedido/VisualizarPedido';
import {VisualizarServico} from './pages/Servico/VisualizarServico';

import {EditarCliente} from './pages/Cliente/EditarCliente';
import {EditarPedido} from './pages/Pedido/EditarPedido';
import {EditarServico} from './pages/Servico/EditarServico';

import { Servico } from './pages/Servico/Servico';
import { Cliente } from './pages/Cliente/Cliente';
import { Pedido } from './pages/Pedido/Pedido';

import {CadastrarServico} from './pages/Servico/Cadastrar';
import {CadastrarCliente} from './pages/Cliente/Cadastrar';

import { Menu } from './components/Menu';
import { CadastrarPedido } from './pages/Pedido/Cadastrar';


function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>

          <Route path="/editarcliente/:id" component={EditarCliente}/>
          <Route path="/editarpedido/:id" component={EditarPedido}/>
          <Route path="/editarservico/:id" component={EditarServico}/>

          <Route path="/servico/:id" component={Servico}/>
          <Route path="/cliente/:id" component={Cliente}/>
          <Route path="/pedido/:id" component={Pedido}/>

          <Route path="/cadastrarservico" component={CadastrarServico}/>
          <Route path="/cadastrarcliente" component={CadastrarCliente}/>
          <Route path="/cadastrarpedido" component={CadastrarPedido}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
