import React from "react";
import "./projects.css";
import curr from "../../assets/curr.png";
import stone from "../../assets/stone.png";
import port from "../../assets/port.png";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <header className="projects-header">
          <h1>Projects</h1>
        </header>

        <div className="content">
          These are the projects made by me during the learning of MERN stack
          development. I have taken help from youtube and W3Schools whenever i
          have faced difficulties.There are 2 javascript projects and 1 react
          project.
        </div>

        <div className="projects-cards">
          <div className="projects-card">
            <a href="https://ashish44git.github.io/Rock-Paper-Scissor-Games/">
              <img src={stone} alt="" />
            </a>
          </div>
          <div className="projects-card">
            {" "}
            <a href="https://ashish44git.github.io/Currency-Converter/">
              <img src={curr} alt="" />
            </a>
          </div>
          <div className="projects-card" id="port">
            <a href="https://ashish44git.github.io/my-profile/">
              <img src={port} alt="" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
