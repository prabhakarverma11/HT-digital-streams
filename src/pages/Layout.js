import React, {Component} from 'react';
import Page from './Page';
import {connect} from "react-redux";
import { LinkContainer } from 'react-router-bootstrap';


import {
    Navbar,
    // NavbarHeader,
    Nav,
    // Item,
    NavItem,
    // NavbarItems,
    // DropdownMenu,
    // NavbarDropdown,
    NavDropdown,
    // Checkbox,
    // Radio,
    FormGroup,
    // ControlLabel,
    // Form,
    // Col,
    // Breadcrumb,
    FormControl,
    MenuItem,Button} from 'react-bootstrap';
import Navigation from "../containers/navigation/Navigation";
@connect((store) =>{
    return {
        isAuthenticated: store.authenticate.isAuthenticated,
    }
})
class Layout extends Component{
    getMetaData =()=>{
        return {
            title: this.pageTitle(),
            meta: this.pageMeta(),
            link: this.pageLink()
        };
    };

    pageTitle =()=>{
        return 'Layout';
    };

    pageMeta =()=>{
        return [
            {name: 'description', content: 'A reactGo example of a login or register page'}
        ];
    };

    pageLink =()=>{
        return [];
    };
    render(){
        const { children,isAuthenticated } = this.props;
        return (
                <div className="app app-header-fixed ">
                        {isAuthenticated && <Navigation {...this.props} />}
                    {children}
                </div>
        );
    }
}
export default Layout;

