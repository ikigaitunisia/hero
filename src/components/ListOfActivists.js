import React, { useState, useEffect } from "react";
import { useHistory,useParams } from "react-router-dom";
import axios from "axios";
import "./ActivistProfileCapsule.css";

function ListOfActivists(props) {
  const { id } = useParams();
  const history = useHistory();
  const [Info,setInfo] = useState({});
  const [Index,setIndex] = useState(0);
  const [Activist,setActivist] = useState([]);
  useEffect(() => {
    
    axios
    .post("https://hegemony.donftify.digital:8080/GetIndexActiv", {
      ID: id
    })
    .then(function (response) {
      console.log(response.data);
      setIndex(response.data.index);
    })
    .catch(function (error) {
        //handle error here
        console.log(error);
    }); 
    for (var i=0;i<=Index;i++)
    {
    axios
    .post("https://hegemony.donftify.digital:8080/GetActivistByID", {
      ID: i
    })
    .then(function (response) {
      console.log(response.data);

      setActivist([...Activist,response.data]);
    })
    .catch(function (error) {
        //handle error here
        console.log(error);
    }); 
  }

  }, []);

  return (
    <div id="appCapsule">
     
     
        
        <div className="row mt-2">
          {
          Activist.map((activist) => (
          <div className="col-2" onClick={() => history.push("/activistprofile",activist)}>
            <div className="stat-box text-box">
             <img src={"assets/img/"+activist.autre.Photo} style={{width:"100%",height:"20%"}}></img>
             <h4>{activist["Nom"]+" "+activist["Prenom"]}</h4>
            </div>
          </div>
          ))
          }
        </div>
        
    </div>
  );
}

export default ListOfActivists;
