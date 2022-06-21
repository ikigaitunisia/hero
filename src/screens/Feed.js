import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import FeedCapsule from "../components/FeedCapsule";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";

function Feed(props) {
  const [loggedin, setLogedin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      setLogedin(true);
    }
  }, []);
  return (
    <>
      <Header showLogo showMenuBtn showLoginBtn />
      <FeedCapsule />
      {loggedin && (
        <BottomMenu showFeedBtn showCardBtn showVoteBtn activeItem="feed" />
      )}
    </>
  );
}

export default withRouter(Feed);
