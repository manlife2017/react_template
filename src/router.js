import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './store/models/AppModel';
import Login from './store/models/LoginModel';
import todoApp from './store/reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

let store = createStore(todoApp)

let browserRouter = 
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/reg" component={App} />
                </Switch>
            </BrowserRouter>
        </Provider>

export default browserRouter