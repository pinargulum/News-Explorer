import "../Header/SavedNewsHeader.css";
import saveout from "../../assets/saveout.png";
import React from "react";
import logout from "../../assets/logout.png";
import CurrentUserContext from "../utils/contexts/CurrentUserContext";
import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
function SavedNewsHeader({ handleLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const [isSavedMenuOpen, setSavedIsMenuOpen] = useState(false);
  const openSavedMobileMenu = () => {
    setSavedIsMenuOpen(true);
  };
  const closeSavedMobileMenu = (e) => {
    setSavedIsMenuOpen(false);
  };
  return (
    <div className="saved__news-header">
      <div className="saved__header-logo">NewsExplorer</div>
      <nav className="saved__user-container">
        <Link
          to="/"
          className="saved__header-home-link"
        >
          Home
        </Link>
        <Link
          to="/saved-news"
          className="link__text"
        >
          Saved articles
        </Link>
        <button
          className="saved__user-logout"
          onClick={handleLogout}
          type="button"
        >
          {currentUser}
          <img
            src={saveout}
            className="saved__logout-image"
            alt="Logout"
          />
        </button>
      </nav>
      <button
        onClick={openSavedMobileMenu}
        className="saved__menu-button"
        type="button"
      ></button>
      {isSavedMenuOpen && (
        <div className="saved__mobile-menu">
          <button
            onClick={closeSavedMobileMenu}
            className="saved__mobile-close-button"
            type="button"
          ></button>
          <nav className="saved__mobile-nav">
            <Link
              to="/"
              className="saved__mobile-home-link"
            >
              Home
            </Link>
            <Link
              to="/saved-news"
              className="saved__mobile-saved-text"
            >
              Saved articles
            </Link>
            <button
              className="saved__mobile-logout"
              onClick={handleLogout}
            >
              <p className="saved__username">{currentUser}</p>
              <img
                src={saveout}
                className="saved__logout-image"
                alt="Mobile Logout"
              />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
export default SavedNewsHeader;
