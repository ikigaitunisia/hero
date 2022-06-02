import React from "react";
import { withRouter } from "react-router-dom";
import ActivistProfileCapsule from "../components/ActivistProfileCapsule";
import BottomMenu from "../components/CardBottomMenu";
import Header from "../components/Header";

function ActivistProfile(props) {
  return (
    <>
      <Header />
      <ActivistProfileCapsule />
      <BottomMenu />
    </>
  );
}

export default withRouter(ActivistProfile);
