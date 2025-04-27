import { query } from "firebase/firestore";
import "../NewsCard/NewsCard.css";
import CurrentUserContext from "../utils/contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";

function NewsCard({
  keyword,
  article,
  handleSaveArticles,
  handleDeleteArticle,
  savedArticles,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [isHoverd, setIsHoved] = useState(false);

  useEffect(() => {
    const saved = savedArticles.find((saved) => saved.title === article.title);
    setIsSaved(!!saved);
  }, [savedArticles, article.title]);

  const handleSaveButton = () => {
    if (isSaved) {
      const saved = savedArticles.find(
        (saved) => saved.title === article.title,
      );
      if (saved) {
        handleDeleteArticle(saved.id);
      }
    } else {
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
      <div
        className="button__container"
        onMouseEnter={() => setIsHoved(true)}
        onMouseLeave={() => setIsHoved(false)}
      >
        {!currentUser && isHoverd && (
          <p className="button__alert">Please sign in to save</p>
        )}
        <button
          onClick={handleSaveButton}
          type="button"
          className={isSaved ? "archive__button_active" : "archive__button"}
        ></button>
      </div>
      <div className="card__info">
        <h3 className="card__date">{article.publishedAt}</h3>
        <h3 className="card__title">{article.title}</h3>
        <p className="card__description">{article.description}</p>
        <p className="card__source">{article.source.name}</p>
      </div>
    </li>
  );
}
export default NewsCard;
