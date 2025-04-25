import "../Header/SavedNewsHeader.css";
import saveout from "../../assets/saveout.png";
import CurrentUserContext from "../utils/contexts/CurrentUserContext";
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
function SavedNewsHeader({ handleLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const [isSavedMenuOpen, setIsSavedMenuOpen] = useState(false);
  const openSavedMobileMenu = () => {
    setIsSavedMenuOpen(true);
  };
  const closeSavedMobileMenu = (e) => {
    setIsSavedMenuOpen(false);
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
            className="saved__mobile-menu-button"
            type="button"
          ></button>

          <div className="saved__mobile-menu">
            <div className="saved__menu-nav">
              <button
                onClick={closeSavedMobileMenu}
                className="saved__close-button"
                type="button"
              ></button>

              <a
                href="/"
                className="mobile__saved-home"
              >
                Home
              </a>

              <p className="mobile__saved-artical">Saved articles</p>

              <div
                className="saved__user-logout"
                onClick={handleLogout}
              >
                <p className="mobile__username">{currentUser}</p>
                <img
                  src={saveout}
                  className="mobile__logout"
                  type="submit"
                />
              </div>
            </div>
          </div>
     
    </div>
  );
}

export default SavedNewsHeader;
