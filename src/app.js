import {Provider} from "react-redux";
import {Router, browserHistory} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import createRoutes from './routes';


import './styles/app.css';
// import './styles/font.css';


const store = configureStore();
const routes = createRoutes(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);