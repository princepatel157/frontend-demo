import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="container">
        <div id="demo" className="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" className="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          {/* <!-- The slideshow --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/l1.jpg" alt="Los Angeles" />
            </div>
            <div className="carousel-item">
              <img src="images/l4.jpg" alt="Chicago" />
            </div>
            <div className="carousel-item">
              <img src="images/coro.jpg" alt="New York" />
            </div>
          </div>

          {/* <!-- Left and right controls --> */}
          <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
