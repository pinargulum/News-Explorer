import "./SavedNews.css";
import CurrentUserContext from "../utils/contexts/CurrentUserContext";
import SavedNewsHeader from "../Header/SavedNewsHeader";
import { useContext } from "react";

function SavedNews({
  savedArticles,
  handleDeleteArticle,
  handleLogout,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <>
      {isLoggedIn && (
        <div className="saved__news">
          <SavedNewsHeader handleLogout={handleLogout} />
          <div className="saved__news-info">
            <h2 className="saved__news-title">Saved articles</h2>
            <p className="saved__news-text">
              {currentUser}, you have {savedArticles.length} saved articles
            </p>
            <p className="saved__news-keyword">By keywords: {savedArticles.keyword}</p>
          </div>
          <div className="saved__news-articles">
            <ul className="saved__articles-list">
              {savedArticles.slice(0, 6).map((article) => (
                <li
                  className="card"
                  key={article.id}
                >
                  <img
                    className="card__image"
                    src={article.urlToImage || null}
                    alt={article.title}
                  />
                  <p className="image__text">{article.keyword}</p>

                  <button
                    onClick={() => handleDeleteArticle(article.id)}
                    type="button"
                    className="delete__button"
                  ></button>

                  <div className="saved__cards-info">
                    <h3 className="card__date">{article.publishedAt}</h3>
                    <h3 className="card__title">{article.title}</h3>
                    <p className="card__description">{article.description}</p>
                    <p className="card__source">
                    {article.source?.name || article.source}
                  </p>
                  </div>
                 
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
export default SavedNews;
