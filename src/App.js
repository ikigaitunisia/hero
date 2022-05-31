import './App.css';
import Main from './screens/Main'
import Login from './screens/Login'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
	  <Router>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />  
	  </Router>
  
    </div>
  );
}

export default App;
