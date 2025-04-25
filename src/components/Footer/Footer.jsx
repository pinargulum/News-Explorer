import "../Footer/Footer.css";
import fb from "/src/assets/fb.png";
import Github from "/src/assets/Github.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
     <h3 className="footer__year">© 2024 Supersite, Powered by News API</h3>
      <div className="footer__nav">
      
        <a
          href="/"
          className="home"
        >
          Home
        </a>
        <a
          href="https://tripleten.com"
          className="tripleten"
        >
          TripleTen
        </a>
       
        <Link to="https://github.com/pinargulum/News-Explorer.git">
        <img
          src={Github}
          alt="Github"
          className="github"
        />
        </Link>
        <img
          src={fb}
          alt="facebook"
          className="facebook"
        />
      </div>
    </div>
  );
}
export default Footer;