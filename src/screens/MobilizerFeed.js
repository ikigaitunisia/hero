import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import "./MobilizerFeed.css";
import InfiniteScroll from "react-infinite-scroll-component";

function MobilizerFeed(props) {
  const state = {
    items: Array.from({ length: 20 }),
  };

  const [items, setItems] = useState(Array.from({ length: 2 }));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= 6) {
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 2 })));
    }, 1500);
  };
  const playVideo = (id) => {
    var v = document.getElementById(id);
    if(v.paused){
      v.play();
    }else{
      v.pause();
    }
  };
  return (
    <>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {items.map((i, index) => (
          <div key={index}>
            <div className="feed" style={{ minHeight: "90vh!important" }}>
              <video id={index} playsInline>
                <source src="assets/videos/test.mp4" type="video/mp4" />
              </video>
              <div className="feed-content">
                <img
                  src={"assets/img/heroLogo.png"}
                  alt="logo"
                  className="logo mt-4"
                />
                <div className="mt-4">
                  <span className="p-3">
                    Following
                  </span>
                  <span className="p-3">Discover</span>
                </div>

                <button type="button" className="btn btn-primary rounded play-btn" onClick={() => playVideo(index)}>
                  <ion-icon name="play" class="m-0"></ion-icon>
                </button>

                <div className="button-container">
                  <div className="mb-2">
                    <img
                      src="assets/img/annunaPicture.png"
                      alt="image"
                      className="imaged w32 rounded"
                    />
                  </div>
                  <div className="mb-2">
                    <ion-icon
                      class="icon"
                      src="assets/img/svg/echo.svg"
                      style={{ width: "32px", height: "32px" }}
                    ></ion-icon>
                    <span>Echo</span>
                  </div>
                  <div className="mb-2">
                    <img
                      src="assets/img/club.png"
                      alt="image"
                      class="imaged w32 rounded"
                    />
                    <span>Join <br/> Club</span>
                  </div>
                </div>
                <div className="bottom mt-4">
                  <span className="p-3">@anunadewever</span>
                  <p className="mt-2" style={{width: "unset"}}>
                    We need to keep showing them that we can take care of our
                    future.{" "}
                  </p>
                  <span className="mt-2">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
}

export default withRouter(MobilizerFeed);
