import React from "react";
import { withRouter } from "react-router-dom";
import ActivistProfileCapsule from "../components/ActivistProfileCapsule";
import Header from "../components/Header";

function ActivistProfile(props) {
  return (
    <>
      <Header showLogo showLoginBtn showMenuBtn/>
      <ActivistProfileCapsule />
    </>
  );
}

export default withRouter(ActivistProfile);
