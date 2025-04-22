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
          className="footer__link"
        >
          Home
        </a>
        <a
          href="https://tripleten.com"
          className="footer__link"
        >
          TripleTen
        </a>
        <img
          src={fb}
          alt="facebook"
          className="footer__link"
        />
        <Link to="https://github.com/pinargulum/News-Explorer.git">
        <img
          src={Github}
          alt="Github"
          className="footer__link"
        />
        </Link>
      </div>
    </div>
  );
}
export default Footer;