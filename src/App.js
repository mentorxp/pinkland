import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logoPink from './logoPink.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProdusLista from './components/ProdusLista';
import Detalii from './components/Detalii';
import Coscump from './components/Coscump';
import Default from './components/Default';
  

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Navbar />
         <Switch>
           <Route exact path="/" component={ProdusLista} />
          <Route path="/details" component ={Detalii}/>
         <Route path="/cart" component ={Coscump}/>
         
         <Route component={Default} />
         </Switch>
        
          </React.Fragment>
    );
  }
}

export default App;
