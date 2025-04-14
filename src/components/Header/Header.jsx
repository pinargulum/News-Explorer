import "../Header/Header.css"

function Header({ signinModal }) {
    return(
        <div className="header">
       
        <div className="header__logo">NewsExplorer</div>
        <div className="header__nav">
            <a href="/" className="header__home-link">Home</a>
            <button onClick={signinModal} className="header__sign-button" type="submit">Sign in</button>
        </div>
        </div>
       
    )
}

export default Header