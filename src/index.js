import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Teste from './Teste';
import * as serviceWorker from './serviceWorker';
import { BrowserRoute, BrowserRouter, Switch, Route } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={App}  exact/>
    <Route path="/teste" component={Teste}  exact/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
