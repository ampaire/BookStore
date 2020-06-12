import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TR = styled.tr`
background: Brown;
color: white;
text-align: center;
width: 100%;
`;

export default function Books({ book }) {
  return (
    <TR key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </TR>
  );
}
Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
