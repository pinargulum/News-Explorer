import "./Main.css";
import { useState } from "react";
import React from "react";
import NewsCard from "../NewsCard/NewsCard.jsx";
import About from "../About/About";
import notFound from "../../assets/notFound.png";
import Preloader from "../Preloader/Preloader.jsx";


function Main({
  isSearched,
  articles,
  isLoading,
  handleSaveArticles,
  savedArticles,
  handleArticlesSearch,
  handleShowMoreButton,
  visibleCount,
  handleDeleteArticle,
  error,
}) {
  const [query, setQuery] = useState("");
  return (
    <main>
    

      {isLoading && <Preloader />}
      {articles.length <= 0 && (
        <section className="message__section">
          <img
            className="not__found-image"
            src={notFound}
            alt="not-found"
          />
          <h3 className="message__title">Nothing found</h3>
          <p className="message__text">
            Sorry, but nothing matched your search terms.
          </p>
        </section>
      )}
      {error && (
        <div className="error__message">
          <p className="error__text">
            Sorry, something went wrong during the request. Please try again
            later.
          </p>
        </div>
      )}
      {isSearched && (
        <section className="main__cards">
          {articles.length > 0 && (
            <h2 className="search__results-title">Search Results</h2>
          )}
          <ul className="results__grid">
            {articles.slice(0, visibleCount).map((article, index) => (
              <NewsCard
                key={index}
                article={article}
                keyword={query}
                handleSaveArticles={handleSaveArticles}
                savedArticles={savedArticles}
                handleDeleteArticle={handleDeleteArticle}
              />
            ))}
          </ul>
          {visibleCount < articles.length && (
            <button
              onClick={handleShowMoreButton}
              className="show__more-button"
              type="button"
            >
              Show more
            </button>
          )}
        </section>
      )}

      <About />
    </main>
  );
}

export default Main;
