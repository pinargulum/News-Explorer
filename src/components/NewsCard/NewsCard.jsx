import { query } from "firebase/firestore";
import "../NewsCard/NewsCard.css";
import CurrentUserContext from "../utils/contexts/CurrentUserContext";
import { useContext, useState } from "react";

function NewsCard({ keyword, article, handleSaveArticles, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false)
 
  const handleSaveButton = () => {
    if (currentUser) {
    setIsSaved(true)
    handleSaveArticles(article, keyword);
    }
   
  };
  return (
    <li className="card">
      <img
        className="card__image"
        src={article.urlToImage}
        alt={article.title}
      />

      <button
        onClick={handleSaveButton}
        type="button"
        className={isSaved ? "archive__button_active" : "archive__button"}
      ></button>
    
      <div className="card__info">
        <h3 className="card__date">{article.publishedAt}</h3>
        <h3 className="card__title">{article.title}</h3>
        <p className="card__description">{article.description}</p>
      </div>
      <p className="card__source">{article.source.name}</p>
    </li>
  );
}
export default NewsCard;
