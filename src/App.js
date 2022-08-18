import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./components/common.css"
import Login from "./screens/Login";
import Home from "./screens/Home";
import ChangePassword from "./screens/ChangePassword";
import SearchFilters from "./screens/SearchFilters";
import Feed from "./screens/Feed";
import ActivistProfile from "./screens/ActivistProfile";
import AfricanLeadersCircleProfile from "./screens/AfricanLeadersCircleProfile";
import MobilizerFeed from "./screens/MobilizerFeed";
import ListSupporter from "./screens/ListSupporter";
import ListMobilizer from "./screens/ListMobilizer";
import FindCircle from "./screens/FindCircle";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/search-filters" exact component={SearchFilters} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/mobilizer-feed" exact component={MobilizerFeed} />
        <Route path="/mobilizer-profile" exact component={ActivistProfile} />
        <Route path="/african-leaders-circle-profile" exact component={AfricanLeadersCircleProfile} />
        <Route path="/changepassword" exact component={ChangePassword} />        
        <Route path="/supporters" exact component={ListSupporter} />    
        <Route path="/mobilizers" exact component={ListMobilizer} />   
        <Route path="/find-circle" exact component={FindCircle} />   
      </Router>
    </div>
  );
}

export default App;
