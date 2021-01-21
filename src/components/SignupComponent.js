import React from 'react';
import {Form, FormGroup, Label,FormFeedback, Input ,Col,Button } from 'reactstrap';

class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state = this.initialState ;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    
    initialState = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
        isAgree: false,
        touched:{
            firstname: false,
            lastname: false,
            email: false,
            password: false,
            confirmpassword: false
        }
    };
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
        event.preventDefault();  
        console.log("Registered");
        const User = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
        };

        // axios.post("http://localhost:8080/signup",User).then(response => {

        //     if(response.data!==null){
        //         alert("You Have Successfully Registered");
        //         console.log(response.data);
        //         this.props.history.push('/login');
        //         this.setState(this.initialState);
        //     }
        // });

        fetch("http://localhost:8080/signup",{
            method: 'POST',
            body: User,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true'
            },
            // mode: 'no-cors',

        }).then((response) => {
            if(response.ok){
                alert("You Have Successfully Registered");
                console.log(response.data.json());
                this.props.history.push('/login');
                this.setState(this.initialState);
            }
            else{
                // var errMsg = "error";
                throw response;
            }
        }).catch((error) => (console.log(error)));

    }
    
    handleBlur = (field) => (e)=>{
        this.setState({
            touched: {...this.state.touched, [field]:true}
        });
    }

    Validate(firstname,lastname,email,password,confirmpassword){
        const errors={
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            confirmpassword:''
        }
        if(this.state.touched.firstname){
            if(firstname.length < 3){
                errors.firstname="first name must have atleast 3 charcters";
            }
            else if(firstname.length > 15){
                errors.firstname="first name must have atmost 15 charcters";
            }
        }
        if(this.state.touched.lastname){
            if(lastname.length > 15){
                errors.lastname="last name must have atmost 15 charcters";
            }
        }
        if(this.state.touched.password){
            if(password.length < 3){
                errors.password="Password must have atleast 3 charcters";
            }
            else if(password.length > 50){
                errors.password="Password must have atmost 50 charcters";
            }
        }
        if(this.state.touched.email && email.split('').filter(c => c==='@').length !==1){
            errors.email="Invalid email id";
        }
        if(this.state.touched.confirmpassword && password !== confirmpassword){
            if(password===''){
                errors.confirmpassword="Please first fill up password";
            }
            else{
                errors.confirmpassword="Password did not match";
            }
        }
        return errors;
    }

    render(){

        const errors = this.Validate(this.state.firstname,this.state.lastname,this.state.email,this.state.password,this.state.confirmpassword);
        const isPasswordEqual=(this.state.password===this.state.confirmpassword);
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
                                        required
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
                                        valid={errors.lastname === ''&&this.state.touched.lastname&&this.state.lastname!==''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                    />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2} >Email</Label>
                                <Col md={10} >
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email Id" value={this.state.email}
                                        onChange={this.handleInputChange}
                                        required
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
                                        onChange={this.handleInputChange}
                                        required
                                        valid={errors.password===''&&this.state.touched.password}
                                        invalid={errors.password !== ''}
                                        onBlur={this.handleBlur('password')}
                                    />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="password" md={2} >Confirm Password</Label>
                                <Col md={10} >
                                    <Input type="password" id="confirmpassword" name="confirmpassword"
                                        placeholder="Confirm Password" value={this.state.confirmpassword}
                                        onChange={this.handleInputChange}
                                        required
                                        valid={errors.confirmpassword ===''&&this.state.touched.confirmpassword}
                                        invalid={errors.confirmpassword !== ''}
                                        onBlur={this.handleBlur('confirmpassword')} 
                                    />
                                    <FormFeedback>{errors.confirmpassword}</FormFeedback>
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
                                <Col md={{offset:2, size:6}}>
                                    <Button type="submit" disabled={!isPasswordEqual} color="primary">
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