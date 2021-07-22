import React, { useState } from "react";
import "../../styles/App.style.css";
import logo from "../../images/logo.png";
function Navbar() {
  const [bars, setBars] = useState("fa fa-bars");
  return (
    <nav className="navbar">
      <div className="container">
        <section>
          <img src={logo} alt="logo" className="logo-img" />
          <h1>ABIS</h1>
        </section>
        <section>
          <i
            className={bars}
            onClick={() => {
              if (bars === "fa fa-bars") {
                document.querySelector("ul").style.left = "0%";
                setBars("fa fa-times");
              } else {
                document.querySelector("ul").style.left = "-100%";
                setBars("fa fa-bars");
              }
            }}
          />
          <ul>
            <li>
              <a href="/" id="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutme" id="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#myservices" id="nav-link">
                Services
              </a>
            </li>
            <li id="nav-contact">
              <a href="#contact-div">Contact</a>
            </li>
          </ul>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
