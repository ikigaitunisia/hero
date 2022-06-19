import React from "react";
import { withRouter } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";
import CardTransactionCapsule2 from "../components/CardTransactionCapsule1";
import Header from "../components/Header";

function CardTransaction(props) {
  return (
    <>
      <Header whiteMode showCloseBtn />
      <CardTransactionCapsule2 />
      <BottomMenu showFeedBtn showCardBtn showVoteBtn activeItem="card"/>
    </>
  );
}

export default withRouter(CardTransaction);
