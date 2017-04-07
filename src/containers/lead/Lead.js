import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";


@connect((store) => {
    return {
        errorMessage: store.authenticate.errorMessage,
        successMessage: store.authenticate.successMessage
    }
}, (dispatch) => {
    return {
        // requestSignin: (creds) => {
        //     dispatch(signin(creds));
        // }
    }
})
class Lead extends Component {
    render() {
        return (
            <div className="container w-xxl w-auto-xs"
            >
                <a className="navbar-brand block m-t">Angulr</a>
                <div className="m-b-lg">
                    <div className="wrapper text-center">
                        <strong>Sign in to get in touch</strong>
                    </div>


                </div>
            </div>
        );
    }
}
Lead.propTypes = {
    // requestSignin: React.PropTypes.func.isRequired,
};

export default Lead;
