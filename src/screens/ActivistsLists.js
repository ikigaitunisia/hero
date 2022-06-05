import React from "react";
import { withRouter } from "react-router-dom";
import ListOfActivists from "../components/ListOfActivists";
import BottomMenu from "../components/CardBottomMenu";
import Header from "../components/Header";

function ActivistProfile(props) {
  return (
    <>
      <Header />
      <ListOfActivists />
      <BottomMenu />
    </>
  );
}

export default withRouter(ActivistProfile);
