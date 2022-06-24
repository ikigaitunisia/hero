import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";




function RedirectToTransaction(props) {
  useEffect(() => {
    window.addEventListener("beforeunload", (ev) => 
{  
    ev.preventDefault();
    window.open("https://hegemony.donftify.digital:3001/cardtransaction", '_blank', 'noopener,noreferrer');
  });
  }, []);
  return (
    <>
     
    </>
  );
}

export default withRouter(RedirectToTransaction);