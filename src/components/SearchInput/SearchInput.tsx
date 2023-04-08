import React, { FC, useEffect, useRef, useState } from 'react';
import './SearchInput.css';

type SearchProps = {
  updateData: (text: string) => void;
};

const SearchInput: FC<SearchProps> = ({ updateData }) => {
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

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      localStorage.setItem('curSearch', searchRef.current);
      updateData(searchRef.current);
    }
  };

  return (
    <form className="search_container" onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Search here..."
        value={text}
        onChange={(event) => handleChange(event)}
        onKeyDown={handleEnter}
      ></input>
    </form>
  );
};

export default SearchInput;
