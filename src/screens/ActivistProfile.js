import React from "react";
import { withRouter } from "react-router-dom";
import ActivistProfileCapsule from "../components/ActivistProfileCapsule";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";
import ActivistBottomMenu from "../components/ActivistBottomMenu";

function ActivistProfile(props) {
  return (
    <>
      <Header showLogo showLoginBtn showMenuBtn />
      <ActivistProfileCapsule />
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
