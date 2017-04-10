import React, {Component} from "react";
import {connect} from "react-redux";

@connect((store) => {
    return {
        username: store.authenticate.user.name
    }
})
class About extends Component {
    render() {
        return (
            <div className='About'>
                <h1>
                    About {this.props.username == null ? this.props.username : this.props.username.split(" ")[0] + "!"} </h1>
            </div>
        );
    }
}


export default About;