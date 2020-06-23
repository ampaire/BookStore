import React from 'react';
import PropTypes from 'prop-types';

export default function Books({ book, removeBook }) {
  return (
    <div className="books" key={book.id}>
      <div className="left-side">
        <h5 className="category">{book.category}</h5>
        <h2 className="title">{book.title}</h2>
        <div className="actions">
          <button type="button" disabled>Comments</button>
          <button type="button" disabled>Edit</button>
        </div>
      </div>
      <div id="middle">
        <div className="progress" />
        <div className="percent">
          <h1 className="percentage">48%</h1>
          <h4 className="completed">Complete</h4>
        </div>
      </div>
      <div className="right-side">
        <button type="button" className="btn" onClick={() => removeBook(book)}>
          Remove Book
        </button>
      </div>
    </div>

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
