import React, { Component } from 'react';
import './SearchInput.css';

class SearchInput extends Component {
  state = {
    text: '',
  };

  inputRef = React.createRef<HTMLInputElement>();

  componentDidMount(): void {
    this.setState({
      text: localStorage.getItem('curSearch') ? localStorage.getItem('curSearch') : '',
    });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    localStorage.setItem('curSearch', this.state.text);
  };

  render() {
    return (
      <form className="search_container" onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          placeholder="Search here..."
          value={this.state.text}
          onChange={this.handleChange}
          ref={this.inputRef}
        ></input>
        <button>Search</button>
      </form>
    );
  }
}

export default SearchInput;
