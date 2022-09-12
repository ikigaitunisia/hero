import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";

function AdminDashboard(props) {
    const [f,setFile] = useState({});
    
    const uploadFile = () => {
        const formData = new FormData()
        formData.append('myFile', f)
        console.log(f);
        axios.post("https://hegemony.donftify.digital:8080/uploadUpdatesFile", formData, {
        }).then(res => {
            console.log(res)
        })
      };



  return (
    <>
         <div className="container">
                <div className="row">
                    
                        <h3>React File Upload</h3>
                        <div className="form-group">
                            <input type="file" onChange={(fi) => setFile(fi.target.files[0])}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={() => uploadFile()}>Upload</button>
                        </div>
                </div>
            </div>
    </>
  );
}

export default withRouter(AdminDashboard);
