import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";




function RedirectToTransaction(props) {
  useEffect(() => {
    const newWindow = window.open("https://hegemony.donftify.digital:3001/cardtransaction", '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
  }, []);
  return (
    <>
     
    </>
  );
}

export default withRouter(RedirectToTransaction);