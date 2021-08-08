import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './components/styles/Header.css';
import App from "./components/App";
import NotFound from "./components/NotFound";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

/*const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Switch = ReactRouterDOM.Switch;*/

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path='/feed' component={App} />
                <Route component={NotFound} />
                <Redirect from='/' to='/feed'/>
            </Switch>
        </Router>
        {/*<App />*/}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
