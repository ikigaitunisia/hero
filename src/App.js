import './App.css';
import Main from './screens/Main'

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

		
        <Route path="/" component={Main} />
           
	  </Router>
  
    </div>
  );
}

export default App;
