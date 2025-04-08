import "../ModalWithForm/ModalWithForm.css"
import { useModalClose } from "../../utils/useModalClose.js"
function ModalWithForm({ isOpen, onClose, onSubmit, titleText, buttonText, children }) {
    useModalClose(isOpen, onClose);
        return (
            <div className={`modal ${isOpen && "modal_opened"} `}>
              <div className="modal_content modal__content_type_form">
                <h2 className="modal__title">{titleText}</h2>
                <button
                  onClick={onClose}
                  type="button"
                  className="modal__close-button modal__close-button_type_form"
                />
                <form
                  className="modal__form"
                  onSubmit={onSubmit}
                >
                  {children} {}
                  <button
                    className="modal__submit"
                    type="submit"
                  >
                    {buttonText}
                  </button>
                </form>
              </div>
            </div>
          );
        }
        export default ModalWithForm;
  