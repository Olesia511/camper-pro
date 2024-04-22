import sprite from "assets/sprite.svg";
import { useEffect } from "react";
import { ModalContent, Modal, ModalChildren, ModalCloseBtn, ModalClosetSvg } from "./Modal.styled";
import { changeDate } from "../../redux/dateBook/slice";
import { useDispatch } from "react-redux";

export const ModalWindow = ({ isOpen, onClose, children }) => {
  const dispatch = useDispatch();
  const body = document.querySelector("body");

  const onCloseModal = (evt) => {
    if (evt.currentTarget === evt.target) {
      dispatch(changeDate(new Date().toISOString()));
      onClose();
    }

    if (evt.keyCode === 27) {
      dispatch(changeDate(new Date().toISOString()));
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", onCloseModal);
      body.classList.add("disable-scroll");
    }
    return () => {
      document.removeEventListener("keydown", onCloseModal);
      body.classList.remove("disable-scroll");
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <Modal id="modal-win" onClick={onCloseModal}>
          <ModalContent>
            <ModalCloseBtn onClick={onClose}>
              <ModalClosetSvg>
                <use href={`${sprite}#icon-x`} />
              </ModalClosetSvg>
            </ModalCloseBtn>
            <ModalChildren>{children}</ModalChildren>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
