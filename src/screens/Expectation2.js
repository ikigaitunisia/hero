import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Expectation2Capsule from "../components/Expectation2Capsule";

function Expectation2(props) {
  return (
    <>
      <Header showLogo />
      <Expectation2Capsule />
    </>
  );
}

export default withRouter(Expectation2);
