import React, { useEffect } from "react";
import { Modal } from "bootstrap";
import { useHistory } from "react-router-dom";
import "./Menu.css";

function Menu(props) {
  const history = useHistory();
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("menu"), {
        keyboard: false,
      });
      modal.show();
    }

    return () => {
      props.onClose();
    };
  }, [props.show]);
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <div
      className="modal fade panelbox panelbox-left"
      id="menu"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body p-0">
            <div className=" pt-2 pb-2">
              <a
                href="#"
                className="btn btn-link btn-icon sidebar-close"
                data-bs-dismiss="modal"
              >
                <ion-icon name="close-outline"></ion-icon>
              </a>
            </div>
            <div className="profileBox pt-2 pb-2">
              <div className="image-wrapper">
                <img
                  src="assets/img/logo.png"
                  alt="image"
                  className="imaged  w36"
                />
              </div>
            </div>
            {/*<div className="listview-title mt-1">
              <h2 className="text-start blue-text">
                Account Settings
              </h2>
            </div>*/}
            <ul className="listview flush transparent no-line image-listview">
              {/*<li>
                <a
                  href=""
                  onClick={() => {
                    history.push("/changepassword");
                  }}
                  className="item"
                >
                  <div className="in">Change password</div>
                </a>
                </li>*/}
            </ul>
            <div className="listview-title mt-3 mb-3">
              <h5 className="text-start blue-text">Log in</h5>
            </div>
            <ul className="listview flush transparent no-line image-listview">
              <li>
                <a href="" className="item pt-0 pb-0">
                  <div className="in blue">How are mobilizers verified?</div>
                </a>
              </li>
              <li>
                <a href="" className="item pt-0 pb-0">
                  <div className="in blue">What is Basic Income?</div>
                </a>
              </li>
              <li>
                <a href="" className="item pt-0 pb-0">
                  <div className="in blue">Subscriptions & Pricing</div>
                </a>
              </li>
              <li>
                <a href="" className="item pt-0 pb-0">
                  <div className="in blue">How HERO works</div>
                </a>
              </li>
            </ul>
            <div id="social-btn-container2" className="row mb-4 mt-4 pl-3">
              <button
                type="button"
                className="btn btn-icon rounded btn-primary social-btn me-2"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </button>
              <button
                type="button"
                className="btn btn-icon rounded btn-primary social-btn me-2"
              >
                <ion-icon name="logo-tiktok"></ion-icon>
              </button>
              <button
                type="button"
                className="btn btn-icon rounded btn-primary social-btn me-2"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </button>
              <button
                type="button"
                className="btn btn-icon rounded btn-primary social-btn me-2"
              >
                <ion-icon name="logo-youtube"></ion-icon>
              </button>
            </div>
            <div className="listview-title mt-3 mb-3">
              <h6 className="text-start blue-text">
                <b>HERO Labs BV © 2022.</b>
                <br />
                Fred. Roeskestraat 115,
                <br />
                1076EE. Amsterdam, NL.
              </h6>
            </div>

            <ul className="listview flush transparent no-line image-listview">
              <li>
                <a href="" className="item pt-0 pb-0">
                  <div className="in blue">
                    <small>Founders 100% Pledge</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="item pt-0 pb-0">
                  <div className="in blue">
                    <small>How to join a HERO Circle</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="item pt-0 pb-0">
                  <div className="in blue">
                    <small>HERO team</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="item pt-0 pb-0">
                  <div className="in blue">
                    <small>Help center</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="item pt-0 pb-0">
                  <div className="in blue">
                    <small>Terms of Service</small>
                  </div>
                </a>
              </li>
              <li>
                <a href="" className="item pt-0 pb-0">
                  <div className="in blue">
                    <small>Data & Privacy</small>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
