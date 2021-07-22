import React from "react";
import "./About.component.css";
import bibek from "../../images/bibek.jpg";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import insta from "../../images/insta.png";
import git from "../../images/git.png";
const About = () => {
  return (
    <div id="aboutme">
      <div className="About-container">
        <section className="left-section">
          <img src={bibek} alt="my-img" className="my-img" />
          <label className="my-name">BIBEK KUMAR BIDARI</label>
        </section>
        <section className="about-myself">
          <label>
            I am a dedicated and enthusiastic MERN stack developer with a
            quality of team player. I push myself on every work provided with
            and show enthusiasm on learning new ideas on daily basis. I also
            classify myself as a quick learner and good listener.Programming
            languages that i have learnt:
            <br />
            <br />
            HTML&CSS &nbsp;
            <progress id="file" value="70" max="100" className="progress-tag" />
            <br />
            JAVASCRIPT &nbsp;
            <progress id="file" value="80" max="100" className="progress-tag" />
            <br />
            <span>REACTJS</span> &nbsp;
            <progress id="file" value="90" max="100" className="progress-tag" />
            <br />
            NODEJS &nbsp;
            <progress id="file" value="90" max="100" className="progress-tag" />
            <br />
            {/* REACT-NATIVE &nbsp;
            <progress id="file" value="60" max="100" className="progress-tag" />
            <br /> */}
            Redux &nbsp;
            <progress id="file" value="80" max="100" className="progress-tag" />
          </label>
        </section>
        <section className="contact-div">
          <img src={facebook} alt="facebook" className="img-contact" />
          <img src={twitter} alt="twitter" className="img-contact" />
          <img src={insta} alt="insta" className="img-contact" />
          <img src={git} alt="git" className="img-contact" />
        </section>
      </div>
    </div>
  );
};
export default About;
