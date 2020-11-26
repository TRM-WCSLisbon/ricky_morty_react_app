/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Search, Input,
} from './styles';

function Searchbar(props) {
  return (
    <Search>
      <Input
        placeholder="Search..."
        type="text"
        onChange={props.searchInputFunction}
      />
    </Search>
  );
}

export default Searchbar;
