import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Container from './src/Ex.1.UserInput/Container';

ReactDOM.render(
    <BrowserRouter >
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/UserInput' component={Container} />
        </Switch>
    </BrowserRouter >, document.getElementById('app'));