import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import MobilizerClub from "./screens/MobilizerClub";
import MobilizerFeed from "./screens/MobilizerFeed";
import Profile from "./screens/Profile/Profile";
import ProfileClub from "./screens/Profile/ProfileClub/ProfileClub";
import Vote from "./screens/Profile/ProfileClub/Vote";
import Feature from "./screens/Profile/feature";
import eventTalk from "./screens/Profile/ProfileClub/eventTalk";
import Login from "./screens/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/mobilizer-club:id" exact component={MobilizerClub} />
        <Route path="/mobilizer-feed" exact component={MobilizerFeed} />
        <Route path="/profile:id" exact component={Profile} />
        <Route path="/profileClub:id" exact component={ProfileClub} />
        <Route path="/vote:id" exact component={Vote} />
        <Route path="/feature:id" exact component={Feature} />
        <Route path="/event-talk:id" exact component={eventTalk} />

      </Router>
    </div>
  );
}

export default App;
