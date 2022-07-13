import React from "react";
import { withRouter } from "react-router-dom";
import ActivistProfileCapsule from "../components/ActivistProfileCapsule";
import Header from "../components/Header";
import ActivistBottomMenu from "../components/ActivistBottomMenu";
import { isMobile } from "react-device-detect";
import ActivistProfileCapsuleDesktop from "../components/desktop/ActivistProfileCapsuleDesktop";

function ActivistProfile(props) {
  return (
    <>
      <Header showLogo showLoginBtn showMenuBtn />
      {isMobile && <ActivistProfileCapsule />}
      {!isMobile && <ActivistProfileCapsuleDesktop />}
      <ActivistBottomMenu
        showFeedBtn
        showCardBtn
        showVoteBtn
        activeItem="feed"
      />
    </>
  );
}

export default withRouter(ActivistProfile);
