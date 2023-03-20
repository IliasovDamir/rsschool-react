import React, { Component } from 'react';
import './SearchInput.css';

interface SearchInputState {
  text: string;
}

class SearchInput extends Component<unknown, SearchInputState> {
  state = {
    text: localStorage.getItem('curSearch') || '',
  };

  componentDidMount(): void {
    this.setState({
      text: localStorage.getItem('curSearch') || '',
    });
  }

  componentWillUnmount(): void {
    localStorage.setItem('curSearch', this.state.text);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  render() {
    return (
      <form className="search_container" onSubmit={(event) => this.handleSubmit(event)}>
        <input
          type="text"
          placeholder="Search here..."
          value={this.state.text}
          onChange={(event) => this.handleChange(event)}
        ></input>
      </form>
    );
  }
}

export default SearchInput;
