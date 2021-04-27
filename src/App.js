import './App.css';
import React from 'react'
import Accueil from './components/accueil';
import {Route} from 'react-router-dom'; 
import Message from './components/message';


class App extends React.Component{
  render(){
    return(
      <div className="App">
        
          <Route exact path='/' component={Accueil}/>
          <Route exact path='/message' component={Message}/>
        </div>
      
    )
  }
}

export default App;
