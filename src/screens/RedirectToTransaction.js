import React,{useEffect} from "react";
import { withRouter } from "react-router-dom";


useEffect(() => {
  window.open("https://hegemony.donftify.digital:3001/cardtransaction", '_blank', 'noopener,noreferrer');
}, []);

function RedirectToTransaction(props) {
  return (
    <>
     
    </>
  );
}

export default withRouter(RedirectToTransaction);