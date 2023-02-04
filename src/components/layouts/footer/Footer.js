import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { BsLinkedin, BsTelephoneOutbound, BsGlobe2 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import "./footer.css";


const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-list">
          <ul>
            <li>
              <FaFacebookSquare  className="footerIcon" />
              <span>Facebook</span>
            </li>
            <li>
              <GrTwitter  className="footerIcon"  />
              <span>Twitter</span>
            </li>
            <li>
              <FaInstagramSquare  className="footerIcon" />
              <span>Instagram </span>
            </li>
            <li>
              <BsLinkedin  className="footerIcon" />
              <span>LinkedIn</span>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <ul>
            <li>
              <GoLocation  className="footerIcon"  />
              <span>Addis Ababa</span>
            </li>
            <li>
              <BsTelephoneOutbound  className="footerIcon" />
              <span>+251942269990</span>{" "}
            </li>
            <li>
              <BsGlobe2  className="footerIcon"  />
              <span>www.meetgetsh.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
