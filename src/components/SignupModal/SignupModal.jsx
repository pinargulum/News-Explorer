import "../SignupModal/SignupModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
const SignupModal = ({ isOpen, onClose, signinModal }) => {
  return (
    <ModalWithForm
      titleText="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
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
