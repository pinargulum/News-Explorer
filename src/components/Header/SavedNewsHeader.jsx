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
      <div className="saved__header-nav">
        <Link
          to="/"
          className="saved__home-link"
        >
          Home
        </Link>

        <div className="saved__user-container">
          <p className="saved__artical">Saved articles</p>

          <div
            className="saved__user-logout"
            onClick={handleLogout}
          >
            <p className="saved__username">{currentUser}</p>
            <img
              src={saveout}
              className="saved__logout"
              type="submit"
            />
          </div>
        </div>
      </div>
      <button
        onClick={openSavedMobileMenu}
        className="saved__menu-button"
        type="button"
      ></button>
      {isSavedMenuOpen && (
        <div className="mobile__menu">
          <div className="menu__nav">
            <button
              onClick={closeSavedMobileMenu}
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
  );
}

export default SavedNewsHeader;
