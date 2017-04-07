import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";

import SigninForm from "../../components/login/SigninForm";
import {signin} from "../../actions/authActions/signinAction";

@connect((store) => {
    return {
        errorMessage: store.authenticate.errorMessage,
        successMessage: store.authenticate.successMessage
    }
}, (dispatch) => {
    return {
        requestSignin: (creds) => {
            dispatch(signin(creds));
        }
    }
})
class Login extends Component {
    render() {
        return (
            <div className="container w-xxl w-auto-xs"
            >
                <a className="navbar-brand block m-t">Angulr</a>
                <div className="m-b-lg">
                    <div className="wrapper text-center">
                        <strong>Sign in to get in touch</strong>
                    </div>
                    <SigninForm {...this.props} requestSignin={(creds) => {
                        this.props.requestSignin(creds)
                    }} errorMessage={this.props.errorMessage} successMessage={this.props.successMessage}/>

                </div>
            </div>
        );
    }
}
Login.propTypes = {
    // requestSignin: React.PropTypes.func.isRequired,
};

export default Login;
