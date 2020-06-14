import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TR = styled.tr`
background: Brown;
color: white;
text-align: center;
width: 100%;
`;
const BUTTON = styled.button`
  border: 1px solid gray;
  border-radius: 12px;
  padding: 13px;
  outline:none;
  cursor:pointer;
`;

export default function Books({ book, removeBook }) {
  return (
    <TR key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <BUTTON type="submit" onClick={() => removeBook(book)}>
          Remove Book
        </BUTTON>
      </td>
    </TR>
  );
}
Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};
