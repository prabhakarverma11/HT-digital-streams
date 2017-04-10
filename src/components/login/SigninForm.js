import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import ReactDOM from "react-dom";
export default class SigninForm extends Component {
    constructor(props) {
        super(props);
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const username = ReactDOM.findDOMNode(this.refs.username).value;
        const password = ReactDOM.findDOMNode(this.refs.password).value;
        const creds = {"username": username.trim(), "password": password.trim()};
        console.log(creds);
        this.props.requestSignin(creds);

    }

    render() {
        const {errorMessage, successMessage} = this.props;
        return (
            <form name="form" className="form-validation" role="form" method="post" onSubmit={this.onFormSubmit}>
                <div className="text-danger wrapper text-center">

                </div>
                <div className="list-group list-group-sm">
                    <div className="list-group-item">
                        <input type="email" placeholder="Email" ref="username"
                               className="form-control no-border"></input>
                    </div>
                    <div className="list-group-item">
                        <input type="password" placeholder="Password" ref="password"
                               className="form-control no-border"></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={this.onFormSubmit}>Log in
                </button>
                <div className="text-center m-t m-b"><a>Forgot password?</a></div>
                <div className="line line-dashed"></div>
                <p className="text-center">
                    <small>Do not have an account? </small><Link to="/signup">create account</Link>
                </p>
            </form>

        );
    }
}
SigninForm.propTypes = {
    // login: PropTypes.func.isRequired,
    // errorMessage: PropTypes.string
}