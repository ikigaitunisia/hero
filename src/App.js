import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home";
import MobilizerClub from "./screens/MobilizerClub";
import MobilizerFeed from "./screens/MobilizerFeed";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/mobilizer-club" exact component={MobilizerClub} />
        <Route path="/mobilizer-feed" exact component={MobilizerFeed} />
      </Router>
    </div>
  );
}

export default App;
