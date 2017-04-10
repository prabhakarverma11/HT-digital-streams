import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class Navigation extends React.Component{
    render(){
        return (
            <div className=''>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Home</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>

                        <Nav pullRight>
                            <LinkContainer to="/login">
                                <NavItem eventKey={0}>Login</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/logout">
                                <NavItem eventKey={4}>Logout</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <NavItem eventKey={1}>Signup</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            {<LinkContainer to='/about'>
                                <NavItem eventKey={2}>About</NavItem>
                            </LinkContainer>}

                        </Nav>
                        <Nav>
                            {<LinkContainer to='/leads'>
                                <NavItem eventKey={3}>Lead</NavItem>
                            </LinkContainer>}

                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
};

Navigation.propTypes = {
    //user: PropTypes.object,
    //logOut: PropTypes.func.isRequired
};

// function mapStateToProps(state) {
//     return {
//         user: state.user
//     };
// }

// export default connect(mapStateToProps)(Navigation);
export default Navigation;