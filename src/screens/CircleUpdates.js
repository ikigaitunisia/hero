import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./CircleUpdates.css";
import TextFeed from './TextFeed';
import VideoFeed from './VideoFeed';
import ImageFeed from './ImageFeed';


import { w3cwebsocket as W3CWebSocket } from "websocket";
import axios from "axios";
const client = new W3CWebSocket('wss://hegemony.donftify.digital:8081');
const user = JSON.parse(localStorage.getItem("user"));

function CircleUpdates(props) {
  const history = useHistory();
  const [feed,setFeed] = useState([]);
  const [feedHtml,setFeedHtml] = useState([]);

  client.onmessage = (message) => {
    console.log(message);
  
};
const like = () => {
  console.log("ok");
}
/*const like = (i,postID) => {
    console.log("llll");
    axios.post("https://hegemony.donftify.digital:8080/supporter/react-post", {type:"LIKE",postId:postID,email:user.Email}, {
    }).then(res => {
      console.log(res.data);
      let k = feed;
      k[i].likes = res.data;
      setFeed(feed);
      client.send(JSON.stringify({type:"updatesLike",data:res.data,postID:postID}));
    })
}*/
useEffect(() => {

  console.log(user);

  client.onopen = () => {
    console.log('WebSocket Client Connected');
};
const addFeed = () => {
     let k = []
     feed.map((item, i) => {
      if (item.typeMedia == "text")
      {
        k.push (
            <TextFeed item={item} key={i} index={i} />
        )
        }
        else if (item.typeMedia == "video")
        {
          k.push (
            <VideoFeed item={item} key={i} index={i}/>
         )
        }
        else if (item.typeMedia == "photo")
        {
          k.push (
            <ImageFeed item={item} key={i} index={i} onPress={like} />
          )
        }
        
      }

  )
  setFeedHtml(k);
  };
  


client.onmessage = (message) => {
    let data = JSON.parse(message.data);
    console.log(data.type);
    if (data.type == "updatesFeed")
    {
      
      let a = feed;
      a.push(data.data);
      setFeed(a);
      console.log(feed);
      addFeed();
    }
};

})
  return (
    <>
      <Header
        showTitlePage
        title={"Circle Updates"}
        showBackBtn
        showMenuBtn
        transparent
        whiteMode
        backTo={"/circle-home"}
      />
      <div id="appCapsule" className="circles-updates">
        <div className="mt-4">
          <ion-icon
            src="assets/img/svg/icon18.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-updates")}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/icon16.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-videos")}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/icon17.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-interactions")}
          ></ion-icon>
        </div>
        <div className="section mt-2">
          <div className="card">
            <ul className="listview flush transparent simple-listview">

             
                <li>
                {feedHtml}
                 
                 
                 </li>
                
             
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(CircleUpdates);
