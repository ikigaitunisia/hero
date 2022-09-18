import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import FindCircle11 from "../components/findCircle/FindCircle11";
import FindCircle2 from "../components/findCircle/FindCircle2";
import FindCircle3 from "../components/findCircle/FindCircle3";
import FindCircle4 from "../components/findCircle/FindCircle4";
import FindCircle5 from "../components/findCircle/FindCircle5";
import "./FindCircle.css";
import InfiniteScroll from "react-infinite-scroll-component";

function FindCircle(props) {
  return (
    <InfiniteScroll
      dataLength={5} //This is important field to render the next data
      hasMore={true}
      loader={<h4></h4>}
    >
      <FindCircle11 />
      <FindCircle2 />
      <FindCircle3 />
      <FindCircle4 />
      <FindCircle5 />
    </InfiniteScroll>
  );
}

export default withRouter(FindCircle);
