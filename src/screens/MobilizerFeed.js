import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import "./MobilizerFeed.css";
import InfiniteScroll from "react-infinite-scroll-component";
import EchoModal from "../components/EchoModal";
const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

const useScrollDirection = ({
  initialDirection,
  thresholdPixels,
  off
} = {}) => {
  const [scrollDir, setScrollDir] = useState(initialDirection);

  useEffect(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    !off
      ? window.addEventListener("scroll", onScroll)
      : setScrollDir(initialDirection);

    return () => window.removeEventListener("scroll", onScroll);
  }, [initialDirection, thresholdPixels, off]);

  return scrollDir;
};
function MobilizerFeed(props) {
  const history = useHistory();

  const [items, setItems] = useState(Array.from({ length: 2 }));
  const [showEchoModal, setShowEchoModal] = useState(false);
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
    if (v.paused) {
      v.play();
    } else {
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
                  <span className="p-3 text-2">Following</span>
                  <span className="p-3 text-3">Discover</span>
                </div>

                <button
                  type="button"
                  className="btn btn-primary rounded play-btn"
                  onClick={() => playVideo(index)}
                >
                  <ion-icon name="play" class="m-0"></ion-icon>
                </button>

                <div className="button-container">
                  <div className="mb-3">
                    <img
                      src="assets/img/annunaPicture.png"
                      alt="image"
                      className="imaged w32 rounded"
                    />
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
                      class="imaged w32 rounded"
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
        ))}
      </InfiniteScroll>
      <EchoModal show={showEchoModal} onClose={() => setShowEchoModal(false)} />
    </>
  );
}

export default withRouter(MobilizerFeed);
