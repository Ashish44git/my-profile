import React from "react";
import "./intro.css";
import introImage from "../../assets/introImage.png";
const Intro = () => {
  return (
    <>
      <section className="intro">
        <div className="introContent">
          <img src={introImage} alt="Image-Ashish" className="top " />
          <div className="bottom">
            Hello ! <br />
            <span className="name animation"> I'm Ashish Siddhartha</span>{" "}
            <br />
            <span className="role"> Website Developer </span> <br />
            <span className="para">
              I am a skilled and passionate web developer with experience in
              creating visually appealing and user-friendly websites.
            </span>
            <br />
            <a href="https://drive.google.com/file/d/1vbFAtrQXM-lWNI82UK_hk_thJkpn81aa/view?usp=sharing">
              {" "}
              <button className="hire"> Hire Me</button>{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
