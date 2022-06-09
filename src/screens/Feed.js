import React from "react";
import { withRouter } from "react-router-dom";
import FeedCapsule from "../components/FeedCapsule";
import BottomMenu from "../components/CardBottomMenu";
import CustomHeader from "../components/CustomHeader";

function Feed(props) {
  return (
    <>
      <CustomHeader />
      <FeedCapsule />
    </>
  );
}

export default withRouter(Feed);
