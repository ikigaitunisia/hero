import React from "react";
import { withRouter } from "react-router-dom";
import CardBottomMenu from "../components/CardBottomMenu";
import CardCapsule from "../components/CardCapsule";
import Header from "../components/Header";

function Card(props) {
  return (
    <>
      <Header showLogo showMenuBtn />
      <CardCapsule />
      <CardBottomMenu />
    </>
  );
}

export default withRouter(Card);
