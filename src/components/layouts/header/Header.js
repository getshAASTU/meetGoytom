import React from "react";
import { GrReactjs } from "react-icons/gr";
import Navbar from "../../navbar/Navbar";
import "./header.css";

const Header = () => {
  return (
    <header className="hero">
      <div id="home" className="header-blurr">
        <div className="header-container">
          <Navbar img="about.jpg" />
          <div className="header-text">
            <h3 className="text">WEB DEVELOPER</h3>
            <p className="header-desc" style={{ color: "white" }}>
              I will help you build a website that perfectly fits your demands,
              starting from scratch upto the final deployment. This is the place
              where your designs comes to reality.
            </p>
            <a className="btn contact-btn" href="#footer">
              Contact
            </a>
          </div>
          <div className="headerJs">
            <div className="animationContainer">
              <div className="relative">
                <div className="iconContainer">
                  <GrReactjs id="jsIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
