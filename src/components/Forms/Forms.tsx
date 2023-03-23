import React, { Component } from 'react';
import './Forms.css';

type FormsProps = Record<string, string>;
type MyState = Record<string, string>;
type Ref = React.RefObject<HTMLInputElement>;
type RefSelect = React.RefObject<HTMLSelectElement>;

class Forms extends Component<FormsProps, MyState> {
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

  constructor(props: FormsProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    this.state = {
      nameError: '',
      dateError: '',
      carError: '',
      servicesError: '',
      daysToRentError: '',
      photoError: '',
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.checkName();
    this.checkDate();
    this.checkCarClass();
    this.checkServices();
    this.checkDaysToRent();
    this.checkPhoto();
  };

  checkName() {
    let errText = '';
    const reg = /^[a-zA-Z]+$/;
    const nameText = this.nameInput.current!.value.trim();
    if (nameText.length < 2 || !reg.test(nameText) || nameText[0].toUpperCase() !== nameText[0]) {
      errText = `Name must be more than two characters and start with a capital letter`;
    }
    this.setState({ nameError: errText });
  }

  checkDate() {
    let errText = '';
    if (!this.dateInput.current!.value) {
      errText = 'Please select date';
    }
    this.setState({ dateError: errText });
  }

  checkCarClass() {
    let errText = '';
    if (this.carSelect.current && this.carSelect.current!.value === '0') {
      errText = 'Please select car class';
    }
    this.setState({ carError: errText });
  }

  checkServices() {
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

  checkDaysToRent() {
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

  checkPhoto() {
    let errText = '';
    if (this.fileInput.current && !this.fileInput.current!.value) {
      errText = 'Please add photo';
    }
    this.setState({ photoError: errText });
  }

  render() {
    return (
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
            <input type="checkbox" name="1" id="check1" ref={this.checkInput1} />
            Insurance
          </label>
          <label>
            <input type="checkbox" name="1" id="check1" ref={this.checkInput2} />
            Transfer
          </label>
          <label>
            <input type="checkbox" name="2" id="check3" ref={this.checkInput3} />
            Baby chair
          </label>
        </fieldset>
        <fieldset>
          <legend>How many days?</legend>
          <p>{this.state.daysToRentError}</p>
          <div>
            <label>
              <input type="radio" ref={this.radioInput1} name="radio" value="1" />1 - 3
            </label>
          </div>
          <div>
            <label>
              <input type="radio" ref={this.radioInput2} name="radio" value="2" />3 - 7
            </label>
          </div>
          <div>
            <label>
              <input type="radio" ref={this.radioInput3} name="radio" value="3" />
              More
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Drivers license photo</legend>
          <p>{this.state.photoError}</p>
          <input type="file" ref={this.fileInput} />
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Forms;
