import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = ({ state, removeBook }) => (
  <table className="table-one">
    <thead>
      <tr>
        <th className="trow">Book ID</th>
        <th className="trow">Title</th>
        <th className="trow">Category</th>
      </tr>
    </thead>
    <tbody>
      {state.map(book => <Book key={Math.random() * 1000} book={book} removeBook={removeBook} />)}
    </tbody>
  </table>
);
BooksList.propTypes = {
  state: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
