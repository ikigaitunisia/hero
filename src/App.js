import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./components/common.css"
import Login from "./screens/Login";
import Home from "./screens/Home";
import ChangePassword from "./screens/ChangePassword";
import SearchFilters from "./screens/SearchFilters";
import Feed from "./screens/Feed";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/search-filters" exact component={SearchFilters} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/changepassword" exact component={ChangePassword} />        
      </Router>
    </div>
  );
}

export default App;
