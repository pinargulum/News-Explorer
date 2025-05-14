import "../SigninModal/SigninModal.css";
import { useForm } from "../utils/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import { useState, useEffect } from "react";
const SigninModal = ({ isOpen, onClose, signupModal, handleSigninForm }) => {
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
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
 
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSigninForm(values.email, values.password);
  }
  return (
    <ModalWithForm
      titleText="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      modifierClass="signin"
    >
      <label
        className="modal__label"
        htmlFor="Email"
      >
        Email:
        <input
          type="email"
          id="Email"
          name="email"
          className="modal__input"
          placeholder="Enter email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label
        className="modal__label"
        htmlFor="Password"
      >
        Password:
        <input
          type="password"
          name="password"
          id="Password"
          className="modal__input"
          placeholder="Enter password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
      </label>
      <button
        onClick={signupModal}
        className="modal__submit-second-button"
        type="button"
       
      >
        or  Sign up 
      </button>
    </ModalWithForm>
  );
};
export default SigninModal;
