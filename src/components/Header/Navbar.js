import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="row nav-row">
            <div className="col-xs-12 nav-items">
              <ul className="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Downloads</li>
                <li>In Media</li>
                <li>Connect</li>
                <li>Events</li>
                <li>Infographics</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
