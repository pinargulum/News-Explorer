import "../Header/Header.css";
import logout from "../../assets/logout.png";
import CurrentUserContext from "../utils/contexts/CurrentUserContext";
import icon from "../../assets/icon.png";
import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";

function Header({ signinModal, isLoggedIn, handleLogout }) {
  const currentUser = useContext(CurrentUserContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMobileMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMobileMenu = (e) => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="header__logo">NewsExplorer</div>
      {!currentUser ? (
        <div className="header__nav">
          <a
            href="/"
            className="header__home-link"
          >
            Home
          </a>
          <button
            onClick={signinModal}
            className="header__sign-button"
            type="submit"
          >
            Sign in
          </button>
          <button
            onClick={openMobileMenu}
            className="menu__button"
            type="button"
          ></button>
          {isMenuOpen && (
            <div className="mobile__menu">
              <div className="menu__nav">
                <button
                  onClick={closeMobileMenu}
                  className="menu__close-button"
                  type="button"
                ></button>

                <a
                  href="/"
                  className="menu__home-link"
                >
                  Home
                </a>
                <button
                  onClick={signinModal}
                  className="menu__sign-button"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="user__container">
          <Link
            to="/"
            className="header__home-link"
          >
            Home
          </Link>
          <Link to="/saved-news">
            <p className="saved__artical-text">Saved articles</p>
          </Link>
          <div
            className="user__logout"
            onClick={handleLogout}
          >
            <p className="username">{currentUser}</p>
            <img
              src={logout}
              className="logout__image"
            />
          </div>
          <button
            onClick={openMobileMenu}
            className="menu__button"
            type="button"
          ></button>

          {isMenuOpen && (
            <div className="mobile__menu">
              <div className="menu__nav">
                <button
                  onClick={closeMobileMenu}
                  className="menu__close-button"
                  type="button"
                ></button>

                <a
                  href="/"
                  className="menu__home-link"
                >
                  Home
                </a>
                <Link to="/saved-news">
                  <p className="saved__text">Saved articles</p>
                </Link>
                <div
                  className="logout"
                  onClick={handleLogout}
                >
                  <p className="username">{currentUser}</p>
                  <img
                    src={logout}
                    className="logout__image"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;