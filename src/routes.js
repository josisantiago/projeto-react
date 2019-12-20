import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from "./pages/main";

import Product from "./pages/product";

//habilitando rotas - o Switch faz com que apenas uma rota seja acessada por vez
const Routes = () => (
    <BrowserRouter>
     <Switch>
        <Route exact path="/" component={Main} />
         <Route path="/products/:id" component={Product} />
     </ Switch>
    </ BrowserRouter>
);

export default Routes;
