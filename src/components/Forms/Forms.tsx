import React, { Component } from 'react';
import './Forms.css';
import FormsCard from './FormsCard';

type FormsProps = Record<string, string>;

type RefForm = React.RefObject<HTMLFormElement>;
type Ref = React.RefObject<HTMLInputElement>;
type RefSelect = React.RefObject<HTMLSelectElement>;
export interface FormsState {
  nameError: string;
  dateError: string;
  carError: string;
  servicesError: string;
  daysToRentError: string;
  photoError: string;
  imgFile: string;
  formCards: IFormCards[];
}
export interface IFormCards {
  photo: string;
  name: string;
  date: string;
  carCategory: string;
  services: string[];
  daysToRent: string;
}

class Forms extends Component<FormsProps, FormsState> {
  refForm: RefForm;
  nameInput: Ref;
  dateInput: Ref;
  carSelect: RefSelect;
  checkInput1: Ref;
  checkInput2: Ref;
  checkInput3: Ref;
  radioInput1: Ref;
  radioInput2: Ref;
  radioInput3: Ref;
  fileInput: Ref;
  // formCards: IFormCards[] = [];

  constructor(props: FormsProps) {
    super(props);
    this.refForm = React.createRef();
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.carSelect = React.createRef();
    this.checkInput1 = React.createRef();
    this.checkInput2 = React.createRef();
    this.checkInput3 = React.createRef();
    this.radioInput1 = React.createRef();
    this.radioInput2 = React.createRef();
    this.radioInput3 = React.createRef();
    this.fileInput = React.createRef();
    // this.formCards = [];

    this.state = {
      nameError: '',
      dateError: '',
      carError: '',
      servicesError: '',
      daysToRentError: '',
      photoError: '',
      imgFile: '',
      formCards: [
        {
          photo: '',
          name: '',
          date: '',
          carCategory: '',
          services: [''],
          daysToRent: '',
        },
      ],
    };
  }

  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await this.checkName();
    await this.checkDate();
    await this.checkCarClass();
    await this.checkServices();
    await this.checkDaysToRent();
    await this.checkPhoto();
    if (Object.values(this.state).slice(0, -2).join('') === '') {
      this.createFormsCard();
      //   this.showModal();
      this.resetForm();
    }
  };

  async checkName(): Promise<void> {
    let errText = '';
    const reg = /^[a-zA-Z]+$/;
    const nameText = this.nameInput.current!.value.trim();
    if (nameText.length < 2 || !reg.test(nameText) || nameText[0].toUpperCase() !== nameText[0]) {
      errText = `Name must be more than two characters and start with a capital letter`;
    }
    this.setState({ nameError: errText });
  }

  async checkDate(): Promise<void> {
    let errText = '';
    // const today = new Date();
    if (!this.dateInput.current!.value) {
      errText = 'Please select correct date';
    }
    this.setState({ dateError: errText });
  }

  async checkCarClass(): Promise<void> {
    let errText = '';
    if (this.carSelect.current && this.carSelect.current!.value === '0') {
      errText = 'Please select car class';
    }
    this.setState({ carError: errText });
  }

  async checkServices(): Promise<void> {
    let errText = '';
    if (
      this.checkInput1.current!.checked ||
      this.checkInput2.current!.checked ||
      this.checkInput3.current!.checked
    ) {
      errText = errText;
    } else {
      errText = 'Please choose the servis';
    }
    this.setState({ servicesError: errText });
  }

  async checkDaysToRent(): Promise<void> {
    let errText = '';
    if (
      this.radioInput1.current!.checked ||
      this.radioInput2.current!.checked ||
      this.radioInput3.current!.checked
    ) {
      errText = errText;
    } else {
      errText = 'Please choose the duration of the rental';
    }
    this.setState({ daysToRentError: errText });
  }

  async checkPhoto(): Promise<void> {
    let errText = '';
    if (this.fileInput.current && this.fileInput.current!.files!.length === 0) {
      errText = 'Please add photo';
    } else if (this.fileInput.current && this.fileInput.current!.files!.length > 0) {
      this.setState({ imgFile: URL.createObjectURL(this.fileInput.current!.files![0]) });
    }
    this.setState({ photoError: errText });
  }

  createFormsCard() {
    let carCategoryFromRef = '';
    if (this.carSelect && this.carSelect.current!.value === '1') carCategoryFromRef = 'Econom';
    if (this.carSelect && this.carSelect.current!.value === '2') carCategoryFromRef = 'Comfort';
    if (this.carSelect && this.carSelect.current!.value === '3') carCategoryFromRef = 'Premium';
    const servicesFromRef = [];
    if (this.checkInput1.current!.checked) servicesFromRef.push(this.checkInput1.current!.name);
    if (this.checkInput2.current!.checked) servicesFromRef.push(this.checkInput2.current!.name);
    if (this.checkInput3.current!.checked) servicesFromRef.push(this.checkInput3.current!.name);
    let daysToRentFromRef = '';
    if (this.radioInput1.current!.checked) daysToRentFromRef = this.radioInput1.current!.value;
    if (this.radioInput2.current!.checked) daysToRentFromRef = this.radioInput2.current!.value;
    if (this.radioInput3.current!.checked) daysToRentFromRef = this.radioInput3.current!.value;

    const currentCard: IFormCards = {
      photo: URL.createObjectURL(this.fileInput.current!.files![0]),
      name: this.nameInput && this.nameInput.current ? this.nameInput.current.value.trim() : '',
      date: this.dateInput && this.dateInput.current ? this.dateInput.current.value : '',
      carCategory: carCategoryFromRef,
      services: servicesFromRef,
      daysToRent: daysToRentFromRef,
    };

    const createNewCard = this.state.formCards.map((el) => el);
    createNewCard.push(currentCard);
    this.setState({ formCards: createNewCard });
  }

  resetForm() {
    this.refForm.current && this.refForm.current.reset();
  }

  render() {
    return (
      <>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <fieldset>
            <legend>Name</legend>
            <p>{this.state.nameError}</p>
            <input type="text" ref={this.nameInput} />
          </fieldset>
          <fieldset>
            <legend>Choise date:</legend>
            <p>{this.state.dateError}</p>
            <input type="date" ref={this.dateInput} />
          </fieldset>
          <fieldset>
            <legend>Car class</legend>
            <p>{this.state.carError}</p>
            <select ref={this.carSelect} defaultValue="0">
              <option value="0">Not selected</option>
              <option value="1">Econom</option>
              <option value="2">Comfort</option>
              <option value="3">Premium</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Additional services</legend>
            <p>{this.state.servicesError}</p>
            <label>
              <input type="checkbox" name="Insurance" id="check1" ref={this.checkInput1} />
              Insurance
            </label>
            <label>
              <input type="checkbox" name="Transfer" id="check1" ref={this.checkInput2} />
              Delivery to airport
            </label>
            <label>
              <input type="checkbox" name="Baby chair" id="check3" ref={this.checkInput3} />
              Baby chair
            </label>
          </fieldset>
          <fieldset>
            <legend>How many days?</legend>
            <p>{this.state.daysToRentError}</p>
            <div>
              <label>
                <input type="radio" ref={this.radioInput1} name="radio" value="1 -3" />1 - 3
              </label>
            </div>
            <div>
              <label>
                <input type="radio" ref={this.radioInput2} name="radio" value="3 -7" />3 - 7
              </label>
            </div>
            <div>
              <label>
                <input type="radio" ref={this.radioInput3} name="radio" value="More" />
                More
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Drivers license photo</legend>
            <p>{this.state.photoError}</p>
            <input type="file" accept="image/png, image/gif, image/jpeg" ref={this.fileInput} />
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
        <div className="formCards-wrap">
          {this.state.formCards.map((card, index) => {
            if (index > 0) return <FormsCard card={card} key={card.name} />;
          })}
        </div>
      </>
    );
  }
}

export default Forms;
