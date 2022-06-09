import React from "react";
import { withRouter } from "react-router-dom";
import CardBottomMenu from "../components/CardBottomMenu";
import CardTransactionCapsule from "../components/CardTransactionCapsule";
import CardTransactionHeader from "../components/CardTranscationHeader";

function CardTransaction(props) {
  return (
    <>
    <CardTransactionHeader/>
      <CardTransactionCapsule />
      <CardBottomMenu />
    </>
  );
}

export default withRouter(CardTransaction);