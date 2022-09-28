import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./CircleHome.css";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import axios from "axios";
function CircleHome(props) {
  const [load,setLoad] = useState(false);

  const [test,setTest] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCircle, setCurrentCircle] = useState({});
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  const { circlename } = useParams();
  const [ circles , setCircles] = useState([]);

  /*const circles = [
    {
      id: "1",
      name: "Hero UK Climate Justice Circle",
      description:
        "A future without fossil fuels and associated injustices",
    },
   
  ];*/
  const goToNextCircle = () => {
    if (currentIndex === 2) {
      setCurrentIndex(0);
      setCurrentCircle(circles[0]);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  useEffect( () => {
    
    if (user != null) {
    
      axios
        .post("https://hegemony.donftify.digital:8080/supporter/get-subscriptions", {
          email: user.Email,
        })
        .then((response)=> {
         
          if (response.data.length == 1) {
            let A = [];
            response.data.map((item, i) => {
              A.push(item);
            });
            console.log(A);
            setCurrentCircle(A[currentIndex]);
            setLoad(true);
            setCircles(prevState => {
              return (
                
                [...A]
              );
            });

            if (A.toString() !== circles.toString())
            {
            setTest(test+1);
            }
            
            return ;
         
          } else {
            history.push("/circle-feed");
            console.log(user.Email);
            console.log(circlename);
            return;
          }

        })
        .catch((error) =>{
          //handle error here
          console.log(error);
        });
    }
    setCurrentCircle(circles[currentIndex]);
    console.log(circles);
  }, [test]);
  return (
    
    <>
     {load &&
     <>
      <Header
        showTitlePage
        title={currentCircle.grName.replace("Hero","")}
        showBackBtn
        showMenuBtn
        backTo={"/welcome-circle:" + circlename.replace(":", "")}
      />
     
      <div id="appCapsule" className="circle-home pt-0">
        <div id="bg-img" className="flex-center">
          {/*<img
                src="assets/img/image9.png"
                alt="image"
                className="imaged w100 mt-4"
              />*/}
        </div>
        <div class="card mb-3 ml-3 me-3">
          <div
            className="custom-div-header"
            onClick={() => history.push("/echo:" + circlename.replace(":", ""))}
          >
            <h5>
              <b>Echo this circle,</b>
              <br />
              <span>invite your friends to join!</span>
            </h5>
          </div>
          <div class="card-body flex-center flex-col mt-3">
            <h4 className="blue">Circle’s Objective</h4>
            <p className="m-0">{currentCircle.grDescription}</p>
            <hr className="hr mt-4 mb-4" />
            <div className="flex-center flex-row">
              <div
                className="flex-center flex-col me-2"
                onClick={() => history.push("/mobilizer-profile2:"+ circlename.replace(":", ""))}
              >
                <ion-icon
                  src="assets/img/svg/icon10.svg"
                  class="mb-2"
                ></ion-icon>
                <span className="icon-title">Mobilizers</span>
              </div>
              <div
                className="flex-center flex-col me-2"
                onClick={() => history.push("/circle-updates:"+ circlename.replace(":", ""))}
              >
                <ion-icon
                  src="assets/img/svg/icon12.svg"
                  class="mb-2"
                ></ion-icon>
                <span className="icon-title">Updates</span>
              </div>
              <div
                className="flex-center flex-col me-2"
                onClick={() => history.push("/circle-videos" + circlename)}
              >
                <ion-icon
                  src="assets/img/svg/icon8.svg"
                  class="mb-2"
                ></ion-icon>
                <span className="icon-title">Videos</span>
              </div>
              <div
                className="flex-center flex-col"
                onClick={() => history.push("/circle-interactions" + circlename)}
              >
                <ion-icon
                  src="assets/img/svg/icon9.svg"
                  class="mb-2"
                ></ion-icon>
                <span className="icon-title">Interactions</span>
              </div>
            </div>
            <hr className="hr mt-4 mb-4" />
            <h5>Memberships</h5>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h6>200 memberships left to complete this circle</h6>
            <div className="me-4 ml-4 mb-0">
              <img
                src="assets/img/sample/photo/1.jpg"
                alt="image"
                className="imaged w48 rounded m-2"
              />
              <img
                src="assets/img/sample/photo/1.jpg"
                alt="image"
                className="imaged w48 rounded m-2"
              />
              <img
                src="assets/img/sample/photo/1.jpg"
                alt="image"
                className="imaged w48 rounded m-2"
              />
            </div>
            <span id="list-supporters">
              <b>Marc, Fabiola,Max </b>
              <br /> recently joined this circle.
            </span>
            <hr className="hr mt-4 mb-4" />
            <h6 id="bottom-text">
              Swipe right to move between circles you support
            </h6>
          </div>
        </div>
        {/*
        <div className="circle-feed-bottom mb-4">
          <div style={{ display: "flex" }}>
            <div
              className={currentIndex === 0 ? "active-dot me-1" : "dot me-1"}
            ></div>
           
          </div>
          {
            <button
              type="button"
              className="btn btn-icon rounded btn-primary social-btn"
              onClick={goToNextCircle}
            >
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          }
        </div>
        */}
      </div>
      </>
}
    </>
      
  );
}

export default withRouter(CircleHome);
