import "./App.css";
import Main from "./screens/Main";
import Login from "./screens/Login";
import Card from "./screens/Card";
import ActivistProfile from "./screens/ActivistProfile";
import Home from "./screens/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/card" exact component={Card} />
        <Route path="/activistprofile" exact component={ActivistProfile} />
        <Route path="/home" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
