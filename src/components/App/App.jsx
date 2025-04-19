import "../App/App.css";
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../Main/Main.jsx";
import Header from "../Header/Header";
import SavedNewsHeader from "../Header/SavedNewsHeader.jsx";
import SavedNews from "../SavedNews/SavedNews.jsx";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";
import Footer from "../Footer/Footer";
import CurrentUserContext from "../utils/contexts/CurrentUserContext.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";
import { signOut } from "firebase/auth";

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

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([6]);
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  function handleShowMoreButton() {
    setVisibleCount((prev) => prev + 3);
  }

  const handleArticlesSearch = async (query) => {
    if (!query.trim()) {
      alert("please enter a keyword");
    }
    setIsLoading(true);
    setError("");
    setIsSearched(false);
    await Api.getNews(query)
      .then((data) => {
        const filteredArticles = data.articles.filter((article) => 
          article.title?.toLowerCase().includes(query.toLowerCase())
        
        );
       
        setIsLoading(false);
        setArticles(filteredArticles.slice(0, 6));
        setVisibleCount(3);
        setIsSearched(true);
      })
      .catch((err) => {
        console.error("Something went wrong", err);
      });
  };

  const handleSaveArticles = async (article, keyword) => {
    if (!currentUser) {
      alert("please signin");
      return;
    }
    await fetchArticles(article, keyword)
      .then((data) => {
        setSavedArticles((prev) => [
          ...prev,
          { ...article, keyword, id: data },
        ]);
      })
      .catch((err) => {
        console.error("Something went wrong", err);
      });
  };
  const handleDeleteArticle = async (id) => {
    try {
      await deleteArticles(id);
      setSavedArticles((prevArticles) =>
        prevArticles.filter((article) => article.id !== id),
      );
    } catch (err) {
      console.error("Something went wrong when deleting the article", err);
    }
  };
  useEffect(() => {
    const auth = getAuth();
    const userCards = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserSavedArticles(user.uid).then((data) => {
          setSavedArticles(data);
          setIsLoggedIn(true);
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
        setIsLoggedIn(true);
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
        setIsLoggedIn(true);
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
        setIsLoggedIn(true);
        setCurrentUser(currentUser);
        setCurrentUser(user.displayName);
      } else {
        setCurrentUser(null);
      }
    });
    return getUsername;
  }, []);

  const navigate = useNavigate();
  function handleLogout() {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/");
      })
      .catch((err) => {
        console.error("Logout Failed:", err);
      });
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header
            signinModal={signinModal}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  articles={articles}
                  isSearched={isSearched}
                  isLoading={isLoading}
                  handleArticlesSearch={handleArticlesSearch}
                  handleSaveArticles={handleSaveArticles}
                  visibleCount={visibleCount}
                  error={error}
                  savedArticles={savedArticles}
                  handleShowMoreButton={handleShowMoreButton}
                  handleDeleteArticle={handleDeleteArticle}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute currentUser={currentUser}>
                <SavedNews
                  isLoggedIn={isLoggedIn}
                  savedArticles={savedArticles}
                  handleDeleteArticle={handleDeleteArticle}
                  handleLogout={handleLogout}
                />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <ProtectedRoute
                  currentUser={!currentUser}
                  isPublic={true}
                >
                  <signin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <ProtectedRoute
                  currentUser={!currentUser}
                  isPublic={true}
                >
                  <signup />
                </ProtectedRoute>
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
