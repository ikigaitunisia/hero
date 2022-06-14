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
                  src="assets/img/logoH.png"
                  alt="image"
                  className="imaged  w36"
                />
              </div>
            </div>
            <div className="listview-title mt-1">
              <h2 style={{ textAlign: "start", color: "blue" }}>
                Account Settings
              </h2>
            </div>
            <ul className="listview flush transparent no-line image-listview">
              <li>
                <a href="index.html" className="item">
                  <div className="in">Edit Profile</div>
                </a>
              </li>
              <li>
                <a href="app-pages.html" className="item">
                  <div className="in">Change password</div>
                </a>
              </li>
              <li>
                <a href="app-components.html" className="item">
                  <div className="in">HERO Card Settings</div>
                </a>
              </li>
            </ul>
            <div className="listview-title mt-1">
              <h2 style={{ textAlign: "start", color: "blue" }}>About HERO</h2>
            </div>
            <ul className="listview flush transparent no-line image-listview">
              <li>
                <a
                  href=""
                  onClick={() => {
                    history.push("/heroteam");
                  }}
                  className="item"
                >
                  <div className="in">Team</div>
                </a>
              </li>
              <li>
                <a href="app-pages.html" className="item">
                  <div className="in">FAQ</div>
                </a>
              </li>
              <li>
                <a href="app-components.html" className="item">
                  <div className="in">Blog</div>
                </a>
              </li>
              <li>
                <a href="app-components.html" className="item">
                  <div className="in">Podcast</div>
                </a>
              </li>
              <li>
                <a href="app-components.html" className="item">
                  <div className="in">Contact</div>
                </a>
              </li>
            </ul>
            <div className="listview-title mt-1">
              <h2 style={{ textAlign: "start", color: "blue" }}>Log out</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
