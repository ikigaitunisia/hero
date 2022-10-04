import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import FindCircle11 from "../components/findCircle/FindCircle11";
import FindCircle2 from "../components/findCircle/FindCircle2";
import FindCircle3 from "../components/findCircle/FindCircle3";
import FindCircle4 from "../components/findCircle/FindCircle4";
import FindCircle5 from "../components/findCircle/FindCircle5";
import "./FindCircle.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { scroller } from "react-scroll";
import { useHistory } from "react-router-dom";

function FindCircle(props) {
  const history = useHistory();
  const to = props.location.state ? props.location.state.to : null;

  useEffect(() => {
    if (to === "3") {
      scroller.scrollTo("findcircle3", {
        duration: 500,
        smooth: true,
        spy: true,
        offset: 0,
      });
      history.replace("", null);
    }
    if (to === "2") {
      scroller.scrollTo("findcircle2", {
        duration: 500,
        smooth: true,
        spy: true,
        offset: 30,
      });
      history.replace("", null);
    }
    if (to === "4") {
      scroller.scrollTo("findCircle4", {
        duration: 500,
        smooth: true,
        spy: true,
        offset: 30,
      });
      history.replace("", null);
    }
    if (to === "5") {
      scroller.scrollTo("findCircle5", {
        duration: 500,
        smooth: true,
        spy: true,
        offset: 30,
      });
      history.replace("", null);
    }
  }, [to]);
  return (
    <InfiniteScroll
      dataLength={5}
      hasMore={true}
      loader={<h4></h4>}
      style={{ overflow: "unset" }}
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
