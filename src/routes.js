import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {Home, Login, Signup, Lead} from "./pages";
import {Menu} from "./components/menu/Menu"


export default (store) => {

    const requireAuth = (nextState, replace, callback) => {
        const {authenticate: {isAuthenticated}} = store.getState();
        if (!isAuthenticated) {
            replace({
                pathname: '/login',
                state: {nextPathname: nextState.location.pathname}
            });
        }
        callback();
    };

    const redirectAuth = (nextState, replace, callback) => {
        const {authenticate: {isAuthenticated}} = store.getState();
        if (isAuthenticated) {
            replace({
                pathname: '/'
            });
        }
        callback();
    };

    return (
        <Route path='/' name="Menu" component={ Menu }>
            <IndexRoute component={ Home } name="Home" onEnter={requireAuth}/>
            <Route path='leads' component={ Lead } name="Lead"/>
            <Route path='login' component={ Login} name="Login" onEnter={redirectAuth}/>
            <Route path='signup' component={ Signup } name="Signup"/>
        </Route>
    );
}