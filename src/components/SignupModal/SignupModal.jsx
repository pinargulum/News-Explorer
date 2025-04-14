import React from "react";
import { useState, useEffect } from "react";
import "../SignupModal/SignupModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../utils/useForm";

const SignupModal = ({ isOpen, onClose, signinModal, handleSignupForm }) => {

  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
    username: "",
  });
  useEffect(() => {
    if (isOpen) {
      setValues({
        email: "",
        password: "",
        username: "",
      });
    }
  }, [isOpen]);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignupForm(values.email, values.password, values.username);
  };
  return (
    <ModalWithForm
      titleText="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      modifierClass="signup"
    >
      <label
        className="modal__label"
        htmlFor="email"
      >
        Email:
        <input
          id="email"
          name="email"
          type="email"
          className="modal__input"
          placeholder="Enter email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label
        className="modal__label"
        htmlFor="password"
      >
        Password:
        <input
          id="password"
          name="password"
          type="password"
          className="modal__input"
          placeholder="Enter password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label
        className="modal__label"
        htmlFor="username"
      >
        Username:
        <input
          id="username"
          className="modal__input"
          name="username"
          type="text"
          placeholder="Enter your username"
          value={values.username || ""}
          onChange={handleChange}
          required
        />
      </label>

      <button
        onClick={signinModal}
        className="second__button"
        type="button"
      >
        or Sign in
      </button>
    </ModalWithForm>
  );
};

export default SignupModal;
