import React from "react";
import { withRouter } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";
import CardTransactionCapsule from "../components/CardTransactionCapsule";
import Header from "../components/Header";

function CardTransaction(props) {
  return (
    <>
      <Header whiteMode showCloseBtn />
      <CardTransactionCapsule />
      <BottomMenu showHomeBtn showCardBtn showVoteBtn activeItem="card"/>
    </>
  );
}

export default withRouter(CardTransaction);
