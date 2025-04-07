import "../Header/Header.css"

function Header() {
    return(
        <div className="header">
        < div className="header__container">
        <div className="header__logo">NewsExplorer</div>
        <div className="header__nav">
            <a href="/" className="header__home-link">Home</a>
            <button className="header__sign-button" type="button">Sign in</button>
        </div>
        </div>
        </div>
    )
}

export default Header