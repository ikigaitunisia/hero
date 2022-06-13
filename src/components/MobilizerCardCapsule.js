import React, { useState } from "react";
import "./CardCapsule.css";
import AddCampaignModal from "./modals/AddCampaignModal";
import "./MobilizerCard.css";

function MobilizerCardCapsule(props) {
  const [showAddCampaignModal, setShowAddCampaignModal] = useState(false);
  return (
    <div id="appCapsule" className="bg-g-1 cardCapsule">
      <div className="section mt-2">
        <div className="card-block mb-2 bg-g">
          <div className="card-main card-main-custom">
            <div>
              <ion-icon
                class="icon-title"
                src="assets/img/svg/heroCardWhite.svg"
              ></ion-icon>
            </div>
            <div className="in in-custom">
              <div className="card-number card-number-custom mb-3">
                <span className="label">YOUR CARD BALANCE</span>
                <strong>$US 2, 250</strong>
              </div>
              <div className="card-number card-number-custom mb-3">
                <span className="label">YOUR HERO COIN BALANCE</span>
                <strong>
                  <ion-icon
                    src="assets/img/svg/Vector.svg"
                    style={{ marginRight: "5px" }}
                  ></ion-icon>{" "}
                  2.250
                </strong>
              </div>
              <div className="card-number card-number-custom">
                <span className="label">BACKED BY</span>
                <strong>00000</strong>
                <span className="label">CARBON CREDITS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text">
        <h1 className="text-title">Transactions</h1>
      </div>
      <div className="center-div">
        <ul className="listview flush transparent simple-listview no-space mt-3">
          <li>
            <div
              className="detail"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="round-blue-div me-2">JP</div>
              <div>
                <strong>John Peterson</strong>
              </div>
            </div>
            <div className="itemList">
              <strong>$100</strong>
            </div>
          </li>
          <li>
            <div
              className="detail"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="round-blue-div me-2">A</div>

              <div>
                <strong>Anonymous</strong>
              </div>
            </div>
            <div className="itemList">
              <strong>$200</strong>
            </div>
          </li>
          <li>
            <div
              className="detail"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="round-blue-div me-2">
                <ion-icon name="arrow-down-outline"></ion-icon>
              </div>
              <div>
                <strong>Withdrawall</strong>
              </div>
            </div>
            <div className="itemList">
              <strong>-$100</strong>
            </div>
          </li>
        </ul>
      </div>
      <div className="section mt-2 center-div">
        <button
          type="button"
          className="btn btn-primary btn-lg rounded btn-width"
        >
          Withdraw
        </button>
        <hr
          data-content="AND"
          className="hr-text"
          style={{ background: "blue" }}
        ></hr>
      </div>
      <div className="text">
        <h1 className="blue-text">Reporting</h1>
      </div>
      <div className="section mt-2 center-div">
        <div className="section">
          <div className="flex-end">
            <a href="#" style={{ color: "blue" }}>
              <ion-icon
                class="add-icon"
                name="add"
                onClick={() => setShowAddCampaignModal(true)}
              ></ion-icon>
            </a>
          </div>
          <div style={{ display: "flex" }} className="mt-2">
            <div>
              <ion-icon
                src="assets/img/svg/userBlue.svg"
                style={{ width: "50px", height: "50px" }}
              ></ion-icon>
            </div>
            <div
              className="in"
              style={{ textAlign: "start", marginLeft: "20px" }}
            >
              <div>
                <div className="mb-05">
                  <strong className="blue-text">Migrants Rights</strong>
                </div>
                <div className="text-small mb-05">
                  Humans Rights Watch <br />
                  In progress{" "}
                  <ion-icon
                    name="chevron-down-outline"
                    style={{ color: "blue" }}
                  ></ion-icon>
                </div>
                <div className="text-xsmall mb-2">
                  Drafting a new law to present to the EU Parliament to protect
                  climate refugees.
                </div>
                <button type="button" className="btn btn-primary rounded">
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="mt-2">
            <div>
              <ion-icon
                src="assets/img/svg/paperBlue.svg"
                style={{ width: "50px", height: "50px" }}
              ></ion-icon>
            </div>
            <div
              className="in"
              style={{ textAlign: "start", marginLeft: "20px" }}
            >
              <div>
                <div className="mb-05">
                  <strong className="blue-text">
                    Stop Coal Mining in Belgium
                  </strong>
                </div>
                <div className="text-small mb-05">
                  Youth for Climate Belgium <br />
                  In progress{" "}
                  <ion-icon
                    name="chevron-down-outline"
                    style={{ color: "blue" }}
                  ></ion-icon>
                </div>
                <div className="text-xsmall mb-2">
                  Organizing mobilizations to put pressure on Belgium’s
                  goberment to close coal mines.
                </div>
                <button type="button" className="btn btn-primary rounded">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddCampaignModal
        show={showAddCampaignModal}
        onClose={() => setShowAddCampaignModal(false)}
      />
    </div>
  );
}

export default MobilizerCardCapsule;
