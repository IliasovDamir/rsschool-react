import React, { useState } from 'react';
import './FormsPage.css';
import FormsCard from 'components/Forms/FormsCard';
import FormsModal from 'components/FormsModal/FormsModal';
import { IFormCards } from 'models/models';
import Forms from 'components/Forms/Forms';
import { useAppSelector } from 'hooks/redux';

const FormsPage = () => {
  const { formsCard } = useAppSelector((state) => state.personReducer);

  const [openModal, setOpenModal] = useState(false);

  const showModalWindow = () => {
    setOpenModal(true);
  };

  const closeModalWindow = () => {
    setOpenModal(false);
  };

  return (
    <section className="section_forms">
      <h1>Forms</h1>
      <Forms openModal={showModalWindow} />
      <div className="formCards-wrap">
        {formsCard.length <= 0
          ? ''
          : formsCard.map((card: IFormCards) =>
              card.name ? <FormsCard card={card} key={crypto.randomUUID()} /> : ''
            )}
      </div>
      <FormsModal isModalOpen={openModal} closeModal={closeModalWindow} />
    </section>
  );
};

export default FormsPage;
