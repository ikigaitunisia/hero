import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./components/common.css";
import Login from "./screens/Login";
import Home from "./screens/Home";
import ChangePassword from "./screens/ChangePassword";
import SearchFilters from "./screens/SearchFilters";
import Feed from "./screens/Feed";
import ActivistProfile from "./screens/ActivistProfile";
import AfricanLeadersCircleProfile from "./screens/AfricanLeadersCircleProfile";
import MobilizerFeed from "./screens/MobilizerFeed";
import Notion from "./screens/Notion";
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
import Subscriptions from "./screens/Subscriptions";
import WelcomeCircles from "./screens/WelcomeCircles";
import Login1 from "./screens/Login1";
import SubscriptionsAndPricing from "./screens/SubscriptionsAndPricing";
import Login2 from './screens/Login2'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" exact component={Home} />
        <Route path="/search-filters" exact component={SearchFilters} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/mobilizer-feed" exact component={MobilizerFeed} />
        <Route path="/mobilizer-profile" exact component={ActivistProfile} />


        <Route
          path="/african-leaders-circle-profile"
          exact
          component={AfricanLeadersCircleProfile}
        />
        <Route path="/changepassword" exact component={ChangePassword} />
        <Route path="/supporters" exact component={ListSupporter} />
        <Route path="/mobilizers" exact component={ListMobilizer} />
        <Route path="/" exact component={FindCircle} />
        <Route path="/circle-feed" exact component={CircleFeed} />
        <Route path="/Notion" exact component={Notion} />
        <Route
          path="/circle-feed-details:circlename"
          exact
          component={CircleFeedDetails}
        />
        <Route path="/circle-home:circlename" exact component={CircleHome} />
        <Route
          path="/mobilizer-profile2:circlename"
          exact
          component={MobilizerProfile}
        />
        <Route path="/circle-updates:circlename" exact component={CircleUpdates} />
        <Route path="/circle-videos:circlename" exact component={CircleVideos} />
        <Route
          path="/circle-interactions:circlename"
          exact
          component={CircleInteractions}
        />
        <Route
          path="/CircleDashboard:circlename"
          exact
          component={CircleDashboard}
        />
        <Route path="/hero-team" exact component={HeroTeam} />
        <Route path="/echo:circlename" exact component={Echo} />
        <Route
          path="/account-information"
          exact
          component={AccountInformation}
        />
        <Route path="/edit-password" exact component={EditPassword} />
        <Route
          path="/welcome-circle:circlename"
          exact
          component={WelcomeCircles}
        />

        <Route path="/subscriptions" exact component={Subscriptions} />
        <Route path="/login1" exact component={Login1} />
        <Route path="/login" exact component={Login2}/>
        <Route
          path="/subscriptions-and-pricing"
          exact
          component={SubscriptionsAndPricing}
        />
      </Router>
    </div>
  );
}

export default App;
