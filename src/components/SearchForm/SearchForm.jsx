import "./SearchForm.css"
import { useState, useEffect } from "react";


function SearchForm({ handleSearch }) {
    const [query, setQuery] = useState("");
    function handleChange(e) {
      setQuery(e.target.value);
    }
    function handleSubmit(e) {
      e.preventDefault();
      handleSearch(query);
    }
    return (
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
    );
  }
  
  export default SearchForm;
  