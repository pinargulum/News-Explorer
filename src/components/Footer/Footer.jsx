import "../Footer/Footer.css";
import fb from "/src/assets/fb.png";
import Github from "/src/assets/Github.png";
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
          href="/"
          className="footer__link"
        >
          TripleTen
        </a>
        <img
          src={fb}
          alt="facebook"
          className="footer__link"
        />
        <img
          src={Github}
          alt="Github"
          className="footer__link"
        />
      </div>
    </div>
  );
}
export default Footer;
