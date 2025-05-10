import "../SearchForm/SearchForm.css";
import React from "react";
import { useState, useEffect } from "react";
const SearchForm = ({ handleArticlesSearch }) => {
  const [query, setQuery] = useState("");
  function handleChange(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleArticlesSearch(query);
  }
  return (
    <section className="search__form">
    <div className="search__form-container">
      <h1 className="search__form-title">What's going on in the world?</h1>
      <p className="search__form-subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form
        className="search__form-content"
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
    </section>
  );
};
export default SearchForm;
