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
        <div className="saved__news">
          <section className="saved__news-info">
            <h1 className="saved__news-title">Saved articles</h1>
            <p className="saved__news-text">
              {currentUser}, you have {savedArticles.length} saved articles
            </p>
            <p className="saved__news-keyword">
              By keywords: {displayKeywords}{" "}
              {otherCount > 0 ? `, and ${otherCount} other` : ""}
            </p>
          </section>
          <section className="card__section">
          <div className="saved__articles">
            <ul className="saved__articles-list">
              {savedArticles.slice(0, 6).map((article) => (
                <li
                  className="saved__card"
                  key={article.id}
                >
                  <img
                    className="saved__card-image"
                    src={article.urlToImage || null}
                    alt={article.title}
                  />
                  <p className="image__keyword">{article.keyword}</p>

                  <button
                    onClick={() => handleDeleteArticle(article.id)}
                    type="button"
                    className="delete__button"
                  ></button>

                  <div className="saved__card-info">
                    <h3 className="saved__card-date">{article.publishedAt}</h3>
                    <h3 className="saved__card-title">{article.title}</h3>
                    <p className="saved__card-description">
                      {article.description}
                    </p>
                  </div>
                  <p className="saved__card-source">
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
