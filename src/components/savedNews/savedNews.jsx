import "./SavedNews.css";
import CurrentUserContext from "../utils/contexts/CurrentUserContext";
import SavedNewsHeader from "../Header/SavedNewsHeader";
import { useContext, useState } from "react";

function SavedNews({
  savedArticles,
  handleDeleteArticle,
  handleLogout,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const keywords = [
    ...new Set(savedArticles.map((article) => article.keyword)),
  ];
  const displayKeywords = keywords.slice(0, 2).join(", ");
  const otherCount = keywords.length - 2;
  return (
    <main>
      {isLoggedIn && (
        <div className="saved-news">
          <section className="saved-news__info">
            <h1 className="saved-news__title">Saved articles</h1>
            <p className="saved-news__text">
              {currentUser}, you have {savedArticles.length} saved articles
            </p>
            <p className="saved-news__keyword">
              By keywords: {displayKeywords}{" "}
              {otherCount > 0 ? `, and ${otherCount} other` : ""}
            </p>
          </section>
          <section className="saved-card">
            <div className="saved-card__articles">
              <ul className="saved-card__list">
                {savedArticles.slice(0, 6).map((article) => (
                  <li
                    className="saved-card__list-item"
                    key={article.id}
                  >
                    <div className="saved-card__delete-wrapper">
                    <p className="saved-card__delete-text">
                        Remove from saved
                      </p>
                      <button
                        onClick={() => handleDeleteArticle(article.id)}
                        type="button"
                        className="saved-card__delete-button"
                      ></button>
                     
                    </div>
                    <img
                      className="saved-card__image"
                      src={article.urlToImage || null}
                      alt={article.title}
                    />
                    <p className="saved-card__keyword">{article.keyword}</p>
                    <div className="saved-card__info">
                      <h3 className="saved-card__date">
                        {article.publishedAt}
                      </h3>
                      <h3 className="saved-card__title">{article.title}</h3>
                      <p className="saved-card__description">
                        {article.description}
                      </p>
                    </div>
                    <p className="saved-card__source">
                      {article.source?.name || article.source}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
export default SavedNews;