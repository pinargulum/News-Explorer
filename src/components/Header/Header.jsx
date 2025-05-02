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
            <Link to="/saved-news">
              <p className="saved__artical-text">Saved articles</p>
            </Link>
            <button
              className="user__logout"
              onClick={handleLogout}
              type="button"
            >
              <p className="username">{currentUser}</p>
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
              <Link to="/saved-news">
                <p className="mobile__saved-text">Saved articles</p>
              </Link>
              <button
                className="mobile__logout"
                onClick={handleLogout}
              >
                <p className="mobile__username">{currentUser}</p>
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
    </div>
  );
}

export default Header;
