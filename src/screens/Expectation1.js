import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Expectation1Capsule from "../components/Expectation1Capsule";

function Expectation1(props) {
  return (
    <>
      <Header whiteMode showLogo />
      <Expectation1Capsule />
    </>
  );
}

export default withRouter(Expectation1);
