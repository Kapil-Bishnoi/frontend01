import React from 'react';
import {Form, FormGroup, Label,FormFeedback, Input ,Col,Button } from 'reactstrap';

class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
            isAgree: false,
            touched:{
                firstname: false,
                lastname: false,
                username: false,
                email: false,
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    
    handleInputChange(event){
        const target = event.target ;
        const value = (target.type === "checkbox")? target.checked : target.value ;
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
    
    handleBlur = (field) => (e)=>{
        this.setState({
            touched: {...this.state.touched, [field]:true}
        });
    }

    Validate(firstname,lastname,username,email){
        const errors={
            firstname:'',
            lastname:'',
            username: '',
            email:'',
        }
        if(this.state.touched.firstname){
            if(firstname.length < 3){
                errors.firstname="first name should have atleast 3 charcters";
            }
            else if(firstname.length > 10){
                errors.firstname="first name should have atmost 12 charcters";
            }
        }
        if(this.state.touched.lastname){
            if(lastname.length < 3){
                errors.lastname="last name should have atleast 3 charcters";
            }
            else if(lastname.length > 10){
                errors.lastname="last name should have atmost 12 charcters";
            }
        }
        if(this.state.touched.username){
            if(username.length < 3){
                errors.username="User name should have atleast 3 charcters";
            }
            else if(username.length > 10){
                errors.username="User name should have atmost 12 charcters";
            }
        }
        if(this.state.touched.email && email.split('').filter(c => c==='@').length !==1){
            errors.email="Email should contain a @ symbol";
        }
        return errors;
    }

    render(){

        const errors = this.Validate(this.state.firstname,this.state.lastname,this.state.username,this.state.email);

        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Create Account</h3>
                    </div>
                    <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleFormSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2} >First Name</Label>
                                <Col md={10} >
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name" value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                        valid={errors.firstname === ''&&this.state.touched.firstname}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                         />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2} >Last Name</Label>
                                <Col md={10} >
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name" value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                        valid={errors.lastname === ''&&this.state.touched.lastname}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                         />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="username" md={2} >User Name</Label>
                                <Col md={10} >
                                    <Input type="text" id="username" name="username"
                                        placeholder="User Name" value={this.state.username}
                                        onChange={this.handleInputChange}
                                        valid={errors.username === ''&&this.state.touched.username}
                                        invalid={errors.username !== ''}
                                        onBlur={this.handleBlur('username')}
                                         />
                                    <FormFeedback>{errors.username}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2} >Email</Label>
                                <Col md={10} >
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email Id" value={this.state.email}
                                        onChange={this.handleInputChange}
                                        valid={errors.email === ''&&this.state.touched.email}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                         />
                                    <FormFeedback>{errors.email}</FormFeedback>
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
                            <FormGroup row>
                                <Label htmlFor="password" md={2} >Confirm Password</Label>
                                <Col md={10} >
                                    <Input type="confirmpassword" id="confirmpassword" name="confirmpassword"
                                        placeholder="Confirm Password" value={this.state.confirmpassword}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6,offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="isAgree" checked={this.state.isAgree}
                                            onChange={this.handleInputChange} /> {' '}
                                            <strong>Terms and conditions</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{offset:2, size:10}}>
                                    <Button type="submit" color="primary">
                                        Sign Up
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
export default Signup ;