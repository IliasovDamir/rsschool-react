import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import './Forms.css';
import FormsCard from './FormsCard';

// type FormsProps = Record<string, string>;

export interface IFormCards {
  photo: string;
  name: string;
  date: string;
  carCategory: string;
  daysToRent: string;
  accept: string;
}

const Forms: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    card.photo = URL.createObjectURL(new Blob());
    showModal();
    reset();
  };

  let isModalOpen = false;

  const showModal = () => {
    isModalOpen = true;
    setTimeout(() => {
      isModalOpen = false;
    }, 2500);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Name</legend>
          {errors.name && (
            <p>Name must be more than two characters and start with a capital letter</p>
          )}
          <input type="text" {...register('name', { required: true })} />
        </fieldset>
        <fieldset>
          <legend>Choise date:</legend>
          {errors.date && <p>Please select correct date</p>}
          <input type="date" {...register('date', { required: true })} />
        </fieldset>
        <fieldset>
          <legend>Car class</legend>
          {errors.carCategory && <p>Please select car class</p>}
          <select {...register('carCategory', { required: true })} defaultValue="0">
            <option value="0">Not selected</option>
            <option value="1">Econom</option>
            <option value="2">Comfort</option>
            <option value="3">Premium</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>How many days?</legend>
          {errors.daysToRent && <p>Please choose the duration of the rental</p>}
          <div>
            <label>
              <input
                type="radio"
                {...register('daysToRent', { required: true })}
                name="radio"
                value="1 -3"
              />
              1 - 3
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                {...register('daysToRent', { required: true })}
                name="radio"
                value="3 -7"
              />
              3 - 7
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                {...register('daysToRent', { required: true })}
                name="radio"
                value="More"
              />
              More
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Drivers license photo</legend>
          {errors.photo && <p>Please choose the duration of the rental</p>}
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            {...register('photo', { required: true })}
          />
        </fieldset>
        <fieldset>
          <legend>Privacy Policy</legend>
          {errors.accept && <p>Please accept</p>}
          <label>
            <input type="checkbox" id="check1" {...register('accept', { required: true })} />I agree
          </label>
        </fieldset>
        <input type="submit" value="Send" />
      </form>
      <div className="formCards-wrap">{/* <FormsCard />; */}</div>
      <div className={isModalOpen ? 'form_modal-open' : 'form_modal-close'}>
        Thank you for submitting your rental request.
      </div>
    </>
  );
};

export default Forms;

{
  /* <FormsCard card={card} key={card.name} />; */
}

// constructor(props: FormsProps) {
//   this.state = {
//     nameError: '',
//     dateError: '',
//     carError: '',
//     servicesError: '',
//     daysToRentError: '',
//     photoError: '',
//     imgFile: '',
//     isModalOpen: false,
//     formCards: [
//       {
//         photo: '',
//         name: '',
//         date: '',
//         carCategory: '',
//         services: [''],
//         daysToRent: '',
//       },
//     ],
//   };
// }

// handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   await checkName();
//   await checkDate();
//   await checkCarClass();
//   await checkServices();
//   await checkDaysToRent();
//   await checkPhoto();
//   if (Object.values(state).slice(0, -3).join('') === '') {
//     createFormsCard();
//     showModal();
//     refForm.current?.reset();
//   }
// };

// const checkName = () => {
//   let errText = '';
//   const reg = /^[a-zA-Z]+$/;
//   const nameText = this.nameInput.current!.value.trim();
//   if (nameText.length < 2 || !reg.test(nameText) || nameText[0].toUpperCase() !== nameText[0]) {
//     errText = `Name must be more than two characters and start with a capital letter`;
//   }
//   this.setState({ nameError: errText });
// }

// const checkDate = async () => {
//   let errText = '';
//   const today = new Date();
//   const selectedDay = new Date(this.dateInput.current!.value);
//   if (!this.dateInput.current!.value || today >= selectedDay) {
//     errText = 'Please select correct date';
//   }
//   this.setState({ dateError: errText });
// }

// const checkCarClass = async () => {
//   let errText = '';
//   if (this.carSelect.current && this.carSelect.current!.value === '0') {
//     errText = 'Please select car class';
//   }
//   this.setState({ carError: errText });
// }

// const checkServices = async () => {
//   let errText = '';
//   if (
//     this.checkInput1.current!.checked ||
//     this.checkInput2.current!.checked ||
//     this.checkInput3.current!.checked
//   ) {
//     errText = errText;
//   } else {
//     errText = 'Please choose the servis';
//   }
//   this.setState({ servicesError: errText });
// }

// const checkDaysToRent = async () => {
//   let errText = '';
//   if (
//     this.radioInput1.current!.checked ||
//     this.radioInput2.current!.checked ||
//     this.radioInput3.current!.checked
//   ) {
//     errText = errText;
//   } else {
//     errText = 'Please choose the duration of the rental';
//   }
//   this.setState({ daysToRentError: errText });
// }

// const checkPhoto = async () => {
//   let errText = '';
//   if (this.fileInput.current && this.fileInput.current!.files!.length === 0) {
//     errText = 'Please add photo';
//   } else if (this.fileInput.current && this.fileInput.current!.files!.length > 0) {
//     this.setState({ imgFile: URL.createObjectURL(this.fileInput.current!.files![0]) });
//   }
//   this.setState({ photoError: errText });
// }

// createFormsCard() {
//   let carCategoryFromRef = '';
//   if (this.carSelect && this.carSelect.current!.value === '1') carCategoryFromRef = 'Econom';
//   if (this.carSelect && this.carSelect.current!.value === '2') carCategoryFromRef = 'Comfort';
//   if (this.carSelect && this.carSelect.current!.value === '3') carCategoryFromRef = 'Premium';
//   const servicesFromRef = [];
//   if (this.checkInput1.current!.checked) servicesFromRef.push(this.checkInput1.current!.name);
//   if (this.checkInput2.current!.checked) servicesFromRef.push(this.checkInput2.current!.name);
//   if (this.checkInput3.current!.checked) servicesFromRef.push(this.checkInput3.current!.name);
//   let daysToRentFromRef = '';
//   if (this.radioInput1.current!.checked) daysToRentFromRef = this.radioInput1.current!.value;
//   if (this.radioInput2.current!.checked) daysToRentFromRef = this.radioInput2.current!.value;
//   if (this.radioInput3.current!.checked) daysToRentFromRef = this.radioInput3.current!.value;

//   const currentCard: IFormCards = {
//     photo: URL.createObjectURL(this.fileInput.current!.files![0]),
//     name: this.nameInput && this.nameInput.current ? this.nameInput.current.value.trim() : '',
//     date: this.dateInput && this.dateInput.current ? this.dateInput.current.value : '',
//     carCategory: carCategoryFromRef,
//     services: servicesFromRef,
//     daysToRent: daysToRentFromRef,
//   };

//   const createNewCard = this.state.formCards.slice();
//   createNewCard.push(currentCard);
//   this.setState({ formCards: createNewCard });
// }

// refForm: RefForm;
//   nameInput: Ref;
//   dateInput: Ref;
//   carSelect: RefSelect;
//   checkInput1: Ref;
//   checkInput2: Ref;
//   checkInput3: Ref;
//   radioInput1: Ref;
//   radioInput2: Ref;
//   radioInput3: Ref;
//   fileInput: Ref;
