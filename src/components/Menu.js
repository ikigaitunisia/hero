import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import { useHistory } from "react-router-dom";
import "./Menu.css";
import { gapi } from "gapi-script";


function Menu(props) {
  const history = useHistory();
  const clientId =
    "213045835379-hcm9r1um59u7dksk2h73773e6jfepinn.apps.googleusercontent.com";

  const [loggedin, setLogedin] = useState(false);
  
 
  const goToProfil = () => {
    history.push("account-information");
    window.location.reload(false);
  };
  useEffect(() => {
    gapi.load('auth2', function() {
      gapi.auth2.init();
    })
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
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      setLogedin(true);
    }
  }, []);
  const logout = () => {
    const auth2 = window.gapi.auth2.getAuthInstance()
    if (auth2 != null) {
      auth2.signOut().then(
        auth2.disconnect().then(this.props.onLogoutSuccess)
      )
    }

    
    localStorage.removeItem("user");
    setLogedin(false);
    history.push("/");
    window.location.reload();
    
    
  };
  return (
    <div
      className="modal fade panelbox panelbox-left w-100"
      id="menu"
      tabIndex="-1"
      role="dialog"
      data-backdrop={false}
      style={{ zIndex: 9999 }}
    >
      <div
        className="modal-dialog modal-dialog-centered w-100 "
        role="document"
        style={{ zIndex: -1 }}
      >
        <div className="modal-content w-100 d-flex align-items-center justify-content-center">
          <div className="modal-body p-0 d-flex flex-column">
            <div className=" pt-2 pb-2 xicon">
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
            <div className="listview-title mt-3">
              <h5
                className="text-start blue-text log"
                onClick={
                  loggedin
                    ? logout
                    : () => {
                        history.push("/login1");
                        window.location.reload();
                      }
                }
              >
                {loggedin ? "Log out" : "Log in"}
              </h5>
            </div>
            {loggedin && (
              <div className="listview-title log" onClick={() => goToProfil()} style={{color:"#0000ff"}}>
                <h5 className="text-start blue-text">Account Settings</h5>
              </div>
            )}
            {loggedin && (
              <div className="listview-title mb-3 ">
                <a
                  href="https://herolabsco.notion.site/HERO-FAQ-a74c18e9ad1d4f308a3ec06e0bb62732"
                  className="item pt-0 pb-0 "
                  target="_blank"
                >
                  <h5 className="text-start blue-text log">FAQ</h5>
                </a>
              </div>
            )}
            <ul className="listview flush transparent no-line image-listview blue-list">
              <li>
                <a
                  href="https://herolabsco.notion.site/Discover-how-HERO-Mobilizers-are-verified-a3b9028ab257499fafa9d724c2ecb11b"
                  className="item pt-0 pb-0"
                  target="_blank"
                >
                  <div className="in blue">How are mobilizers verified?</div>
                </a>
              </li>
              <li>
                <a
                  href="https://herolabsco.notion.site/Why-a-Basic-Income-785bc36971f741baa728f3cb81a6a807"
                  className="item pt-0 pb-0"
                  target="_blank"
                >
                  <div className="in blue">What is Basic Income?</div>
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={() => history.push("/subscriptions-and-pricing")}
                  className="item pt-0 pb-0"
                >
                  <div className="in blue">Subscriptions & Pricing</div>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="item pt-0 pb-0"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    history.push({
                      pathname: "/",
                      state: { fromMenu: "fromMenu" },
                    });
                  }}
                >
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
            <div className="listview-title mb-3">
              <h6 className="text-start blue-text">
                <b>HERO Labs BV © 2022.</b>
                <br />
                Fred. Roeskestraat 115,
                <br />
                1076EE. Amsterdam, NL.
              </h6>
            </div>

            <ul className="listview flush transparent no-line image-listview grey-list">
              <li>
                <a
                  href="https://herolabsco.notion.site/How-to-join-a-HERO-Circle-42834385f36f4a17bbaedf1a12d9dec5"
                  target="_blank"
                  className="item pt-0 pb-0"
                >
                  <div className="in blue">
                    <small>How to join a HERO Circle</small>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="item pt-0 pb-0"
                  onClick={() => history.push("/hero-team")}
                >
                  <div className="in blue">
                    <small>HERO team</small>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://herolabsco.notion.site/Contact-us-af4234ecdbd9440c8c3f94d394277e64"
                  target="_blank"
                  className="item pt-0 pb-0"
                >
                  <div className="in blue">
                    <small>Help center</small>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://herolabsco.notion.site/Terms-of-Service-2ad8469c5f5e414eab44966ed5ec1627"
                  className="item pt-0 pb-0"
                  target="_blank"
                >
                  <div className="in blue">
                    <small>Terms of Service</small>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://herolabsco.notion.site/Privacy-Policy-3da3d0ebdd3849dfa7d48fb13cf27564"
                  className="item pt-0 pb-0"
                  target="_blank"
                >
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
