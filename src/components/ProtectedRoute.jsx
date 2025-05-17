import React from "react";
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";

import CurrentUserContext from "../components/utils/contexts/CurrentUserContext";

function ProtectedRoute({ isPublic = false, children }) {
  const location = useLocation();

  const from = location.state?.from || "/";

  const currentUser = useContext(CurrentUserContext);

  if (currentUser && isPublic) {
    return (
      <Navigate
        to="/saved-news"
        state={{ from: location }}
        replace
      />
    );
  }

  if (!currentUser && !isPublic) {
    return (
      <Navigate
        to="/"
        state={{ from: location }}
        replace
      />
    );
  }

  if (!currentUser) {
    return (
      <Navigate
        to="/"
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;
