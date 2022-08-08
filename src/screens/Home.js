import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";

function Home(props) {
  return (
    <>
      <Header whiteMode showLogo showMenuBtn showLoginBtn />
      <BottomMenu showFeedBtn showCardBtn showVoteBtn activeItem="" />
    </>
  );
}

export default withRouter(Home);
