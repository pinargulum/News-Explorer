import "../About/About.css";
import profilePicture from "/src/assets/profilePicture.png";
import React from "react";
function About() {
  return (
    <section className="about__section">
      <img
        src={profilePicture}
        alt="author picture"
        className="author__avatar"
      />
      <div className="author__info">
        <h2 className="author__title">About the author</h2>
        <p className="about__author">
          My name is Pinar Gulum, and I am a Full-Stack Developer. I have experience
          with JavaScript, HTML, CSS, React.js, Express.js, Git Bash, and
          MongoDB.
        </p>

        <p className="about__author">
          I recently completed the TripleTen Software Engineering Bootcamp. It
          was a challenging journey, but in the end, it was absolutely worth it.
          I started the program with no prior knowledge, and I have learned
          everything from the ground up through this experience.
        </p>
      </div>
    </section>
  );
}
export default About;
