import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'


const Pagina404 = () => (<div>404</div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/cadastro/Video" component={CadastroVideo}/>
    <Route component={Pagina404} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
