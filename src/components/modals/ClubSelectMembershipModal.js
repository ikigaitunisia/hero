import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import "./ClubSelectMembershipModal.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import WelcomeCirclesModal from "./WelcomeCirclesModal";

function ClubSelectMembershipModal(props) {
  const history = useHistory();
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("clubSelectMembership"), {
        keyboard: false,
      });
      if (modal) {
        modal.show();
      }
    }

    return () => {
      props.onClose();
      setShowForm(false);
      setShowForm1(false);
      setShowWelcomeToClub(false);
      setShowAmountSelect(true);
      setAmount(null);
    };
  }, [props.show]);
  const [showAmountSelect, setShowAmountSelect] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [showWelcomeToClub, setShowWelcomeToClub] = useState(false);
  const [amount, setAmount] = useState(null);

  const [HeroId, setHeroId] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")));
 
  const chooseAmount = (a) => {
    if (amount) {
      setAmount(null);
      return;
    }
    setAmount(a);
    if (a === 10) {
      return;
    }
    if (a === 20) {
      return;
    }
    if (a === 50) {
      return;
    }
  };

  const confirmAmount = () => {
    if (!amount) {
      return;
    }
    setShowAmountSelect(false);
    //setShowForm(true);
    setShowForm1(true);
  };
  const createAccount = async() => {
    const response = await axios
        .post("https://hegemony.donftify.digital:8080/CreateWallet/", {
          Email: email,
          password: password,
          googleId: "",
          imageUrl:"",
          name:"",
          lastname:"",
          HeroId:HeroId
        })
       
          console.log(response.data);
          localStorage.setItem(
            "user",
            JSON.stringify({ Email: email, wallet: response.data })
          );
          return { Email: email, wallet: response.data };
        
       
  }
  const validate = async() => {
    let a = JSON.parse(localStorage.getItem("user"));
    if (a == null)
    { 
      a= await createAccount();

    }

       console.log(a);
      const customerId = a.wallet.customerId;
      console.log( {
        mode: "subscription",
        grName: props.circle,
        amount: amount * 100,
        customerId: customerId,
      });
      axios
        .post(`https://hegemony.donftify.digital:8080/create-checkout`, {
          mode: "subscription",
          grName: props.circle,
          amount: amount * 100,
          customerId: customerId,
        })
        .then((res) => {
          console.log(res.data);
          window.location.href = res.data.url;
        })
        .catch((err) => {
          console.log(err);
        });
    

  };

  return (
    <>
      <div
        className="modal fade modalbox clubSelectMembership"
        id="clubSelectMembership"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div
            className={
              !showForm1
                ? "modal-content modal-content-custom"
                : "modal-content modal-content-custom-white"
            }
          >
            <div
              className="modal-header"
              style={{
                justifyContent: "flex-end",
                border: "unset",
                background: "transparent",
              }}
            >
              <a href="#" data-bs-dismiss="modal">
                <ion-icon
                  name="close"
                  style={!showForm1 ? { color: "white" } : { color: "blue" }}
                ></ion-icon>
              </a>
            </div>
            {showAmountSelect && !showForm && !showWelcomeToClub && !showForm1 && (
              <div className="modal-body">
                <img src={"assets/img/logo2.png"} alt="logo" className="logo" />
                <p className="header-text mt-4 white">
                  Choose your HERO Circle
                  <br /> Membership
                </p>
                <div className="button-wrapper mt-4">
                  <button
                    type="button"
                    className={
                      amount === 10
                        ? "btn btn-outline-primary custom-btn-white me-1 mb-1"
                        : "btn btn-outline-primary custom-btn me-1 mb-1"
                    }
                    onClick={() => chooseAmount(10)}
                  >
                    <sup>€</sup>10<span>/mo</span>
                  </button>
                  <span className="mt-1">HERO Starter</span>
                  <a href="" className="mt-1">
                    Click here to see what’s included.
                  </a>
                </div>
                <div className="button-wrapper mt-4">
                  <button
                    type="button"
                    className={
                      amount === 20
                        ? "btn btn-outline-primary custom-btn-white me-1 mb-1"
                        : "btn btn-outline-primary custom-btn me-1 mb-1"
                    }
                    onClick={() => chooseAmount(20)}
                  >
                    <sup>€</sup>20<span>/mo</span>
                  </button>
                  <span className="mt-1">HERO Supporter</span>
                  <a href="" className="mt-1">
                    Click here to see what’s included.
                  </a>
                </div>
                <div className="button-wrapper mt-4">
                  <button
                    type="button"
                    className={
                      amount === 50
                        ? "btn btn-outline-primary custom-btn-white me-1 mb-1"
                        : "btn btn-outline-primary custom-btn me-1 mb-1"
                    }
                    onClick={() => chooseAmount(50)}
                  >
                    <sup>€</sup>50<span>/mo</span>
                  </button>
                  <span className="mt-1">HERO Changer</span>
                  <a href="" className="mt-1">
                    Click here to see what’s included.
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary submit-btn-rounded me-1 mb-1 mt-4"
                  onClick={confirmAmount}
                >
                  <ion-icon
                    src="assets/img/svg/next.svg"
                    style={{ color: "blue" }}
                  ></ion-icon>
                </button>
              </div>
            )}
            { /*showForm && !showWelcomeToClub && (
              <div id="form" className="modal-body">
                <img
                  src={"assets/img/heroLogo.png"}
                  alt="logo"
                  className="logo"
                />
                <p className="header-text mt-4 mb-1">Action is your power!</p>
                <p>
                  Please leave us your details so that we
                  <br />
                  can send you a link for our launch!*
                </p>
                <div className="section">
                  <form id="white-form">
                    <div className="form-group basic">
                      <label className="label">Your Name</label>
                      <div className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control AmountAc"
                          placeholder="John Doe"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group basic">
                      <label className="label">Email</label>
                      <div className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control AmountAc"
                          placeholder="john@doe.com"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group basic">
                      <label className="label">Birth Date</label>
                      <div className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control AmountAc"
                          placeholder="24/10/2022"
                          onChange={(e) => setBirthDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group basic">
                      <label className="label">City</label>
                      <div className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control AmountAc"
                          placeholder="Amsterdam"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-2 mb-4">
                      <div class="form-check mb-1">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          class="form-check-label"
                          for="flexRadioDefault1"
                          style={{ fontSize: "14px" }}
                        >
                          I accept to receive emails from HERO.
                        </label>
                      </div>
                    </div>
                    <div className="form-group basic">
                      <button
                        type="button"
                        className="btn btn-link rounded btn-lg"
                        onClick={validate}
                      >
                        Become a HERO Supporter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )
            */}
            {showWelcomeToClub && (
              <WelcomeCirclesModal show={true} 
              onClose={() => setShowWelcomeToClub(false)}
              circle ={props.circle}
              />
             
            )}

            {showForm1 && !showWelcomeToClub && (
              <div id="form1" className="modal-body">
                <img src={"assets/img/logo3.png"} alt="logo" className="logo" />
                { user == null &&

                <p className="header-text mt-4">Create your hero Account</p>
                }
                <div className="section center">
                   { user == null &&
                  <form>
                   

                    <div class="form-group boxed">
                      <div class="input-wrapper">
                        <label class="label" for="email4b">
                          Your email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email4b"
                          placeholder="Your email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                       
                      </div>
                    </div>
                    <div class="input-wrapper">
                        <label class="label" for="email4b">
                          Password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="email4b"
                          placeholder="Your email"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                        />
                       
                      </div>
                      <div class="input-wrapper">
                        <label class="label" for="email4b">
                          Create your Hero id
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="email4b"
                          placeholder="@heroid"
                          onChange={(e) => setHeroId(e.target.value)}
                          value={HeroId}
                        />
                       
                      </div>
                  </form>
                    }
                  <div className="flex-center amount-container">
                    <div className="coin">€</div>
                    <div className="amount">{amount}</div>
                  </div>
                  
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg rounded mt-4"
                    onClick={validate}
                  >
                    Subscribe
                  </button>
                  <p className="mt-4">
                    You can cancel at anytime.
                    <br /> Your membership renews automatically on November 7th.
                    <br /> By subscribing, you agree to{" "}
                    <a href="#">HERO's Terms of Use</a>.
                  </p>
                  <div className="row">
                    <div className="col" style={{ padding: "10px 5px" }}>
                      <img
                        src={"assets/img/pic1.png"}
                        alt="logo"
                        className="logo"
                      />
                    </div>
                    <div className="col" style={{ padding: "10px 5px" }}>
                      <img
                        src={"assets/img/pic2.png"}
                        alt="logo"
                        className="logo"
                      />
                    </div>
                    <div className="col" style={{ padding: "10px 5px" }}>
                      <img
                        src={"assets/img/pic3.png"}
                        alt="logo"
                        className="logo"
                      />
                    </div>
                    <div className="col" style={{ padding: "10px 5px" }}>
                      <img
                        src={"assets/img/pic4.png"}
                        alt="logo"
                        className="logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ClubSelectMembershipModal;
