import "../App/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";
import Footer from "../Footer/Footer";
import CurrentUserContext from "../utils/contexts/CurrentUserContext.jsx";
import { registerUser, loginUser } from "../utils/firebaseAuth.js";

import Api from "../utils/api.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [results, setResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // function for getting the cards
  function handleSearch(query) {
    if (!query.trim()) {
      alert("please enter a keyword");
    }
    setIsLoading(true);
    seterror("");
    setIsSearched(false);
    Api.getNews(query)
      .then((data) => {
        setIsLoading(false);
        setResults(data.articles);
        setIsSearched(true);
      })
      .catch((err) => {
        console.error("Something went wrong", err);
      });
  }
  // register user

  function handleSignupForm(email, password, username) {
    registerUser(email, password, username)
      .then((userCredential) => {
        console.log("user created", userCredential.user);
        console.log("userNameSet:", userCredential.user.displayName);

        closeActiveModal();
      })
      .catch((err) => {
        console.error("Signup error:", err.code, err.message);
      });
  }
  //login user
  const handleSigninForm = (email, password) => {
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User logged in:", user);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Signin error:", err.code, err.message);
      });
  };

  const signinModal = () => {
    setActiveModal("signin");
  };
  const signupModal = () => {
    setActiveModal("signup");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header signinModal={signinModal} />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  results={results}
                  isSearched={isSearched}
                  isLoading={isLoading}
                  handleSearch={handleSearch}
                />
              }
            />
            <Route
              path="/signup"
              element={<SigninModal />}
            />
          </Routes>
          <SigninModal
            isOpen={activeModal === "signin"}
            onClose={closeActiveModal}
            signupModal={signupModal}
            handleSigninForm={handleSigninForm}
          />
          <SignupModal
            isOpen={activeModal === "signup"}
            onClose={closeActiveModal}
            signinModal={signinModal}
            handleSignupForm={handleSignupForm}
          />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
