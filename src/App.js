import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import MobilizerClub from "./screens/MobilizerClub";
import MobilizerFeed from "./screens/MobilizerFeed";
import Profile from "./screens/Profile/Profile";
import ProfileClub from "./screens/Profile/ProfileClub/ProfileClub";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/mobilizer-club" exact component={MobilizerClub} />
        <Route path="/mobilizer-feed" exact component={MobilizerFeed} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/ProfileClub" exact component={ProfileClub} />
      </Router>
    </div>
  );
}

export default App;
