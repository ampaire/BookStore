import React from 'react';
import styled from 'styled-components';


const INPUT = styled.input`
padding: 7px;
margin-right: 3%;
`;

const SELECT = styled.select`
padding: 5px;
background: brown;
color:white;
margin-right: 2%;
`;
const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <form className="input-form">
      <INPUT type="text" defaultValue="Add Book Title" />
      <SELECT name="category">
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </SELECT>
      <button type="submit"> Submit </button>
    </form>
  );
};

export default BooksForm;
