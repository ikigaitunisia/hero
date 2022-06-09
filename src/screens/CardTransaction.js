import React from "react";
import { withRouter } from "react-router-dom";
import CardBottomMenu from "../components/CardBottomMenu";
import CardTransactionCapsule from "../components/CardTransactionCapsule";
import Header from "../components/Header";

function CardTransaction(props) {
  return (
    <>
      <Header whiteMode showCloseBtn />
      <CardTransactionCapsule />
      <CardBottomMenu />
    </>
  );
}

export default withRouter(CardTransaction);
