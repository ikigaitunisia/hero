import React, { Component }  from 'react';

import './App.css';
import Main from './screens/Main'
import Login from './screens/Login'
import Card from './screens/Card'
import ActivistProfile from './screens/ActivistProfile';
import ActivistsLists from './screens/ActivistsLists';
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Feed from './screens/Feed';
import Home from './screens/Home';
import MobilizerProfile from './screens/MobilizerProfile';
import CardTransaction from './screens/CardTransaction';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={Login} />  
        <Route path="/card" exact component={Card} />  
        <Route path="/activistprofile" exact component={ActivistProfile} /> 
        <Route path="/ActivistsLists" exact component={ActivistsLists} /> 
        <Route path="/feed" exact component={Feed} />
        <Route path="/" exact component={Home} />
        <Route path="/mobilizerprofile" exact component={MobilizerProfile} /> 
        <Route path="/cardtransaction" exact component={CardTransaction} /> 

         
	  </Router>
  
       
    </div>
  );
}

export default App;
