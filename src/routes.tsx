import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Tabela from './pages/Tabela';

const Routes = () => {
    return (
        <BrowserRouter> 
            <Route component={Home} path="/" exact />
            <Route component={Tabela} path="/file-checker"/>
        </BrowserRouter>
    );
}

export default Routes;