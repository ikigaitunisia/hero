import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./screens/Login";
import LoginAct from "./screens/LoginActv";
import Card from "./screens/Card";
import ActivistProfile from "./screens/ActivistProfile";
import ActivistsLists from "./screens/ActivistsLists";
import Feed from "./screens/Feed";
import Home from "./screens/Home";
import CardTransaction from "./screens/CardTransaction";
import Vote from "./screens/Vote";
import HeroTeam from "./screens/HeroTeam";
import MobilizerCard from "./screens/MobilizerCard";
import ChangePassword from "./screens/ChangePassword";
import RedirectToTransaction from "./screens/RedirectToTransaction";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/loginAct" exact component={LoginAct} />
        <Route path="/card" exact component={Card} />
        <Route path="/activistprofile" exact component={ActivistProfile} />
        <Route path="/ActivistsLists" exact component={ActivistsLists} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/" exact component={Home} />
        <Route path="/cardtransaction" exact component={CardTransaction} />
        <Route path="/vote" exact component={Vote} />
        <Route path="/heroteam" exact component={HeroTeam} />
        <Route path="/mobilizercard" exact component={MobilizerCard} />
        <Route path="/changepassword" exact component={ChangePassword} />
        <Route path="/RedirectToTransaction" exact component={RedirectToTransaction} />
        
      </Router>
    </div>
  );
}

export default App;
