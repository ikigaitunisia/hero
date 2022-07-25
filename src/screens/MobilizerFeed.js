import React, { useState,useEffect } from "react";
import { withRouter, useHistory, Link } from "react-router-dom";
import "./MobilizerFeed.css";
import InfiniteScroll from "react-infinite-scroll-component";
import EchoModal from "../components/EchoModal";
import {MobilizerData} from "../data/data.js";


const SCROLL_UP = "up";
const SCROLL_DOWN = "down";
const thresholdPixels = 10;

function MobilizerFeed(props) {
  const history = useHistory();

  const [items, setItems] = useState(Array.from({ length: 2 }));
  const [showEchoModal, setShowEchoModal] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [ScrollDir,setScrollDir] = useState("");
  const [indexY,setIndexY] = useState(0);
  
  const getDirection = () => {
    if (ScrollDir == "down")
      { 
        console.log(indexY);
        console.log(ScrollDir);
        console.log(MobilizerData.length -1);
        if (indexY< MobilizerData.length -1)
        {
          setIndexY(indexY +1);
        }
        else
        {
          setIndexY(0);
        }
      }
      else 
      {console.log(indexY);
        console.log(ScrollDir);
        console.log(ScrollDir);
        console.log(MobilizerData.length -1);
        if (indexY>0)
        {
          setIndexY(indexY-1);
        }
        else
        {
          setIndexY(MobilizerData.length -1);
        }
      }
    }
    
  /*const fetchMoreData = () => {
    console.log("ok");
    if (items.length >= 6) {
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 2 })));
    }, 1500);
  };*/
  const playVideo = (id) => {
    var v = document.getElementById(id);
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };
  const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

    
     
      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      console.log(scrollY > lastScrollY);

      lastScrollY = scrollY > 0 ? scrollY : 0;

      ticking = false;
      getDirection();
    };
    
    const onScroll = () => {
      
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        //updateScrollDir();
        ticking = true;
        //console.log(ScrollDir);
      }
      
    };

  useEffect(() => {
    

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
   
   //return () => window.removeEventListener('scroll', onScroll);
   window.addEventListener("scroll", onScroll);

  }, [onScroll]);
  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
      
          <div key={indexY}>
            <div className="feed" style={{ minHeight: "90vh!important" }}>
              <video id={indexY} playsInline>
                <source src={"videos/"+MobilizerData[indexY].video} type="video/mp4" />
              </video>
              <div className="feed-content">
                <img
                  src={"assets/img/heroLogo.png"}
                  alt="logo"
                  className="logo mt-4"
                />
                <div className="mt-4">
                  <span className="p-3 text-2">Following</span>
                  <span className="p-3 text-3">Discover</span>
                </div>

                <button
                  type="button"
                  className="btn btn-primary rounded play-btn"
                  onClick={() => playVideo(indexY)}
                >
                  <ion-icon name="play" class="m-0"></ion-icon>
                </button>

                <div className="button-container">
                  <div className="mb-3">
                {/* 
                    Changes the Profile Image based on the current activiest index
                    Link to the profile by the user ID
              */}
                    <Link to={"/profile:" + MobilizerData[indexY].id}>
                    <div
                      className={"profileIcon-" + MobilizerData[indexY].id}
                    >
                    </div>
                    </Link>
                  </div>
                  <div className="mb-3" onClick={() => setShowEchoModal(true)}>
                    <ion-icon
                      class="icon"
                      src="assets/img/svg/echo.svg"
                      style={{ width: "32px", height: "32px" }}
                    ></ion-icon>
                    <span className="text-2">Echo</span>
                  </div>
                  <div
                    className="mb-3"
                    onClick={() => history.push("/mobilizer-club")}
                  >
                    <img
                      src="assets/img/club.png"
                      alt="image"
                      className="imaged w32 rounded"
                    />
                    <span className="text-2">
                      Join <br /> Club
                    </span>
                  </div>
                </div>
                <div className="bottom mt-4">
                  <span className="p-3 text-2">
                    @anunadewever{" "}
                    <ion-icon
                      class="icon"
                      src="assets/img/svg/icon.svg"
                    ></ion-icon>
                  </span>
                  <p className="mt-2 activist-text">
                    We need to keep showing them that
                    <br /> we can take care of our future.{" "}
                  </p>
                  <span className="mt-2 text-1">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
      </InfiniteScroll>
      <EchoModal show={showEchoModal} onClose={() => setShowEchoModal(false)} />
    </>
  );
}

export default withRouter(MobilizerFeed);
