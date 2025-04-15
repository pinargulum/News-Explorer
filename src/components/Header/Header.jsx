import "../Header/Header.css";
import logout from "../../assets/logout.png";
import CurrentUserContext from "../utils/contexts/CurrentUserContext";
import { createContext, useContext } from "react";
function Header({ signinModal, isLoggedIn }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="header">
      <div className="header__logo">NewsExplorer</div>
      {isLoggedIn ? (
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
        </div>
      ) : (
        <div className="user__container">
          <a
            href="/"
            className="header__home-link"
          >
            Home
          </a>
          <button
            className="saved__artical-button"
            type="submit"
          >
            Saved articles
          </button>
          <div className="user__logout">
            <p className="username">{currentUser.displayName}</p>
            <img
              src={logout}
              className="logout__image"
              type="submit"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
