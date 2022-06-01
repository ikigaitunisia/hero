import React from "react";
import { withRouter } from "react-router-dom";
import CardBottomMenu from "../components/CardBottomMenu";
import CardCapsule from "../components/CardCapsule";
import CardHeader from "../components/CardHeader";

function Card(props) {
  return (
    <>
      <CardHeader />
      <CardCapsule />
      <CardBottomMenu />
    </>
  );
}

export default withRouter(Card);
