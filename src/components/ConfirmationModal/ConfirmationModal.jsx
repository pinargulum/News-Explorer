import "../ConfirmationModal/ConfirmationModal.css";

import { useModalClose } from "../utils/useModalClose";
function ConfirmationModal({ isOpen, onClose, signinModal }) {
useModalClose(isOpen, onClose);
  return (
    <div className={`modal ${isOpen && "modal_opened"} `}>
      <div className="modal_content modal_content_confirmation_form">
        <h2 className="confirmation__title">Registration successfully completed!</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button modal__close-button_confirmation_form"
        />
        <button
          onClick={signinModal}
          className="confirmation__signin-button"
          type="button"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
export default ConfirmationModal;
