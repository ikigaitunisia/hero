import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./components/common.css"
import Login from "./screens/Login";
import Home from "./screens/Home";
import ChangePassword from "./screens/ChangePassword";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/changepassword" exact component={ChangePassword} />        
      </Router>
    </div>
  );
}

export default App;
