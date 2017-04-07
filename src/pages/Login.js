import React, {Component} from 'react';
import Page from './Page';
import LoginContainer from '../containers/login/Login';

class Login extends Component {
    getMetaData() {
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    }

    pageTitle() {
        return 'LoginOrRegister | reactGo';
    }

    pageMeta() {
        return [
            {name: 'description', content: 'A reactGo example of a login or register page'}
        ];
    }

    pageLink() {
        return [];
    }

    render() {
        return (
            <Page {...this.getMetaData()}>
                <div className="app app-header-fixed ">
                    <h1> prabhakar</h1>
                    <LoginContainer {...this.props} />
                </div>
            </Page>
        );
    }
}

export default Login;
