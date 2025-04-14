import "./Main.css";
import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm.jsx";
import NewsCard from "../NewsCard/NewsCard.jsx";
import About from "../About/About";
import notFound from "../../assets/notFound.png";
import Preloader from "../Preloader/Preloader.jsx";

function Main({ isSearched, results, handleSearch, isLoading }) {
  const [visibleCount, setVisibleCount] = useState(3);
  function addcards() {
    setVisibleCount(visibleCount + 3);
  }

  return (
    <main className="main">
      <section className="search__section">
        <SearchForm handleSearch={handleSearch} />
      </section>
      {isLoading && <Preloader />}
      {results.length < 0 && (
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
       {results === 0 && (
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
            {results.slice(0, visibleCount).map((result, index) => (
              <NewsCard
                key={index}
                title={result.title}
                description={result.description}
                urlToImage={result.urlToImage}
                publishedAt={result.publishedAt}
                source={result.source}
              />
            ))}
          </ul>
          {visibleCount < results.length && (
            <button
              onClick={addcards}
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
