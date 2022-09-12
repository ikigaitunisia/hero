import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import axios from "axios";

function ImageFeed(props) {
  const item = props.item;
  const i = props.index;
  useEffect(() => {
    console.log(i+item.id);
    document.getElementById(i+item.id).addEventListener('click', handleClick)

  }
  )
  const handleClick = (item)  => {
    console.log(`This has access to item ${item}! and event(e)`)
}
 
    return (
   
         <li>
              
         <div>
           <img
             src="assets/img/sample/photo/1.jpg"
             alt="image"
             class="imaged w48 rounded"
           />
         </div>
         <div
           className="in"
           style={{ textAlign: "start", marginLeft: "20px" }}
         >
           <div className="blue">
             <div className="">
               <strong>
               {item.mobilizer} <small>{item.time}</small>
               </strong>
             </div>
             <div className="mb-05">
               <span>{"@"+item.mobilizer}</span>
             </div>
             <div className="text-xsmall">
             {item.desc}

             </div>
           </div>
           <div className="flex-row mt-3 mb-4">
             <img 
                 src={"http://hegemony.donftify.digital/HeroCoin/uploads/"+item.url}
               />
           </div>
           <div className="flex-row mt-3" key={i}>
             <div className="flex-center flex-row" >
              <button  style={{zIndex:"999999"}} onClick ={() => console.log("yes")}>ok</button>
               <ion-icon
                 src="assets/img/svg/icon20.svg"
                 style={{ width: "15px", height: "15px" }}
                 className="me-1"
                 key={i+item.id}
                 id = {i+item.id}
                 onClick ={props.onPress}
               ></ion-icon>
               <span className="me-2">{item.likes}</span>
             </div>
             <div className="flex-center flex-row">
               <ion-icon
                 src="assets/img/svg/icon21.svg"
                 style={{ width: "15px", height: "15px" }}
                 class="me-1"
               ></ion-icon>
               <span>250</span>
             </div>
           </div>
           </div>
       </li>
    );
  
}
export default ImageFeed;
