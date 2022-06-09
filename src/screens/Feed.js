import React from "react";
import { withRouter } from "react-router-dom";
import FeedCapsule from "../components/FeedCapsule";
import Header from "../components/Header";

function Feed(props) {
  return (
    <>
      <Header showLogo showMenuBtn showLoginBtn/>
      <FeedCapsule />
    </>
  );
}

export default withRouter(Feed);
