import React from "react";
import "./About.css";
import Boot from "../../assets/boot.png";
import Html from "../../assets/html.png";
import css from "../../assets/css.png";
import react from "../../assets/reactt.png";
import js from "../../assets/js.png";
import node from "../../assets/node.png";
import c from "../../assets/git.png";

const About = () => {
  return (
    <>
      <section className="About">
        <header>
          <h1 className="about-header">About</h1>
        </header>
        <div className="para-about">
          My name is Ashish Siddhartha currently pursuing my B.tech Final year
          in Electronics & communication Engineering from Madan Mohan Malaviya
          university of technology. I aspire to become a{" "}
          <span>fullstack developer</span> for which i have aquired these
          skills. I am looking forward for <span>Internship</span> and full time{" "}
          <span>Placement</span> opportunities.
        </div>
        <div className="skill-cards">
          <div className="skill-card">
            HTML
            <img src={Html} alt="" />
          </div>
          <div className="skill-card">
            CSS
            <img src={css} alt="" />
          </div>
          <div className="skill-card">
            JavaScript
            <img src={js} alt="" />
          </div>
          <div className="skill-card">
            React JS
            <img src={react} alt="" />
          </div>
          <div className="skill-card">
            Bootstrap
            <img src={Boot} alt="" />
          </div>
          <div className="skill-card" id="node">
            Node js
            <img src={node} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
