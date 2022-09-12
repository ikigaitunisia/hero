import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./CircleUpdates.css";
import axios from "axios";

function VideoFeed(props) {
  const history = useHistory();
  const [feed,setFeed] = useState([]);
  const [feedHtml,setFeedHtml] = useState([]);
  const [item,setItem] = useState(props.item);
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
                {item.mobilizer} <small>{item.time}</small>
                </strong>
              </div>
              <div className="mb-05">
                <span>{"@"+item.mobilizer}</span>
              </div>
              <div className="text-xsmall">
                {item.desc}
              </div>
            </div>
            <div className="flex-row mt-3 mb-4">
              <video playsInline>
                <source
                  src={"http://hegemony.donftify.digital/HeroCoin/uploads/"+item.url}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="flex-row mt-3" key={i}>
              <div className="flex-center flex-row" >
              <button onClick={() => like(i,item.id)}></button>

                <ion-icon
                  src="assets/img/svg/icon20.svg"
                  style={{ width: "15px", height: "15px" }}
                  class="me-1"
                  key={i+item.id}
                  onClick={()=>like(i,item.id)}
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
         
        
    </>
  );
}

export default withRouter(VideoFeed);
