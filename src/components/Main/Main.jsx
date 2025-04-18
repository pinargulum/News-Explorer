import "./Main.css";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
import About from "../About/About";
import notFound from "../../assets/notFound.png";
import Preloader from "../Preloader/Preloader.jsx";

function Main({
  isSearched,
  articles,
  handleSearch,
  isLoading,
  handleSaveArticles,
 
  handleShowMoreButton,
  visibleCount,
}) {
  const [query, setQuery] = useState("");
  function handleChange(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(query);
  }
  return (
    <main className="main">
      <section className="search__section">
        <div className="search__info">
          <div className="page__overlay" />
          <h2 className="search__title">What's going on in the world?</h2>
          <p className="search__text">
            Find the latest news on any topic and save them in your personal
            account.
          </p>

          <form
            className="search__container"
            onSubmit={handleSubmit}
          >
            <label className="search__label">
              <input
                className="search__input"
                type="text"
                value={query}
                onChange={handleChange}
                required
              ></input>
            </label>
            <button
              className="search__button"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </section>
      {isLoading && <Preloader />}
      {articles.length < 0 && (
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
      {articles === 0 && (
        <div className="error__message">
          <p className="error__text">
            Sorry, something went wrong during the request. Please try again
            later.
          </p>
        </div>
      )}
      {isSearched && (
        <section className="results__section">
          <h2 className="search__results-title">Search Rusults</h2>
          <ul className="articles__list">
            {articles.slice(0, visibleCount).map((article, index) => (
              <NewsCard
                key={index}
                article={article}
                keyword={query}
                handleSaveArticles={handleSaveArticles}
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
