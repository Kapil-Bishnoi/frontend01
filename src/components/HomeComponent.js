import React from 'react';
import { UserDetails } from "./UserDetailsComponent";
class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: ''
        };
    }
    componentDidMount(){
        this.setState({
            email: UserDetails.email,
        });
    }
    render(){
        return (
            <div className="container">
                <h3>Mock Interviews</h3>
                <div className="row row-content">
                    <div className="col-6 float-left">
                        <h5>Welcome {UserDetails.email}</h5>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home ;