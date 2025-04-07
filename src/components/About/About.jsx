import "../About/About.css";
import profilePicture from "/src/assets/profilePicture.png";

function About() {
  return (
    <div className="author__section">
      <img
        src={profilePicture}
        alt="author picture"
        className="author__avatar"
      />
      <div className="author__info">
        <h2 className="author__title">About the author</h2>
        <p className="about__author">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>

        <p className="about__author">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}
export default About;
