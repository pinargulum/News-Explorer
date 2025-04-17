import "../App/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header";
import SavedNews from "../SavedNews/SavedNews.jsx";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";
import Footer from "../Footer/Footer";
import CurrentUserContext from "../utils/contexts/CurrentUserContext.jsx";
import {
  registerUser,
  loginUser,
  fetchArticles,
  fetchUserSavedArticles,
  deleteArticles,
} from "../utils/firebaseAuth.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";

import Api from "../utils/api.js";
import { collection } from "firebase/firestore";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [savedArticles, setSavedArticles] = useState([{}]);

  function handleSearch(query) {
    if (!query.trim()) {
      alert("please enter a keyword");
    }
    setIsLoading(true);
    setError("");
    setIsSearched(false);
    Api.getNews(query)
      .then((data) => {
        setIsLoading(false);
        setArticles(data.articles);
        setIsSearched(true);
      })
      .catch((err) => {
        console.error("Something went wrong", err);
      });
  }

  

  const handleSaveArticle = async (article, keyword) => {
    if (!currentUser) {
      alert("please signin");
      return;
    }

    fetchArticles(article, keyword)
      .then((data) => {
        setSavedArticles([{ ...article, keyword, id: data.article }]);
      })
      //setIsLoggedIn(true)
      .catch((err) => {
        console.error("Something went wrong", err);
      });
  };

  useEffect(() => {
    const auth = getAuth();
    const userCards = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserSavedArticles(user.uid).then((data) => {
          setSavedArticles(data);
        });
      }
    });
    return () => userCards;
  }, [isLoggedIn]);

  /// function for getting the cards

  /// Modals
  const signinModal = () => {
    setActiveModal("signin");
  };
  const signupModal = () => {
    setActiveModal("signup");
  };
  const confirmationModal = () => {
    setActiveModal("confirmation");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  /// User
  //signup user
  function handleSignupForm(email, password, username) {
    registerUser(email, password, username)
      .then((userCredential) => {
        console.log("user created", userCredential.user);
        console.log("userNameSet:", userCredential.user.displayName);
        closeActiveModal();
        confirmationModal();
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
  // get current user
  useEffect(() => {
    const getUsername = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.displayName);
      } else {
        setCurrentUser(null);
      }
    });
    return getUsername;
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header
            signinModal={signinModal}
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  articles={articles}
                  isSearched={isSearched}
                  isLoading={isLoading}
                  handleSearch={handleSearch}
                  handleSaveArticle={handleSaveArticle}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <SavedNews
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                />
              }
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
          <ConfirmationModal
            isOpen={activeModal === "confirmation"}
            onClose={closeActiveModal}
            signinModal={signinModal}
          />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
