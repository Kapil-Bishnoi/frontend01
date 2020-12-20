import React from 'react';
import { NavLink } from 'react-router-dom';
import {Nav, Navbar,  NavbarToggler, Collapse, NavItem} from 'reactstrap';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.openNavbar = this.openNavbar.bind(this);
    }

    openNavbar(){
        this.setState({
            isNavOpen : !(this.state.isNavOpen)
        });
    }

    render(){
        return(
        <React.Fragment>
            <Navbar expand="md" className="Navbar" dark color="primary" >
                <div className="container">
                    <NavbarToggler onClick={this.openNavbar} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/login">Logout</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
        );
    }
}

export default Header ;