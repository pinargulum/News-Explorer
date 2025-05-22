import "../Footer/Footer.css";
import fb from "/src/assets/fb.png";
import Github from "/src/assets/Github.png";
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <ul className="footer__links">
          <li className="footer__link-item">
            <a
              href="/"
              className="footer__link"
            >
              Home
            </a>
          </li>
          <li className="footer__link-item">
            <a
              href="https://tripleten.com"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              TripleTen
            </a>
          </li>
        </ul>

        <ul className="footer__social">
          <li>
            <a
              href="https://github.com/pinargulum/News-Explorer.git"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Github}
                alt="GitHub"
                className="social__icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={fb}
                alt="Facebook"
                className="social__icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
