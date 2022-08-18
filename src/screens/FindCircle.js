import React from "react";
import { withRouter } from "react-router-dom";
import FindCircle1 from "../components/findCircle/FindCircle1";
import FindCircle2 from "../components/findCircle/FindCircle2";
import FindCircle3 from "../components/findCircle/FindCircle3";
import FindCircle4 from "../components/findCircle/FindCircle4";
import FindCircle5 from "../components/findCircle/FindCircle5";
import "./FindCircle.css";

function FindCircle(props) {
  return (
    <div id="feed" className="container">
      <FindCircle1 />
      <FindCircle2 />
      <FindCircle3 />
      <FindCircle4 />
      <FindCircle5 />
    </div>
  );
}

export default withRouter(FindCircle);
