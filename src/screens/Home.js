import React from "react";
import { withRouter } from "react-router-dom";
import HomeCapsule from "../components/HomeCapsule";
import HomeHeader from "../components/HomeHeader";

function Home(props) {
  return (
    <>
      <HomeHeader />
      <HomeCapsule />
    </>
  );
}

export default withRouter(Home);
