import React from "react";
import "./Services.component.css";
import web from "../../images/web.png";
import mobile from "../../images/mobile.png";
import logomake from "../../images/logomake.png"
import marketing from "../../images/marketing.png"
const Services = () => {
  return (
    <>
      <div className="services-container" id="myservices">
        <section className="services-header">
          <label>WHAT I CAN PROVIDE</label>
        </section>
        <section className="servicescard-div">
          <div className="services-card">
            <img src={web} alt="web" className="services-imgweb" />
            <label>WEB APPLICATIONS</label>
          </div>
          <div className="services-card">
          <img src={mobile} alt="web" className="services-imgweb" />
            <label>MOBILE APPLICATIONS</label>
          </div>
          <div className="services-card">
          <img src={logomake} alt="web" className="services-imgweb" />
            <label>LOGO DESIGNS</label>
          </div>
          <div className="services-card">
          <img src={marketing} alt="web" className="services-imgweb" />
            <label>MARKETING</label>
          </div>
        </section>
      </div>
      <hr />
    </>
  );
};
export default Services;
