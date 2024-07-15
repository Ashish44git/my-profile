import React, { useRef } from "react";
import "./more.css";
import linkedin from "../../assets/link.webp";
import insta from "../../assets/insta.png";
import emailjs from "@emailjs/browser";
import git from "../../assets/git.png";
const More = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_awzqbxd", "template_dad067s", form.current, {
        publicKey: "Eeo7BwFmIIaL_8b4E",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="more">
        <header>
          <h1 className="more-header">Contact Me</h1>
        </header>
        <form
          className="form-contact"
          ref={form}
          onSubmit={sendEmail}
          autocomplete="off"
        >
          <input
            type="text"
            placeholder="Your name"
            className="contact-input"
            name="from_name"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            className="contact-input"
            name="your_email"
            required
          />
          <textarea
            name="message"
            placeholder="Your message (minimum 50 characters)"
            className="contact-input2"
            required minLength={50}
          />
          <button type="submit" value="Send" className="submit">
            {" "}
            Submit
          </button>
        </form>
        <div className="logo-container">
          <a href="https://www.linkedin.com/in/ashish-siddhartha-437513233/">
            {" "}
            <img src={linkedin} alt="" className="logo-icon" />
          </a>
          <a href="https://www.instagram.com/ashish._.sid/">
            {" "}
            <img src={insta} alt="" className="logo-icon" />
          </a>
          <a href="https://github.com/Ashish44git">
            {" "}
            <img src={git} alt="" className="logo-icon" />
          </a>
        </div>
      </section>
    </>
  );
};

export default More;
