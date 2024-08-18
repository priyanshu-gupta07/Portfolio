import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
            I'm Priyanshu Gupta, an undergraduate student from India. As a full-stack developer,
             I work with the MERN stack and Go. I'm also proficient in C++ and always eager to 
             learn new technologies. My passion for programming drives me to continually expand
              my skills and tackle diverse projects.
          </p>

          <p>
            I spend my time learning on new tech and stuff especially FullStack
            Development I consistently learn the concepts and tools behind and
            building projects around it.
          </p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
