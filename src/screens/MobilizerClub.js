import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./MobilizerClub.css";
import midLogo from "../Assets/MidLogo.svg";
import ClubSelectMembershipModal from "../components/ClubSelectMembershipModal";

function MobilizerClub(props) {
  const [showClubSelectMembershipModal, setShowClubSelectMembershipModal] =
    useState(false);
  return (
    <div id="MobilizerClubProfile">
      <div className="my-auto f-flex flex-column">
        <img className="mb-3" src={midLogo} />
        <p className="mx-auto mb-3">
          Join <b>Anuna's Club</b> to support her climate work and gain access
          to exclusive content.
        </p>
        <button
          className="btn-mb mt-2"
          onClick={() => setShowClubSelectMembershipModal(true)}
        >
          See Club Memberships
        </button>
      </div>

      <ClubSelectMembershipModal
        show={showClubSelectMembershipModal}
        onClose={() => setShowClubSelectMembershipModal(false)}
        activistId={props.match.params.id}
      />
    </div>
  );
}

export default withRouter(MobilizerClub);
