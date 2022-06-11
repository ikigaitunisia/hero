import React, { useEffect } from "react";
import { Modal } from "bootstrap";
import "./Menu.css";

function Menu(props) {
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
      class="modal fade panelbox panelbox-left"
      id="menu"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body p-0">
            <div class=" pt-2 pb-2">
              <a
                href="#"
                class="btn btn-link btn-icon sidebar-close"
                data-bs-dismiss="modal"
              >
                <ion-icon name="close-outline"></ion-icon>
              </a>
            </div>
            <div class="profileBox pt-2 pb-2">
              <div class="image-wrapper">
                <img
                  src="assets/img/logoH.png"
                  alt="image"
                  class="imaged  w36"
                />
              </div>
            </div>
            <div class="listview-title mt-1">
              <h2 style={{ textAlign: "start", color: "blue" }}>
                Account Settings
              </h2>
            </div>
            <ul class="listview flush transparent no-line image-listview">
              <li>
                <a href="index.html" class="item">
                  <div class="in">Edit Profile</div>
                </a>
              </li>
              <li>
                <a href="app-pages.html" class="item">
                  <div class="in">Change password</div>
                </a>
              </li>
              <li>
                <a href="app-components.html" class="item">
                  <div class="in">HERO Card Settings</div>
                </a>
              </li>
            </ul>
            <div class="listview-title mt-1">
              <h2 style={{ textAlign: "start", color: "blue" }}>About HERO</h2>
            </div>
            <ul class="listview flush transparent no-line image-listview">
              <li>
                <a href="index.html" class="item">
                  <div class="in">Team</div>
                </a>
              </li>
              <li>
                <a href="app-pages.html" class="item">
                  <div class="in">FAQ</div>
                </a>
              </li>
              <li>
                <a href="app-components.html" class="item">
                  <div class="in">Blog</div>
                </a>
              </li>
              <li>
                <a href="app-components.html" class="item">
                  <div class="in">Podcast</div>
                </a>
              </li>
              <li>
                <a href="app-components.html" class="item">
                  <div class="in">Contact</div>
                </a>
              </li>
            </ul>
            <div class="listview-title mt-1">
              <h2 style={{ textAlign: "start", color: "blue" }}>Log out</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
