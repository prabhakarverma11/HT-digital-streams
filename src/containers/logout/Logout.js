import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {browserHistory} from 'react-router';

import SignoutForm from "../../components/signout/SignoutForm";
import {signout} from "../../actions/authActions/signoutAction";

@connect((store) => {
    return {
        errorMessage: store.authenticate.errorMessage,
        successMessage: store.authenticate.successMessage
    }
}, (dispatch) => {
    return {
        requestSignout: () => {
            dispatch(signout());
        }
    }
})
class Logout extends Component {
    componentWillMount =()=>{
        browserHistory.push('/login');
    };
    render() {
        this.props.requestSignout();

        return (
            <div className="container w-xxl w-auto-xs">
                <a className="navbar-brand block m-t"></a>
                <div className="m-b-lg">
                    <h3 className="m-b-n-lg">You're signed out.</h3>
                </div>
            </div>
        );
    }
}
Logout.propTypes = {
    // requestSignin: React.PropTypes.func.isRequired,
};

export default Logout;
