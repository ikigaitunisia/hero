import React from "react";
import { withRouter } from "react-router-dom";
import BottomMenu from "../components/CardBottomMenu";
import CustomHeader from "../components/CustomHeader";
import MobilizerProfileCapsule from "../components/MobilizerProfileCapsule";

function MobilizerProfile(props) {
  return (
    <>
      <CustomHeader />
      <MobilizerProfileCapsule />
    </>
  );
}

export default withRouter(MobilizerProfile);