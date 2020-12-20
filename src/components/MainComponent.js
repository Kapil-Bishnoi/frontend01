import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Signup from './SignupComponent';
import Login  from './LoginComponent';
import { Switch,Route,Redirect} from 'react-router-dom';

class Main extends React.Component{

    constructor(props){
      super(props);
      this.state = {
      };
    }
    
    render(){

      return (
        <div className="Main">
          <Header />
          <Switch>
            <Route component={Home} exact path='/home' />
            <Route component={Signup} exact path='/signup' />
            <Route component={Login} exact path='/login' />
            <Redirect to='/home' />
          </Switch>
        </div>
      );
    }
}

export default Main;
