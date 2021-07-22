import React from "react";
import "./Footer.common.css";
const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-container">
        <section className="section-1">
          <label>Bibek Kumar Bidari</label>
          <label>Duhabi-3,Sunsari</label>
          <label>Islington, Kathmandu</label>
        </section>
        <section className="section-2">
          <label>MADE WITH &hearts; BY BIBEK KUMAR BIDARI</label>
        </section>
        <section className="section-3">
        <label>Terms and Conditions</label>
        <label>bidaribibek7@gmail.com</label>
        <label>+9779819342206</label>
        </section>
      </div>
      {/* <section style={{ marginTop: "10px" }}></section> */}
    </div>
  );
};
export default Footer;
