import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home/';

import {CriarCliente} from './pages/Cliente/CriarCliente';
import {CriarPedido} from './pages/Pedido/CriarPedido';
import {CriarServico} from './pages/Servico/CriarServico';

import {VisualizarCliente} from './pages/Cliente/VisualizarCliente';
import {VisualizarPedido} from './pages/Pedido/VisualizarPedido';
import {VisualizarServico} from './pages/Servico/VisualizarServico';

import {ApagarCliente} from './pages/Cliente/ApagarCliente';
import {ApagarPedido} from './pages/Pedido/ApagarPedido';
import {ApagarServico} from './pages/Servico/ApagarServico';

import {EditarCliente} from './pages/Cliente/EditarCliente';
import {EditarPedido} from './pages/Pedido/EditarPedido';
import {EditarServico} from './pages/Servico/EditarServico';
import { Menu } from './components/Menu';


function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>

          <Route path="/criarcliente" component={CriarCliente}/>
          <Route path="/criarpedido" component={CriarPedido}/>
          <Route path="/criarservico" component={CriarServico}/>
          
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>

          <Route path="/apagarcliente" component={ApagarCliente}/>
          <Route path="/apagarpedido" component={ApagarPedido}/>
          <Route path="/apagarservico" component={ApagarServico}/>

          <Route path="/editarcliente" component={EditarCliente}/>
          <Route path="/editarpedido" component={EditarPedido}/>
          <Route path="/editarservico" component={EditarServico}/>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
