import React, { Component } from 'react';
import './Forms.css';

type Props = Record<string, unknown>;
type Ref = React.RefObject<HTMLInputElement>;

class Forms extends Component {
  nameInput: Ref;
  dateInput: Ref;
  checkInput: Ref;
  radioInput: Ref;
  fileInput: Ref;

  constructor(props: Props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef();
    this.dateInput = React.createRef();
    this.checkInput = React.createRef();
    this.radioInput = React.createRef();
    this.fileInput = React.createRef();
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(this.nameInput.current!.value);
  };

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <fieldset>
          <legend>Name Surname:</legend>
          <input type="text" ref={this.nameInput} />
        </fieldset>
        <fieldset>
          <legend>Choise date:</legend>
          <input type="date" ref={this.dateInput} />
        </fieldset>
        <fieldset>
          <legend>Car class</legend>
          <select defaultValue="value2">
            <option value="value1">Econom</option>
            <option value="value2">Comfort</option>
            <option value="value3">Premium</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>Additional services</legend>
          <label>
            <input type="checkbox" name="1" id="1" ref={this.checkInput} />
            Transfer
          </label>
          <label>
            <input type="checkbox" name="2" id="1" ref={this.checkInput} />
            Baby chair
          </label>
        </fieldset>
        <fieldset>
          <legend>How many days?</legend>
          <div>
            <label>
              <input type="radio" ref={this.radioInput} name="radio" value="1" checked />1
            </label>
          </div>
          <div>
            <label>
              <input type="radio" ref={this.radioInput} name="radio" value="bbbb" />2
            </label>
          </div>
          <div>
            <label>
              <input type="radio" ref={this.radioInput} name="radio" value="bbbb" />
              More
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Upload file</legend>
          <input type="file" ref={this.fileInput} />
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Forms;
