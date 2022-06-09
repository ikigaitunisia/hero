import React from "react";
import { withRouter } from "react-router-dom";
import ActivistProfileCapsule from "../components/ActivistProfileCapsule";
import CustomHeader from "../components/CustomHeader";

function ActivistProfile(props) {
  return (
    <>
      <CustomHeader />
      <ActivistProfileCapsule />
    </>
  );
}

export default withRouter(ActivistProfile);
