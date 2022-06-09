import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./screens/Login";
import Card from "./screens/Card";
import ActivistProfile from "./screens/ActivistProfile";
import ActivistsLists from "./screens/ActivistsLists";
import Feed from "./screens/Feed";
import Home from "./screens/Home";
import CardTransaction from "./screens/CardTransaction";

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
        <Route path="/cardtransaction" exact component={CardTransaction} />
      </Router>
    </div>
  );
}

export default App;
