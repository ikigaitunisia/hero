import React from "react";
import { withRouter } from "react-router-dom";
import ListOfActivists from "../components/ListOfActivists";
import BottomMenu from "../components/BottomMenu";
import Header from "../components/Header";

function ActivistProfile(props) {
  return (
    <>
      <Header showLogo showLoginBtn showMenuBtn/>
      <ListOfActivists />
      <BottomMenu showFeedBtn showCardBtn showVoteBtn activeItem="card" />
    </>
  );
}

export default withRouter(ActivistProfile);
