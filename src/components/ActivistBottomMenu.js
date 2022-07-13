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
    <div className="appBottomMenu center-content">
      <div className="next-previous">
        <a className="item" onClick={() => goBack()}>
          <div className="col flex-start">
            <ion-icon src="assets/img/svg/previous.svg" class="m-0"></ion-icon>

            <strong className="title-font mt-0 blue-text fs-14 ml-2">
              Previous mobilizer
            </strong>
          </div>
        </a>

        <a className="item" onClick={() => goNext()}>
          <div className="col flex-end">
            <strong className="title-font mt-0 blue-text fs-14 me-2">
              Next mobilizer
            </strong>
            <ion-icon src="assets/img/svg/next.svg" class="m-0"></ion-icon>
          </div>
        </a>
      </div>
      {loggedin && (
        <div className="flex full-width">
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
