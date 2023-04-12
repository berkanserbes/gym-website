import React from "react";
import aboutimg from "../assets/images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimg} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem
          ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem
          ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
