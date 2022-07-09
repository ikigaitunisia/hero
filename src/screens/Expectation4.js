import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Expectation4Capsule from "../components/Expectation4Capsule";

function Expectation4(props) {
  return (
    <>
      <Header showLogo />
      <Expectation4Capsule />
    </>
  );
}

export default withRouter(Expectation4);
