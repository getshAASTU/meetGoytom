import React from "react";
import { GoThreeBars } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import "./navbar.css";
import { navLinks } from "../../consts/data";

const navToggle = (props) => {
  const navContainer = document.querySelector(".list-container");
  const navList = document.querySelector(".nav-list");
  const navContainerHeight = navContainer.getBoundingClientRect().height;
  const navListHeight = navList.getBoundingClientRect().height;
  const backgroundColor = "#0f172a";
  if (navContainerHeight === 0) {
    navContainer.style.height = `${navListHeight}px`;
    navContainer.style.backgroundColor = backgroundColor;
  } else {
    navContainer.style.height = 0;
    navContainer.style.backgroundColor = "transparent";
  }
};
const Navbar = (props) => {

  return (
    <nav className="navbar">
      <section className="nav-center">
        <div className="nav-header">
          <a href="#home" className="nav-logo">
            <img className="logo-img" src={`/assets/${props.img}`} alt="" />
            <span className='span'>
              <p>GOITOM</p> <FaLaptopCode id="nav-laptop" />
            </span>
          </a>
          <button onClick={navToggle} className="btn toggle-btn">
            <GoThreeBars />
          </button>
        </div>
        <div className="list-container">
          <ul className="nav-list">
            {
              navLinks.map((link)=>(
                <li key={link.id} className="nav-item">
                <a href={`#${link.id}`} className="scroll-link">
                  {link.title}
                </a>
              </li>
              ))
            }
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
