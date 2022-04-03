import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="container footer">
        <div className="row">
          {/* col-1 */}
          <div className="col-md-3 col1">
            <h1>Logo</h1>
          </div>
          {/* col-2 */}
          <div className="col-md-3 col2">
            <h3>Social links</h3>
            <ul>
              <li>Facebook</li>
              <li>Facebook</li>
              <li>Facebook</li>
              <li>Facebook</li>
              <li>Facebook</li>
            </ul>
          </div>
          {/* col-3 */}
          <div className="col-md-3 col3">
            <h3>Downloads</h3>
            <ul>
              <li>PDF</li>
              <li>Photo Galary</li>
              <li>Video Gallery</li>
              <li>Achievements</li>
            </ul>
          </div>
          {/* col-4 */}
          <div className="col-md-3 col3">
            <h3>Infographics</h3>
            <ul>
              <li>Quotes</li>
              <li>Initiatives</li>
              <li>Comparison</li>
              <li>Achievements</li>
              <li>Sankalp Patra 2019-2024</li>
              <li>Corona virus</li>
              <li>Budget 2022-23</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
