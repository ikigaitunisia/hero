import React, { useEffect, useState,useRef } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./AccountInformation.css";
import axios from "axios";

function AccountInformation(props) {
  const history = useHistory();
  const [fullName,setFullName] = useState("");
  const [HeroId,setHeroId] = useState("");
  const [Email,setEmail]= useState("");
  const [livingCountry,setLivingCountry] = useState("");
  const [profilePhoto,setProfilePhoto] = useState("");
  const [choosedFile,setChoosedFile] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const inputFilePhoto = useRef(null) ;
  const clickedFile = () => {
    inputFilePhoto.current.click();
    console.log(choosedFile);
    
  }
  console.log(choosedFile);

  const getUserInfo = () => {
    axios
    .post("https://hegemony.donftify.digital:8080/userInfo/", {
      Email: user.Email,
     
    },
    {
    headers: {
      Authorization:"Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg=="
  }}
  )
    .then(function (response) {
      console.log(response.data[0]);
      setEmail(response.data[0]._fields[0].properties.email);
      setFullName(response.data[0]._fields[0].properties.name);
      setLivingCountry(response.data[0]._fields[0].properties.CountryTolive);
      setHeroId(response.data[0]._fields[0].properties.HeroId);
      setProfilePhoto(response.data[0]._fields[0].properties.imageUrl);
    });
  }
  const updateUserInfo = () => {
    const formData = new FormData()
       
        formData.append('Email', user.Email);
        formData.append('newEmail', Email);
        formData.append('name', fullName);
        formData.append('HeroId', HeroId);
        formData.append('CountryTolive', livingCountry);
        formData.append('url', profilePhoto);
        formData.append('myFile', choosedFile);

    axios
    .post("https://hegemony.donftify.digital:8080/uploadProfilePhoto/", formData,
    {
    headers: {
      Authorization:"Basic PEJhc2ljIEF1dGggVXNlcm5hbWU+OjxCYXNpYyBBdXRoIFBhc3N3b3JkPg=="
  }}
  )
    .then(function (response) {
     console.log(response.data);
    });
  }
  useEffect(() => {
    console.log(user);
    getUserInfo();
  }, []);
  return (
    <>
      <Header
        showTitlePage
        title={"Account Information"}
        showBackBtn
        showMenuBtn
        transparent
        whiteMode
        backTo={"/"}
      />
      <div id="appCapsule" className="account-information">
        <div className="mt-4">
          <ion-icon
            src="assets/img/svg/accountInfo.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/passwordInfo.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/edit-password")}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/notification.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/card.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
        </div>
        <div className="section mt-2">
          <div className="card flex-center pt-4 pb-4">
            {
                (() => {
                  if (profilePhoto == '' && choosedFile == null){
                      return (
                        <img
                        src="assets/img/sample/photo/1.jpg"
                        alt="image"
                        className="imaged w48 rounded mb-3"
                      />
                      )
                  }
                  else if (choosedFile != null)
                  { return (
                    <img
                    src={URL.createObjectURL(choosedFile)}
                    alt="image"
                    className="imaged w48 rounded mb-3"
                  /> )
                  }
                  else{
                    return (
                    <img
                    src={"http://hegemony.donftify.digital/HeroCoin/uploads/"+profilePhoto}
                    alt="image"
                    className="imaged w48 rounded mb-3"
                  />
                    )
                  }
                })()


            }
           
            <span className="blue" onClick={() => clickedFile()}>Upload profile photo</span>
            <hr className="hr mt-4 mb-4" />
            <div id="">
              <form>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" for="text4b">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="text4b"
                      placeholder={fullName}
                      value={fullName}
                      onChange={(ev) => ev.target.value}
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>

                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" for="email4b">
                      HERO ID
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email4b"
                      placeholder={HeroId}
                      value={HeroId}
                      onChange={(ev) => setHeroId(ev.target.value)}

                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" for="email4b">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email4b"
                      placeholder={Email}
                      value={Email}
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" for="select4b">
                      Where do you live?
                    </label>
                    <select
                      className="form-control custom-select"
                      id="select4b"
                      value= {livingCountry}
                      onChange={(ev) => setLivingCountry(ev.target.value)}
                    >
                      <option value=""></option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="France">France</option>
                      
                    </select>
                  </div>
                </div>
                <div className="flex-center mt-3">
                  <p className="m-0">I want to receive email updates</p>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="SwitchCheckDefault4"
                      checked="true"
                    />
                    <label
                      className="form-check-label"
                      for="SwitchCheckDefault4"
                    ></label>
                  </div>
                </div>
              </form>
              <input type='file' id='file' ref={inputFilePhoto} style={{display: 'none'}}  onChange={(file) => setChoosedFile(file.target.files[0])}/>

              <button
                type="button"
                className="btn btn-outline-secondary btn-lg mt-4"
                onClick={() => updateUserInfo()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(AccountInformation);
