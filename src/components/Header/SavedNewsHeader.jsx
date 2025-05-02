import "../Header/SavedNewsHeader.css";
import saveout from "../../assets/saveout.png";
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
      <nav className="saved__header-nav">
        <Link
          to="/"
          className="saved__home-link"
        >
          Home
        </Link>

        <div className="saved__user-container">
          <p className="saved__artical">Saved articles</p>

          <button
            className="saved__user-logout"
            onClick={handleLogout}
            type="button"
          >
            <p className="saved__username">{currentUser}</p>
            <img
              src={saveout}
              className="saved__logout"
             alt="Logout"
            />
          </button>
        </div>
      </nav>
      <button
        onClick={openSavedMobileMenu}
        className="saved__menu-button"
        type="button"
      ></button>
      {isSavedMenuOpen && (
        <div className="mobile__menu">
          <button
            onClick={closeSavedMobileMenu}
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
    </div>
  );
}

export default SavedNewsHeader;
