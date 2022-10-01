import React, { useEffect, useState,useRef } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter ,useParams} from "react-router-dom";
import "./CircleUpdates.css";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import axios from "axios";

const client = new W3CWebSocket('wss://hegemony.donftify.digital:8081');

function CircleDashboard(props) {
  const history = useHistory();
  const inputFileVideo = useRef(null) ;
  const inputFilePhoto = useRef(null) ;
  const [MobilizersCircle,setMobilizersCircle] = useState([]);
  const [mobilizerSelected,setMobilizerSelected] = useState("");
  const [Video,setVideo] = useState({});
  const [Photo,setPhoto] = useState({});
  const [desc,setDesc] = useState("");
  const [TypeMedia,setTypeMedia] = useState("text");
  const { circlename } = useParams();
  const chooseFile = (type) => {
    setTypeMedia(type);
    if (type == "video")
    {
      inputFileVideo.current.click();
    }
    else if (type == "photo")
    {
      inputFilePhoto.current.click();
    }
  }
  const Submit = () => {
        const formData = new FormData()
        let f;
        if (TypeMedia == "video")
        {
          f=Video;
        }
        else if (TypeMedia == "photo")
        {
          f=Photo;
        }
        formData.append('myFile', f);
        formData.append('Description', desc);
        formData.append('mobilizer', mobilizerSelected);
        formData.append('circle', circlename);
        formData.append('typeMedia', TypeMedia);
        
        axios.post("https://hegemony.donftify.digital:8080/uploadUpdatesFile", formData, {
        }).then(res => {
          client.send(JSON.stringify({type:"updatesFeed",data:res.data}));
        })
  }
useEffect(() => {

    axios.get("https://hegemony.donftify.digital:8080/circle/members/"+circlename.replace(":",""))
      .then((res) => {
        console.log(res.data);
        setMobilizersCircle(res.data);
        setMobilizerSelected(res.data[0].Name)
          console.log(res.data);
        });
        
  client.onopen = () => {
    console.log('WebSocket Client Connected');
};

client.onmessage = (message) => {
    console.log(message);
};

},[])
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
                        Mobilizer 1 <small>10h</small>
                      </strong>
                    </div>
                    <div className="mb-05">
                      <span>@mobilizer1</span>
                    </div>
                    <div className="text-xsmall">
                      This is an update about an event. <b>@Circle Event 1</b>{" "}
                      can be tagged to access more details.
                    </div>
                  </div>
                  <div class="card text-white bg-primary mt-2 mb-2">
                    <div class="card-header flex-center">
                      <ion-icon src="assets/img/svg/icon19.svg"></ion-icon>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title blue">Circle Event 1</h5>
                      <p class="card-text blue">
                        Month Day, 0:00 am - Month Day, 0:00 pm CET
                      </p>
                    </div>
                  </div>
                  <div className="flex-row mt-3">
                    <div className="flex-center flex-row">
                      <ion-icon
                        src="assets/img/svg/icon20.svg"
                        style={{ width: "15px", height: "15px" }}
                        class="me-1"
                      ></ion-icon>
                      <span className="me-2">100</span>
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
                        Mobilizer 2 <small>12h</small>
                      </strong>
                    </div>
                    <div className="mb-05">
                      <span>@mobilizer2</span>
                    </div>
                    <div className="text-xsmall">
                      This is a text update with up to 280 characters.
                    </div>
                  </div>
                  <div className="flex-row mt-3">
                    <div className="flex-center flex-row">
                      <ion-icon
                        src="assets/img/svg/icon20.svg"
                        style={{ width: "15px", height: "15px" }}
                        class="me-1"
                      ></ion-icon>
                      <span className="me-2">100</span>
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
                        Mobilizer 3 <small>1d</small>
                      </strong>
                    </div>
                    <div className="mb-05">
                      <span>@mobilizer3</span>
                    </div>
                    <div className="text-xsmall">
                      This is a text update with media, in this case a video.
                    </div>
                  </div>
                  <div className="flex-row mt-3 mb-4">
                    <video playsInline>
                      <source
                        src={"assets/videos/" + "short-video-for-test.mp4"}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="flex-row mt-3 mb-4">
                  
                  <input type='file' id='file' ref={inputFilePhoto} style={{display: 'none'}} onChange={(file) => setPhoto(file.target.files[0])}/>
                  <input type='file' id='file' ref={inputFileVideo} style={{display: 'none'}} onChange={(file) => setVideo(file.target.files[0])}/>
                  <textarea  rows="4" cols="50" value={desc} onChange={(descr) => setDesc(descr.target.value)}>
                    Circle updates ...
                 </textarea>
                  <button onClick={() => chooseFile("photo")}>photo</button>
                  <button onClick={() => chooseFile("video")}>video</button>
                  <select value={mobilizerSelected} onChange={(e) => setMobilizerSelected(e.target.value)}  >
                    {MobilizersCircle.map(mb =>
                      <option key={mb.Name} value={mb.Name}>{mb.Name}</option>
                    )};
                  </select>
                  <button onClick={() => Submit()}>Confirm</button>
                  </div>
                 
                  
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(CircleDashboard);
