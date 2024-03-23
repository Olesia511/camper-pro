import sprite from "assets/sprite.svg";
import { useEffect } from "react";
import { ModalContent, Modal, ModalChildren, ModalCloseBtn, ModalClosetSvg } from "./Modal.styled";

export const ModalWindow = ({ isOpen, onClose, children }) => {
  const onBackDropClick = (evt) => {
    if (evt.currentTarget === evt.target) onClose();
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
      document.body.classList.add("disable-scroll");
    }
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
      document.body.classList.remove("disable-scroll");
    };
  }, [isOpen, onClose]);
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <Modal onClick={onBackDropClick}>
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
