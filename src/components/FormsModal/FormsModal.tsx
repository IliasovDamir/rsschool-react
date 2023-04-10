import React, { FC } from 'react';
import './FormsModal.css';

type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
};

const FormsModal: FC<Props> = ({ isModalOpen, closeModal }) => {
  const showModalTimer = () => {
    const timer = setTimeout(() => {
      closeModal();
      clearTimeout(timer);
    }, 2500);
  };
  showModalTimer();

  return (
    <div className={isModalOpen ? 'form_modal-open' : 'form_modal-close'}>
      Thank you for submitting your rental request.
    </div>
  );
};

export default FormsModal;
