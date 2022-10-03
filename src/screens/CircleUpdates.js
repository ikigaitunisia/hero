import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./CircleUpdates.css";
import TextFeed from "./TextFeed";
import VideoFeed from "./VideoFeed";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import axios from "axios";

const client = new W3CWebSocket("wss://hegemony.donftify.digital:8081");

function CircleUpdates(props) {
  const user = JSON.parse(localStorage.getItem("user"));

  const history = useHistory();
  const { circlename } = useParams();
  const [feed, setFeed] = useState([]);
  const [page, setpage] = useState(1);
  const [test, setTest] = useState(1);
  const [feedHtml, setFeedHtml] = useState([]);
  const [MobilizersCircle, setMobilizersCircle] = useState([]);
  const [isLiked, setIsLiked] = useState(true);

  const setMembers = () => {
    axios
      .get(
        "https://hegemony.donftify.digital:8080/circle/members/" +
          circlename.replace(":", "")
      )
      .then((res) => {
        console.log(res.data);
        let k = res.data.sort((a, b) =>
          a.priority.low > b.priority.low ? 1 : -1
        );
        console.log(k);
        setMobilizersCircle((prevState) => {
          return [...k];
        });
      });
  };
  const like = (i, postID) => {
    console.log("llll");
    setIsLiked((current) => !current);
    axios
      .post(
        "https://hegemony.donftify.digital:8080/supporter/react-post",
        { type: "LIKE", postId: postID, email: user.Email },
        {}
      )
      .then((res) => {
        console.log("res.data");
        console.log(res.data);
        let k = feed;
        k[i].likes = res.data[0]._fields[0].properties.likes.low;
        k[i].like = isLiked;
        setFeed(k);
        client.send(
          JSON.stringify({
            type: "updatesLike",
            data: res.data,
            postID: postID,
          })
        );
      });
  };

  const addFeed = () => {
    let k = [];
    console.log(feed);

    console.log(feed[0]);
    feed.map((item, i) => {
      if (item.typeMedia == "text") {
        k.push(
          <li key={i + item.id + "li"}>
            <div
              onClick={() =>
                history.push({
                  pathname:
                    "/mobilizer-profile2:" + circlename.replace(":", ""),
                  state: { index: item.index - 1 },
                })
              }
            >
              <img
                src={"assets/img/" + item.profile}
                alt="image"
                className="imaged w48 rounded"
              />
            </div>
            <div
              className="in"
              style={{ textAlign: "start", marginLeft: "20px" }}
            >
              <div className="blue">
                <div className="">
                  <strong>
                    {" "}
                    {item.mobilizer} <small>{item.time}</small>
                  </strong>
                </div>
                <div className="mb-05">
                  <span>{"@" + item.mobilizer}</span>
                </div>
                <div className="text-xsmall">{item.description}</div>
              </div>
              <div className="flex-row mt-3" key={i}>
                <div className="flex-center flex-row">
                  <ion-icon
                    src={
                      item.like === true
                        ? "assets/img/svg/icon25.svg"
                        : "assets/img/svg/icon20.svg"
                    }
                    style={{ width: "15px", height: "15px" }}
                    class="me-1"
                    onClick={() => like(i, item.id)}
                  ></ion-icon>
                  <span className="me-2">{item.likes}</span>
                </div>
              </div>
            </div>
          </li>
        );
      } else if (item.typeMedia == "photo") {
        console.log("yes");
        k.push(
          <li key={i + item.id + "li"}>
            <div
              onClick={() =>
                history.push({
                  pathname:
                    "/mobilizer-profile2:" + circlename.replace(":", ""),
                  state: { index: item.index - 1 },
                })
              }
            >
              <img
                src={"assets/img/" + item.profile}
                alt="image"
                class="imaged w48 rounded"
              />
            </div>
            <div
              className="in"
              style={{ textAlign: "start", marginLeft: "20px" }}
            >
              <div className="blue">
                <div className="">
                  <strong>
                    {item.mobilizer} <small>{item.time}</small>
                  </strong>
                </div>
                <div className="mb-05">
                  <span>{"@" + item.mobilizer}</span>
                </div>
                <div className="text-xsmall">{item.desc}</div>
              </div>
              <div className="flex-row mt-3 mb-4">
                <img
                  src={
                    "http://hegemony.donftify.digital/HeroCoin/uploads/" +
                    item.url
                  }
                />
              </div>
              <div className="flex-row mt-3" key={i + item.id + "div"}>
                <div
                  className="flex-center flex-row"
                  key={i + item.id + "div1"}
                >
                  <button style={{ zIndex: "999999", border: "2px" }}></button>
                  <ion-icon
                    src="assets/img/svg/icon20.svg"
                    style={{ width: "15px", height: "15px" }}
                    className="me-1"
                    onClick={() => like(i, item.id)}
                  ></ion-icon>
                  <span className="me-2">{item.likes}</span>
                </div>
                <div className="flex-center flex-row">
                  <ion-icon
                    src="assets/img/svg/icon21.svg"
                    style={{ width: "15px", height: "15px" }}
                    class="me-1"
                  ></ion-icon>
                  <span>250</span>
                </div>
              </div>
            </div>
          </li>
        );
      }
    });
    setFeedHtml(k);
  };

  const getFeed = (l) => {
    axios
      .post("https://hegemony.donftify.digital:8080/circle/feed", {
        cercle: circlename.replace(":", ""),
        page: page,
      })
      .then((res) => {
        let k = [];
        for (var t = 0; t < res.data.length; t++) {
          let mobi = l.find(
            (mob) => res.data[t]._fields[0].properties.mobilizer === mob.Name
          );
          console.log(mobi);

          res.data[t]._fields[0].properties.typeMedia =
            res.data[t]._fields[0].properties.type;
          delete res.data[t]._fields[0].properties.type;
          res.data[t]._fields[0].properties.likes =
            res.data[t]._fields[0].properties.likes.low;
          res.data[t]._fields[0].properties.url =
            res.data[t]._fields[0].properties.media;
          delete res.data[t]._fields[0].properties.media;

          res.data[t]._fields[0].properties.index = mobi.priority.low;
          res.data[t]._fields[0].properties.profile = mobi.imgProfil;

          k.push(res.data[t]._fields[0].properties);
        }
        console.log(k);
        setFeed((prevState) => {
          return [...k];
        });
        if (k.toString() !== feed.toString()) {
          setTest(test + 1);
        }
        addFeed();
      });
  };

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };
    axios
      .get(
        "https://hegemony.donftify.digital:8080/circle/members/" +
          circlename.replace(":", "")
      )
      .then((res) => {
        console.log(res.data);
        let k = res.data.sort((a, b) =>
          a.priority.low > b.priority.low ? 1 : -1
        );
        console.log(k);
        setMobilizersCircle((prevState) => {
          return [...k];
        });
        getFeed(res.data);
      });
  }, [test]);

  client.onmessage = (msg) => {
    console.log(msg);
    if (msg !== "something") {
      let message = JSON.parse(JSON.parse(msg.data));
      console.log(message);

      console.log(message.type);
      let data = message;
      if (data.type == "updatesFeed") {
        let a = feed;
        a.push(data.data);
        setFeed(a);
        console.log(feed);
        addFeed();
      }
      if (data.type == "updatesLike") {
        let a = feed;

        console.log("message");
        console.log(data.data[0]._fields[0].properties.likes.low);
        for (var i = 0; i <= a.length - 1; i++) {
          console.log("feed");
          console.log(a[i]);
          if (a[i].id == data.postID) {
            a[i].likes = data.data[0]._fields[0].properties.likes.low;
          }
        }
        console.log(a);
        setFeed(a);
        addFeed();
      }
    }
  };

  return (
    <>
      <Header
        showTitlePage
        title={"Circle Updates"}
        showBackBtn
        showMenuBtn
        transparent
        whiteMode
        backTo={"/circle-home" + circlename}
      />
      <div id="appCapsule" className="circles-updates">
        <div className="mt-4">
          <ion-icon
            src="assets/img/svg/icon18.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-updates" + circlename)}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/icon16.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-videos" + circlename)}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/icon17.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-interactions" + circlename)}
          ></ion-icon>
        </div>
        <div className="section mt-2">
          <div className="card">
            <ul className="listview flush transparent simple-listview">
              {feedHtml}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(CircleUpdates);
