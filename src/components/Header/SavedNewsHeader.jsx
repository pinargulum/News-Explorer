import "../Header/SavedNewsHeader.css";
import saveout from "../../assets/saveout.png";
import CurrentUserContext from "../utils/contexts/CurrentUserContext";
import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
function SavedNewsHeader({ signinModal, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="saved__news-header">
      <div className="saved__header-logo">NewsExplorer</div>
      <div className="saved__header-nav">
        <a
          href="/"
          className="saved__home-link"
        >
          Home
        </a>
      
      <div className="saved__user-container">
      
          <p className="saved__artical">Saved articles</p>
      
        <div className="saved__user-logout">
          <p className="saved__username">{currentUser}</p>
          <img
            src={saveout}
            className="saved__logout"
            type="submit"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default SavedNewsHeader;
