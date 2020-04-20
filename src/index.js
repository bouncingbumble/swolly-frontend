import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route
                exact
                path="/workout/:id"
                render={routeProps => (<App {...routeProps} />)}
            />
            <Route
                exact
                path=""
                render={routeProps => (<App {...routeProps} />)}
            />

        </Switch>
    </Router>
    , document.getElementById('root')
);
