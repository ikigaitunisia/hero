import React from "react";
import { withRouter } from "react-router-dom";
import FeedCapsule from "../components/FeedCapsule";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";

function Feed(props) {
  return (
    <>
      <Header showLogo showMenuBtn showLoginBtn/>
      <FeedCapsule />
      <BottomMenu showFeedBtn showCardBtn showVoteBtn activeItem="feed" />
    </>
  );
}

export default withRouter(Feed);
