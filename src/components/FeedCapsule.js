import React,{useState,useEffect} from "react";
import axios from "axios";
import "./FeedCapsule.css";

function FeedCapsule(props) {
  const width = window.innerWidth;
  const history = useHistory();
  const [Info,setInfo] = useState({});
  const [Index,setIndex] = useState(0);
  const [Activist,setActivist] = useState([]);
  useEffect(() => {
    
    axios
    .post("https://hegemony.donftify.digital:8080/GetIndexActiv", {
      ID: id
    })
    .then(function (response) {
      console.log(response.data);
      setIndex(response.data.index);
    })
    .catch(function (error) {
        //handle error here
        console.log(error);
    }); 
    for (var i=0;i<=Index;i++)
    {
    axios
    .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
      ID: i
    })
    .then(function (response) {
      console.log(response.data);

      setActivist([...Activist,response.data]);
    })
    .catch(function (error) {
        //handle error here
        console.log(error);
    }); 
  }

  }, []);
  return (
    <div id="appCapsule">
      <div className="section wallet-card-section pt-1">
        <div className="wallet-card">
          <div className="custom-font center-div">
            <h1 className="blue-text title-sm">
              Your investment has global impact.
            </h1>
            <hr data-content="AND" class="hr-text"></hr>
            <p className="black-text">
              By investing in the <b>HERO Coin</b> you contribute to providing a
              Universal <b>Basic Income</b> for a year to a verified{" "}
              <b>mobilizer</b> of your choice with a track record of
              accelerating climate action.
            </p>
            <p className="black-text">
              This will allow the mobilizer to <b>dedicate full time</b> to
              their climate work and persue global policies to keep the{" "}
              <b>world’s temperature below 1.5 degrees</b>, the minimum required
              for all of us to live in an habitable world.
            </p>
          </div>
        </div>
      </div>
      <div className="center-content">
        <ion-icon
          class="hero-mobilizers-logo"
          src="assets/img/svg/heroMobilizers.svg"
        ></ion-icon>
      </div>
      <div className="section mb-2">
        <div className="row mt-2">
          {/**<div className="col-12">
            <div className="stat-box box-bg">
              <div className="custom-font">
                <h1 className="white-text">Anuna de Wever</h1>
                <span className="white-text">Belgium</span>
              </div>
              <div className="btn-section">
                <button type="button" class="btn btn-primary rounded shadowed">
                  See Profile
                </button>
                <button type="button" class="btn btn-primary rounded shadowed">
                  Support
                </button>
              </div>
            </div>
          </div>**/}
          {
          Activist.map((activist) => (
          <>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-2" >
            <div className="card bg-dark text-white">
              <img
                className="card-img"
                src="assets/img/bg1.png"
                alt="Card image"
              />
              <div className="card-img-overlay center-column-content">
                <div className="custom-font">
                  <h1 className="white-text">Anuna de Wever</h1>
                  <span className="white-text">Belgium</span>
                </div>
                <div className="btn-section">
                  <button
                    type="button"
                    class="btn btn-primary rounded shadowed"
                    onClick={() => history.push("/activistprofile",activist)}
                  >
                    See Profile
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary rounded shadowed"
                  >
                    Support
                  </button>
                </div>
              </div>
            </div>
          </div>
         
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-2">
            <div className="card bg-dark text-white">
              <img
                className="card-img"
                src="assets/img/bg1.png"
                alt="Card image"
              />
              <div className="card-img-overlay center-column-content">
                <div className="custom-font">
                  <h1 className="white-text">Anuna de Wever</h1>
                  <span className="white-text">Belgium</span>
                </div>
                <div className="btn-section">
                  <button
                    type="button"
                    class={"btn btn-primary rounded shadowed"}
                    onClick={() => history.push("/activistprofile",activist)}

                  >
                    See Profile
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary rounded shadowed"
                  >
                    Support
                  </button>
                </div>
              </div>
            </div>
          </div>
          </>
           ))
          }
        </div>
      </div>
    </div>
  );
}

export default FeedCapsule;
