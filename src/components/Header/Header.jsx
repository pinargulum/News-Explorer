import "../Header/Header.css";
import logout from "../../assets/logout.png";
import CurrentUserContext from "../utils/contexts/CurrentUserContext";
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
function Header({ signinModal, isLoggedIn, handleLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const onClick = () => {
    if (!isLoggedIn && !currentUser) {
      handleLogout();
      navigate("/");
    }
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
        </div>
      )}
    </div>
  );
}

export default Header;
