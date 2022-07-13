import React from "react";
import "./HeroTeamCapsule.css";

function HeroTeamCapsule(props) {
  return (
    <>
      <div id="appCapsule" className="bg-g-1">
        <div className="section center-div mt-4 pt-4">
          <h4 className="blue-text fw-9">Founders</h4>
          <p className="blue-text">
            Meet the team on a mission to connect supporters and mobilizers
            around the world to accelerate climate action.
          </p>
          <hr data-content="AND" className="hr-text mb-2 "></hr>
        </div>
        <div className="section center-div mt-4">
          <img className="mb-3 team-img" src="assets/img/Sylvain.png" />
          <h5 className="blue-text fw-7 m-0">Sylvain Ferrière</h5>
          <span className="blue-text">Investment & Funding</span>
          <p className="mt-2">
            Boston Consulting Group. CIO of Yunus Social Business Fund. General
            Manager of Tramando (Social Enterprise). Founder and President of
            Campus de l'Inclusion, Co-Founder Zero Poverty Ventures.
          </p>
        </div>
        <div className="section center-div mt-4">
          <img className="mb-3 team-img" src="assets/img/Mauricio.png" />
          <h5 className="blue-text m-0 fw-7">Mauricio Porras</h5>
          <span className="blue-text">
            Key Mobilizer Relationships & Marketing
          </span>

          <p className="mt-2">
            Consultant, social entrepreneur, innovator and movement strategist.
            Founder and CEO of YOU (Social and Climate Action Lab). Political
            Advisor. 10+ years supporting high level mobilizers worldwide. Host
            of the HERO Podcast series.
          </p>
        </div>
        <div className="section center-div mt-4">
          <img className="mb-3 team-img" src="assets/img/Mohamed.png" />
          <h5 className="blue-text m-0 fw-7">Mohamed Mnif</h5>
          <span className="blue-text">Blockchain & Web3</span>

          <p className="mt-2">
            Founder of multiple Web3 companies, including Dar Blockchain and
            Lightency. CELO Ambassador. Senior Fraud Investigator, EY Paris.
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroTeamCapsule;
