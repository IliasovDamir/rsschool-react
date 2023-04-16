import React, { useEffect, useRef } from 'react';
import './SearchInput.css';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchPersons, updateSearchText } from 'store/reducers/ActionCreators';

const SearchInput = () => {
  const { searchText } = useAppSelector((state) => state.personReducer);
  const dispatch = useAppDispatch();
  const searchRef = useRef('');
  searchRef.current = searchText;

  useEffect(() => {
    return () => {
      dispatch(updateSearchText(searchRef.current));
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchText(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      dispatch(fetchPersons(searchText));
      console.log('searchText', searchText);
    }
  };

  return (
    <form className="search_container" onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Search here..."
        value={searchText}
        onChange={(event) => handleChange(event)}
        onKeyDown={handleEnter}
      ></input>
    </form>
  );
};

export default SearchInput;
