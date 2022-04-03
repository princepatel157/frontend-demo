import React from "react";
import "./Head.css";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container">
          <div className="row head-row">
            <div className="head-items">
              <div className="head-title">
                <img src="./images/user.svg" />
                Name
              </div>
              <div className="head-links">
                <a href="#">
                  <img src="./images/facebook.png" />
                </a>
                <a href="#">
                  <img src="./images/twitter.svg" />
                </a>
                <a href="#">
                  <img src="./images/insta.svg" />
                </a>
                <a href="#">
                  <img src="./images/youtube.svg" />
                </a>
                {/* search bar */}
                <input className="search" placeholder="Search" />
                <a href="#">
                  <img src="./images/search.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
