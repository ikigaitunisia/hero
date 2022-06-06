import React from "react";
import { withRouter } from "react-router-dom";
import FeedCapsule from "../components/FeedCapsule";
import BottomMenu from "../components/CardBottomMenu";
import Header from "../components/Header";

function Feed(props) {
  return (
    <>
      <Header />
      <FeedCapsule />
      <BottomMenu />
    </>
  );
}

export default withRouter(Feed);
