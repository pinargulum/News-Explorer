import "./SearchForm.css";
import React, { useState } from "react";
import { getNews } from "../../utils/api";
import NewsCard from "../NewsCard/NewsCard.jsx";

function SearchForm() {
  const [query, setquery] = useState("");
  const [results, setresults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      alert("please enter a keyword");
      return;
    }
    const articles = getNews(query);
    setresults(articles);
    setIsSearched(true);
  };

  return (
    <div className="search__section">
      <div className="page__overlay" />
      <div className="search__info">
        <h2 className="search__title">What's going on in the world?</h2>
        <p className="search__text">
          Find the latest news on any topic and save them in your personal
          account.
        </p>

        <form
          className="search__container"
          onSubmit={handleSearch}
        >
          <input
            className="search__field"
            type="text"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          ></input>
          <button
            className="search__button"
            type="submit"
          >
            Search
          </button>
        </form>
        {isSearched && (
          <div className="results">
            {results.length > 0 ? (
              results.map((article, index) => (
                <NewsCard
                  key={index}
                  title={article.title}
                  description={article.description}
                  image={article.urlToImage}
                  url={article.url}
                />
              ))
            ) : (
              <p>No results found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchForm;
