import "../SigninModal/SigninModal.css";

import ModalWithForm from "../ModalWithForm/ModalWithForm";
import SignupModal from "../SignupModal/SignupModal";

const SigninModal = ({ isOpen, onClose, signupModal }) => {
  return (
    <ModalWithForm
      titleText="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
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
          required
        />
      </label>

      <button
      onClick={signupModal}
        className="second__button"
        type="button"
      >
        or Sign up
      </button>
    </ModalWithForm>
  );
};
export default SigninModal;
