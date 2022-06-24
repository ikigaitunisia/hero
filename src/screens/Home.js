import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import HomeCapsule from "../components/HomeCapsule";
import BottomMenu from "../components/BottomMenu";
import { isMobile } from "react-device-detect";
import HomeCapsuleDesktop from "../components/desktop/HomeCapsuleDesktop";

function Home(props) {
  return (
    <>
      <Header whiteMode showLogo showMenuBtn showLoginBtn />
      {isMobile && <HomeCapsule />}
      {!isMobile && <HomeCapsuleDesktop />}
      <BottomMenu showFeedBtn showCardBtn showVoteBtn activeItem="" />
    </>
  );
}

export default withRouter(Home);
