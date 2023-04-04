import React, { FC, useEffect, useRef, useState } from 'react';
import './SearchInput.css';

const SearchInput: FC = () => {
  const [text, setText] = useState(localStorage.getItem('curSearch') || '');

  const searchRef = useRef('');
  searchRef.current = text;

  useEffect(() => {
    return () => {
      localStorage.setItem('curSearch', searchRef.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <form className="search_container" onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Search here..."
        value={text}
        onChange={(event) => handleChange(event)}
      ></input>
    </form>
  );
};

export default SearchInput;
