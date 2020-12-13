import React from 'react';
import {Form, FormGroup, Label, Input ,Col,Button } from 'reactstrap';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
        
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
        console.log("Feedback is submited"+JSON.stringify(this.state));
        alert("Feedback is submited"+JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
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
                                    <Button type="submit" color="primary">
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