import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

function ActivistBottomMenu(props) {
  const history = useHistory();
  const showFeedBtn = props.showFeedBtn;
  const showCardBtn = props.showCardBtn;
  const showVoteBtn = props.showVoteBtn;
  const activeItem = props.activeItem;
  const A = useLocation();
  const [loggedin, setLogedin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      setLogedin(true);
    }
  }, []);
  const goNext = () => {
    if (A.state.index + 1 == A.state.indexMax) {
      console.log(A.state.index + 1);

      axios
        .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
          ID: 1,
        })
        .then(function (response) {
          console.log(response.data);
          history.push("/activistprofile", {
            ...response.data,
            indexMax: A.state.indexMax,
          });
          window.location.reload(false);
        })
        .catch(function (error) {
          //handle error here
          console.log(error);
        });
    } else {
      axios
        .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
          ID: A.state.index + 1,
        })
        .then(function (response) {
          console.log(response.data);
          history.push("/activistprofile", {
            ...response.data,
            indexMax: A.state.indexMax,
          });
          window.location.reload(false);
        })
        .catch(function (error) {
          //handle error here
          console.log(error);
        });
    }
  };
  const goBack = () => {
    if (A.state.index - 1 == 0) {
      axios
        .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
          ID: A.state.indexMax - 1,
        })
        .then(function (response) {
          console.log(response.data);
          history.push("/activistprofile", {
            ...response.data,
            indexMax: A.state.indexMax,
          });
          window.location.reload(false);
        })
        .catch(function (error) {
          //handle error here
          console.log(error);
        });
    } else {
      axios
        .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
          ID: A.state.index - 1,
        })
        .then(function (response) {
          console.log(response.data);
          history.push("/activistprofile", {
            ...response.data,
            indexMax: A.state.indexMax,
          });
          window.location.reload(false);
        })
        .catch(function (error) {
          //handle error here
          console.log(error);
        });
    }
  };
  return (
    <div
      className="appBottomMenu"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="next-previous">
        <a className="item" onClick={() => goBack()}>
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <ion-icon
              src="assets/img/svg/previous.svg"
              style={{ margin: 0 }}
            ></ion-icon>

            <strong
              style={{
                color: "blue",
                marginLeft: "10px",
                fontSize: "14px",
                marginTop: 0,
              }}
              className="title-font"
            >
              Previous mobilizer
            </strong>
          </div>
        </a>

        <a className="item" onClick={() => goNext()}>
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <strong
              style={{
                color: "blue",
                marginRight: "10px",
                fontSize: "14px",
                marginTop: 0,
              }}
              className="title-font"
            >
              Next mobilizer
            </strong>
            <ion-icon
              src="assets/img/svg/next.svg"
              style={{ margin: 0 }}
            ></ion-icon>
          </div>
        </a>
      </div>
      {loggedin && (
        <div style={{ display: "flex", width: "100%" }}>
          {showFeedBtn && (
            <a
              href=""
              className={"item " + (activeItem === "feed" ? "active" : "")}
              onClick={() => history.push("/feed")}
            >
              <div className="col">
                <ion-icon
                  src={
                    activeItem === "feed"
                      ? "assets/img/svg/feedFill.svg"
                      : "assets/img/svg/feed.svg"
                  }
                ></ion-icon>
              </div>
            </a>
          )}
          {showCardBtn && (
            <a
              href=""
              className={"item " + (activeItem === "card" ? "active" : "")}
              onClick={() => history.push("/card")}
            >
              <div className="col">
                <ion-icon
                  src={
                    activeItem === "card"
                      ? "assets/img/svg/transactionFill.svg"
                      : "assets/img/svg/transaction.svg"
                  }
                  style={{ color: "bule" }}
                ></ion-icon>
              </div>
            </a>
          )}
          {showVoteBtn && (
            <a
              href=""
              className={"item " + (activeItem === "vote" ? "active" : "")}
              onClick={() => history.push("/vote")}
            >
              <div className="col">
                <ion-icon
                  src={
                    activeItem === "vote"
                      ? "assets/img/svg/voteFill.svg"
                      : "assets/img/svg/vote.svg"
                  }
                ></ion-icon>
              </div>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default withRouter(ActivistBottomMenu);
