import React from 'react';
import Main  from  './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component{

    constructor(props){
      super(props);
    }
    
    render(){
      return (
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
