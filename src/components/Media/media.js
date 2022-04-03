import React from "react";
import "./media.css";

const media = () => {
  return (
    <>
      <section className="container social">
        <div className="row">
          <div className="col-md-6 left">
            <h3>
              <u>Infographics</u>
            </h3>
            <div id="demo2" className="carousel slide" data-ride="carousel">
              {/* <!-- Indicators --> */}
              <ul className="carousel-indicators">
                <li
                  data-target="#demo2"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#demo2" data-slide-to="1"></li>
                <li data-target="#demo2" data-slide-to="2"></li>
              </ul>

              {/* <!-- The slideshow --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="images/news2.jpg" alt="Los Angeles" />
                </div>
                <div className="carousel-item">
                  <img src="images/n2.jpg" alt="Chicago" />
                </div>
                <div className="carousel-item">
                  <img src="images/n3.jpg" alt="New York" />
                </div>
              </div>

              {/* <!-- Left and right controls --> */}
              <a
                className="carousel-control-prev"
                href="#demo2"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#demo2"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>

          {/* right col */}
          <div className="col-md-6 right">
            <h3>
              <u>Social Media</u>
            </h3>
            <div className="iframe">
              <iframe
                width="500"
                height="600"
                src="https://www.youtube.com/embed/ohpFb7tbof0?start=8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default media;
