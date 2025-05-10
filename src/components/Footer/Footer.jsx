import "../Footer/Footer.css";
import fb from "/src/assets/fb.png";
import Github from "/src/assets/Github.png";
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2024 Supersite, Powered by News API
      </p>

      <nav className="footer__nav">
        <a href="/" className="footer__link">Home</a>
        <a
          href="https://tripleten.com"
          className="footer__link"
          target="_blank"
          rel="noreferrer"
        >
          TripleTen
        </a>
      </nav>

      <ul className="footer__social">
        <li>
          <a
            href="https://github.com/pinargulum/News-Explorer.git"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="GitHub" className="social__icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={fb} alt="Facebook" className="social__icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
