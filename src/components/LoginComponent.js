import React from 'react';
import {Form, FormGroup, Label, Input ,Col,Button } from 'reactstrap';
import { UserDetails } from "./UserDetailsComponent";
import axios from 'axios';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = this.loginInitialState;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    loginInitialState = {
        email: '',
        password: ''
    };
        
    handleInputChange(event){
        const target = event.target ;
        const value =  target.value ;
        const nameOfProperty = target.name;
        this.setState(
            {
                [nameOfProperty] : value
            }
        );
    }

    handleFormSubmit(event){
        event.preventDefault();
        console.log("logged in");

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post("http://localhost:8080/login",user).then(response => {

            if(response.data!==null){
                alert("You Have Successfully logged in");
                console.log(response.data);
                UserDetails.firstname=response.data.firstname;
                UserDetails.lastname=response.data.lastname;
                UserDetails.email=response.data.email;
                this.props.history.push('/home');
                this.setState(this.loginInitialState);
            }
            else{
                alert("Invalid Email and Password...do signup bro or enter correct details!!")
            }
        });
    }

    render(){
        const isPasswordProvided=(this.state.password !== '');

        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Login</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleFormSubmit}>
                        <FormGroup row>
                                <Label htmlFor="email" md={2} >Email</Label>
                                <Col md={10} >
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email Id" value={this.state.email}
                                        onChange={this.handleInputChange}
                                         />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="password" md={2} >Password</Label>
                                <Col md={10} >
                                    <Input type="password" id="password" name="password"
                                        placeholder="Password" value={this.state.password}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{offset:2, size:10}}>
                                    <Button type="submit" disabled={!isPasswordProvided} color="primary">
                                        Login
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login ;