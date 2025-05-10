import "../Header/Header.css";
import React from "react";
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
    <header className="header">
      <h1 className="header__logo">NewsExplorer</h1>
      {!currentUser ? (
        <>
          <nav className="header__nav">
            <Link
              to="/"
              className="header__home-link"
            >
              Home
            </Link>
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
          </nav>
          {isMenuOpen && (
            <div className="mobile__menu">
              <button
                onClick={closeMobileMenu}
                className="mobile__close-button"
                type="button"
              ></button>
              <nav className="mobile__nav">
                <Link
                  to="/"
                  className="mobile__home-link"
                >
                  Home
                </Link>
                <button
                  onClick={signinModal}
                  className="mobile__sign-button"
                  type="submit"
                >
                  Sign in
                </button>
              </nav>
            </div>
          )}
        </>
      ) : (
        <>
          <nav className="user__container">
            <Link
              to="/"
              className="header__home-link"
            >
              Home
            </Link>
            <Link 
            to="/saved-news"
            className="saved__artical-text">
            Saved articles
            </Link>
            <button
              className="user__logout"
              onClick={handleLogout}
              type="button"
            >
              {currentUser}
              <img
                src={logout}
                className="logout__image"
                alt="Logout"
              />
            </button>
            
          </nav>
          <button
              onClick={openMobileMenu}
              className="menu__button"
              type="button"
            ></button>
          {isMenuOpen && (
            <div className="mobile__menu">
              <button
                onClick={closeMobileMenu}
                className="mobile__close-button"
                type="button"
              ></button>
              <nav className="mobile__nav">
              <Link
                to="/"
                className="mobile__home-link"
              >
                Home
              </Link>
              <Link to="/saved-news"
                className="mobile__saved-text">
                Saved articles
              </Link>
              <button
                className="mobile__logout"
                onClick={handleLogout}
              >
                {currentUser}
                <img
                  src={logout}
                  className="mobile__logout-image"
                  alt="Mobile Logout"
                />
              </button>
              </nav>
            </div>
          )}
        </>
      )}
    </header>
  );
}

export default Header;
