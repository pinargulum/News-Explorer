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

import Api from "../utils/api.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [results, setResults] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // function for getting the cards
  function handleSearch(query) {
    if (!query.trim()) {
      alert("please enter a keyword");
    }
    Api.getNews(query)
      .then((data) => {
        setResults(data.articles);
        setIsSearched(true);
      })
      .catch((err) => {
        console.error("Something went wrong", err);
      });
  }
  // register user
  function handleSignupForm({ email, password, username }) {
    
    Api.registerUser(email, password, username)
      .then((data) => {
        console.log("user registered");
        closeActiveModal();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  //login user
  const handleSigninForm = (email, password) => {
    if ((!email, !password)) {
      return;
    }
    Api.loginUser(email, password)
      .then((data) => {
        localStorage.setItem("token", "fake-jwt-token");
        getUserData(data);
        setIsLoggedIn(true);
        setCurrentUser(currentUser);
        closeActiveModal();
      })
      .catch(console.error);
  };

  function getUserData() {
    const token = localStorage.getItem("token");
    Api.getCurrentUser(token)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
      })
      .catch(console.error);
  }
  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data) {
      return getUserData(data);
    }
  }, []);

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
                  handleSearch={handleSearch}
                />
              }
            />
          </Routes>
          <SigninModal
            isOpen={activeModal === "signin"}
            onClose={closeActiveModal}
            signupModal={signupModal}
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
