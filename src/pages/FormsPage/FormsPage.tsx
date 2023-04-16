import React, { useState } from 'react';
import './FormsPage.css';
import FormsCard from 'components/Forms/FormsCard';
import FormsModal from 'components/FormsModal/FormsModal';
import { IFormCards } from 'models/models';
import Forms from 'components/Forms/Forms';

const FormsPage = () => {
  const [cardsList, setCardsList] = useState([
    {
      photo: '',
      name: '',
      date: '',
      carCategory: '',
      daysToRent: '',
      accept: false,
    },
  ]);

  const [openModal, setOpenModal] = useState(false);

  const setState = (data: IFormCards) => {
    const curCard = cardsList.slice();
    curCard.push(data);
    setCardsList(curCard);
  };

  const showModalWindow = () => {
    setOpenModal(true);
  };

  const closeModalWindow = () => {
    setOpenModal(false);
  };

  return (
    <section className="section_forms">
      <h1>Forms</h1>
      <Forms updateCardsList={setState} openModal={showModalWindow} />
      <div className="formCards-wrap">
        {cardsList.map((card: IFormCards) =>
          card.name ? <FormsCard card={card} key={card.name} /> : ''
        )}
      </div>
      <FormsModal isModalOpen={openModal} closeModal={closeModalWindow} />
    </section>
  );
};

export default FormsPage;
