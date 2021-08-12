import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './components/styles/Header.css';
import App from "./components/App";
import NotFound from "./components/NotFound";
import {Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
import {Switch, Route} from "react-router";
import CreatePostPage from "./components/CreatePostPage";

const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/create" component={CreatePostPage} />
                <Route path="/update/id" component={CreatePostPage} />
                <Route component={NotFound} />
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
