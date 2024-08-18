import React from "react";
import Connection from "../../assets/images/connections.svg";
import github from "../../assets/images/socials/github.png";
import Instagram from "../../assets/images/socials/instagram.png";
import LinkedIn from "../../assets/images/socials/linkedin.png";
import twitter from "../../assets/images/socials/twitter.png"
import "./Contact.scss";

const Contact = () => {
  return (
    <section
      className="app__contact"
      id="contacts"
      data-aos="fade"
      data-aos-offset="100"
      data-aos-delay="500"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="app__contact-container">
        <div className="app__contact-container_contacts">
          <p className="app__contact-container_contacts-touch">
            - Get in Touch
          </p>
          <h2>Let's create progress together</h2>
          <p>
            For all inquiries, you can contact and message me on any of the
            specified social medias below.
          </p>
          <ul className="app__contact-container_contacts-links">
            <a href="https://github.com/priyanshu-gupta07" target="blank">
              <img src={github} alt="" />
              priyanshu-gupta07
            </a>
            <a href="https://www.instagram.com/_priyanshu47" target="blank">
              <img src={Instagram} alt="" />
              _priyanshu47
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-gupta-97660b273/"
              target="blank"
            >
              <img src={LinkedIn} alt="" />
              Priyanshu gupta
            </a>
            <a
              href="https://twitter.com/Priyanshug0718"
              target="blank"
            >
              <img src={twitter} alt="" />
              Priyanshug0718
            </a>
          </ul>
        </div>
        <div className="app__contact-container_image">
          <img src={Connection} alt="Cennections" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
