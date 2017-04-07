import React, {Component} from 'react';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux";
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
    MenuItem, Button
} from 'react-bootstrap';
@connect((store) => {
    return {
        isAuthenticated: store.authenticate.isAuthenticated,
    }
}, (dispatch) => {
    return {
        requestSignin: (creds) => {
            dispatch(signin(creds));
        }
    }
})


export default class Menu extends Component {
    render() {
        const {children, isAuthenticated} = this.props;
        return (
            <div className='Menu'>
                {isAuthenticated &&
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Home</Link>
                        </Navbar.Brand>
                        {/*<Navbar.Toggle />*/}
                    </Navbar.Header>
                    <Navbar.Collapse>

                        <Nav pullRight>
                            <LinkContainer to="/login">
                                <NavItem eventKey={0}>Login</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <NavItem eventKey={5}>Signup</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            {<LinkContainer to='/about'>
                                <NavItem eventKey={2}>About</NavItem>
                            </LinkContainer>}

                        </Nav>
                        <div>

                            <Nav pullRight>
                                <LinkContainer to="/logout">
                                    <NavItem eventKey={1}>Logout</NavItem>
                                </LinkContainer>
                            </Nav>
                        </div>

                    </Navbar.Collapse>
                </Navbar>
                }
                { children }
            </div>
        );
    };
}