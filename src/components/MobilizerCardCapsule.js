import React, { useState } from "react";
import "./CardCapsule.css";
import AddCampaignModal from "./modals/AddCampaignModal";
import "./MobilizerCard.css";

function MobilizerCardCapsule(props) {
  const [showAddCampaignModal, setShowAddCampaignModal] = useState(false);
  return (
    <div id="appCapsule" className="bg-g-1 cardCapsule">
      <div className="section mt-2">
        <div className="card-block mb-2 bg-g" style={{ height: "280px" }}>
          <div
            className="card-main card-main-custom"
            style={{ fontFamily: "Seravek" }}
          >
            <div>
              <ion-icon
                class="icon-title"
                src="assets/img/svg/heroCardWhite.svg"
              ></ion-icon>
            </div>
            <div className="in in-custom">
              <div className="card-number card-number-custom mb-3">
                <span className="label">YOUR CARD BALANCE</span>
                <strong>cEUR 2, 250</strong>
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
                <strong>5 KILOS</strong>
                <span className="label">IN CARBON CREDITS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text">
        <h3 className="text-title" style={{ fontFamily: "Seravek" }}>
          Transactions
        </h3>
      </div>
      <div className="center-div-2 pe-2 pl-2 custom-font">
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
              <strong>€ 100</strong>
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
              <strong>€ 200</strong>
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
              <strong>-€ 100</strong>
            </div>
          </li>
        </ul>
      </div>
      <div className="section pt-4 pb-4 center-div-2">
        <button
          type="button"
          className="btn btn-primary btn-lg rounded btn-width blueBtn"
        >
          Withdraw
        </button>
      </div>
      <hr
        data-content="AND"
        className="hr-text center-div-2"
        style={{ background: "blue" }}
      ></hr>
      <div className="text pt-4">
        <h3
          className="text-title blue-text"
          style={{ paddingTop: 0, fontFamily: "Seravek" }}
        >
          Reporting
        </h3>
      </div>
      <div className="mb-4 center-div-2">
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
                class="custom-icon-size"
              ></ion-icon>
            </div>
            <div
              className="in"
              style={{ textAlign: "start", marginLeft: "20px" }}
            >
              <div>
                <div className="mb-05">
                  <strong
                    className="blue-text"
                    style={{ fontFamily: "Seravek" }}
                  >
                    Migrants Rights
                  </strong>
                </div>
                <div
                  className="text-small mb-05"
                  style={{ color: "#958d9e", fontFamily: "Seravek" }}
                >
                  Humans Rights Watch <br />
                  In progress{" "}
                  <ion-icon
                    name="chevron-down-outline"
                    style={{ color: "blue" }}
                  ></ion-icon>
                </div>
                <div
                  className="text-xsmall mb-2"
                  style={{ fontWeight: "400", fontFamily: "Seravek" }}
                >
                  Drafting a new law to present to the EU Parliament to protect
                  climate refugees.
                </div>
                <button
                  type="button"
                  style={{ width: "80px"}}
                  className="btn btn-primary rounded blueBtn"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }} className="mt-2">
            <div>
              <ion-icon
                src="assets/img/svg/paperBlue.svg"
                class="custom-icon-size"
              ></ion-icon>
            </div>
            <div
              className="in"
              style={{ textAlign: "start", marginLeft: "20px" }}
            >
              <div>
                <div className="mb-05">
                  <strong
                    className="blue-text"
                    style={{ fontFamily: "Seravek" }}
                  >
                    Stop Coal Mining in Belgium
                  </strong>
                </div>
                <div
                  className="text-small mb-05"
                  style={{ color: "#958d9e", fontFamily: "Seravek" }}
                >
                  Youth for Climate Belgium <br />
                  In progress{" "}
                  <ion-icon
                    name="chevron-down-outline"
                    style={{ color: "blue" }}
                  ></ion-icon>
                </div>
                <div
                  className="text-xsmall mb-2"
                  style={{ fontWeight: "400", fontFamily: "Seravek" }}
                >
                  Organizing mobilizations to put pressure on Belgium’s
                  goberment to close coal mines.
                </div>
                <button
                  type="button"
                  style={{ width: "80px"}}
                  className="btn btn-primary rounded blueBtn"
                >
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
