import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./CircleUpdates.css";
import axios from "axios";

function TextFeed(props) {
  const history = useHistory();
  const [item,setItem] = useState(props.item);
  const [feed,setFeed] = useState([]);
  const [feedHtml,setFeedHtml] = useState([]);
  const [i,setI] = useState(props.index);
  
const like = (i,postID) => {
    /*console.log("llll");
    axios.post("https://hegemony.donftify.digital:8080/supporter/react-post", {type:"LIKE",postId:postID,email:user.Email}, {
    }).then(res => {
      console.log(res.data);
      let k = feed;
      k[i].likes = res.data;
      setFeed(feed);
    })*/
    console.log("ok");
}
useEffect(() => {

  
  



})
  return (
    <>
          <li>
          <div>
            <img
              src="assets/img/sample/photo/1.jpg"
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
                UK Climate Justice Circle
                </strong>
              </div>
              <div className="mb-05">
                <span>@UK Climate Justice Circle</span>
              </div>
              <div className="text-xsmall">
              Welcome to the Circle. We are thrilled to have you amongst our supporters. Stay tuned for updates about the projects we are working on

              </div>
            </div>
            <div className="flex-row mt-3" key={i}>
              <div className="flex-center flex-row" >
                <button onClick={() => console.log("ok")}></button>
                <ion-icon
                  src="assets/img/svg/icon20.svg"
                  style={{ width: "15px", height: "15px" }}
                  class="me-1"
                ></ion-icon>
                <span className="me-2">0</span>
              </div>
              <div className="flex-center flex-row">
                <ion-icon
                  src="assets/img/svg/icon21.svg"
                  style={{ width: "15px", height: "15px" }}
                  class="me-1"
                ></ion-icon>
                <span>0</span>
              </div>
            </div>
          </div>
          </li>
        
    </>
  );
}

export default withRouter(TextFeed);
