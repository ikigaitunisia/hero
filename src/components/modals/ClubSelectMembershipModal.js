import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import "./ClubSelectMembershipModal.css";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function ClubSelectMembershipModal(props) {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [city, setCity] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiryDate, setExpiryDate] = useState(new Date());

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

  const validate = () => {
    /*const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log("test");
      const customerId = user.wallet.customerId;
      axios
        .post(`https://hegemony.donftify.digital:8080/create-checkout`, {
          mode: "subscription",
          idaActivist: props.activistId,
          amount: amount * 100,
          customerId: customerId,
        })
        .then((res) => {
          window.location.href = res.data.url;
        })
        .catch((err) => {
          console.log(err);
        });
    }*/

    setShowWelcomeToClub(true);

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
            {showForm && !showWelcomeToClub && (
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
            )}
            {showWelcomeToClub && (
              <div id="welcomeClub" className="modal-body">
                <img
                  src={"assets/img/heroLogo2.png"}
                  alt="logo"
                  className="logo"
                />
                <p className="header-text mt-4">Welcome to the club, John!</p>
                <p className="mt-4">
                  You are now supporting <b>Anuna</b> and
                  <br /> will have access to exlusive content.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg rounded"
                >
                  Go to Club
                </button>
              </div>
            )}

            {showForm1 && !showWelcomeToClub && (
              <div id="form1" className="modal-body">
                <img src={"assets/img/logo3.png"} alt="logo" className="logo" />
                <p className="header-text mt-4">Payment Details</p>
                <div className="section center">
                  <form>
                    <div class="form-group boxed">
                      <div class="input-wrapper">
                        <label class="label" for="text4b">
                          Card Number
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="text4b"
                          placeholder="5534  2834  8857  5370"
                          onChange={(e) => setCardNumber(e.target.value)}
                        />
                        <i class="clear-input">
                          <ion-icon name="close-circle"></ion-icon>
                        </i>
                      </div>
                    </div>
                    <div className="row section">
                      <div class="form-group boxed col me-1">
                        <div
                          class="input-wrapper"
                          style={{ minWidth: "129px" }}
                        >
                          <label class="label" for="select4b">
                            Expiry date
                          </label>
                          <DatePicker
                            class="form-control"
                            selected={expiryDate}
                            onChange={(date) => setExpiryDate(date)}
                            dateFormat="MMMM, yyyy"
                          />
                        </div>
                      </div>
                      <div class="form-group col boxed">
                        <div class="input-wrapper">
                          <label class="label" for="email4b">
                            CVV
                          </label>
                          <input
                            type="text"
                            class="form-control verification-input"
                            id="smscode"
                            placeholder="•••"
                            maxlength="4"
                            onChange={(e) => setCvv(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group boxed">
                      <div class="input-wrapper">
                        <label class="label" for="email4b">
                          Name
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email4b"
                          placeholder="John Doe"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <i class="clear-input">
                          <ion-icon name="close-circle"></ion-icon>
                        </i>
                      </div>
                    </div>
                  </form>
                  <p className="header-text mt-4">Extra support to HERO</p>
                  <div className="flex-center amount-container">
                    <div className="coin">€</div>
                    <div className="amount">{amount}</div>
                  </div>
                  <p className="mt-4 mb-0">
                    Give an extra amount if you like our platform. Your
                    <br />
                    contribution will help us to keep supporting mobilizers
                    <br />
                    around the world with trainings, legal advice, partnerships
                    <br />
                    and communication strategies.
                  </p>
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
                  <div className="col" style={{padding: "10px 5px"}}>
                    <img
                      src={"assets/img/pic1.png"}
                      alt="logo"
                      className="logo"
                    />
                  </div>
                  <div className="col" style={{padding: "10px 5px"}}>
                    <img
                      src={"assets/img/pic2.png"}
                      alt="logo"
                      className="logo"
                    />
                  </div>
                  <div className="col" style={{padding: "10px 5px"}}>
                    <img
                      src={"assets/img/pic3.png"}
                      alt="logo"
                      className="logo"
                    />
                  </div>
                  <div className="col" style={{padding: "10px 5px"}}>
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
