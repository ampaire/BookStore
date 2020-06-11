import React from 'react';
import PropTypes from 'prop-types';

export default function Books({ book }) {
  return (
    <div className="Book-section">
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
      </tr>
    </div>
  );
}
Books.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
