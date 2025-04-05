import "../Search/Search.css"

function Search() {
    return(
        <div className="search__info">
        <h2 className="search__title">What's going on in the world?</h2>
        <p className="search__text">Find the latest news on any topic and save them in your personal account.</p>
        <div className="search__container">
        <input className="search__field" type="text">
        </input>
        <button className="search__button" type="button">Search</button>
        </div>
        </div>
    )
}

export default Search