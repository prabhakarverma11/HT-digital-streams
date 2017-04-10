import React from 'react';
import {Route, IndexRoute} from 'react-router';
import { Layout, Home, Login, Signup, Lead, About, Logout} from "./pages";


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
        <Route path='/' name="Layout" component={Layout}>
            <IndexRoute component={ Home } name="Home" onEnter={requireAuth}/>
            <Route path='about' component={ About } name="About" onEnter={requireAuth}/>
            <Route path='leads' component={ Lead } name="Lead" onEnter={requireAuth}/>
            <Route path='login' component={ Login} name="Login" onEnter={redirectAuth}/>
            <Route path='logout' component={ Logout} name="Logout" />
            <Route path='signup' component={ Signup } name="Signup"/>
        </Route>
    );
}