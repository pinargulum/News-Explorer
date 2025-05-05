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
  handleArticlesSearch,
  isLoading,
  handleSaveArticles,
  savedArticles,
  handleShowMoreButton,
  visibleCount,
  handleDeleteArticle,
  error,
}) {
  const [query, setQuery] = useState("");
  function handleChange(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleArticlesSearch(query);
  }
  return (
    <section className="main">
      <div className="search__seaction">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form
          className="search__form"
          onSubmit={handleSubmit}
        >
          <input
            className="search__form-input"
            type="text"
            value={query}
            onChange={handleChange}
            required
          ></input>

          <button
            className="search__form-button"
            type="submit"
          >
            Search
          </button>
        </form>
</div>
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
          <section className="results__section">
            {articles.length > 0 && (
            <h2 className="search__results-title">Search Rusults</h2>
            )}
            <ul className="articles__list">
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
    </section>
  );
}

export default Main;
