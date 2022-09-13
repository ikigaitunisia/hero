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
import CircleFeed from "./screens/CircleFeed";
import CircleFeedDetails from "./screens/CircleFeedDetails";
import CircleHome from "./screens/CircleHome";
import MobilizerProfile from "./screens/MobilizerProfile";
import CircleUpdates from "./screens/CircleUpdates";
import CircleVideos from "./screens/CircleVideos";
import CircleInteractions from "./screens/CircleInteractions";
import CircleDashboard from "./screens/CircleDashboard";
import HeroTeam from "./screens/HeroTeam";
import Echo from "./screens/Echo";
import AccountInformation from "./screens/AccountInformation";
import EditPassword from "./screens/EditPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/search-filters" exact component={SearchFilters} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/mobilizer-feed" exact component={MobilizerFeed} />
        <Route path="/mobilizer-profile" exact component={ActivistProfile} />
        <Route path="/african-leaders-circle-profile" exact component={AfricanLeadersCircleProfile} />
        <Route path="/changepassword" exact component={ChangePassword} />        
        <Route path="/supporters" exact component={ListSupporter} />    
        <Route path="/mobilizers" exact component={ListMobilizer} />   
        <Route path="/" exact component={FindCircle} />   
        <Route path="/circle-feed" exact component={CircleFeed} />   
        <Route path="/circle-feed-details:circlename" exact component={CircleFeedDetails} />   
        <Route path="/circle-home" exact component={CircleHome} />   
        <Route path="/mobilizer-profile2" exact component={MobilizerProfile} />   
        <Route path="/circle-updates" exact component={CircleUpdates} />   
        <Route path="/circle-videos" exact component={CircleVideos} />   
        <Route path="/circle-interactions" exact component={CircleInteractions} />   
        <Route path="/CircleDashboard:circlename" exact component={CircleDashboard} /> 
        <Route path="/hero-team" exact component={HeroTeam} />   
        <Route path="/echo" exact component={Echo} />   
        <Route path="/account-information" exact component={AccountInformation} />   
        <Route path="/edit-password" exact component={EditPassword} />   
      </Router>
    </div>
  );
}

export default App;
