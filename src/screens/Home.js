import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import HomeCapsule from "../components/HomeCapsule";
import BottomMenu from "../components/BottomMenu";

function Home(props) {
  return (
    <>
      <Header whiteMode showLogo showMenuBtn showLoginBtn/>
      <HomeCapsule />
      <BottomMenu showFeedBtn showCardBtn showVoteBtn activeItem="" />
    </>
  );
}

export default withRouter(Home);
