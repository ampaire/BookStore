import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const TABLE = styled.table`
width: 600px
height: 400px
`;

const BooksList = ({ state, removeBook }) => (
  <TABLE className="table-one">
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {state.map(book => <Book key={book.id} book={book} removeBook={removeBook} />)}
    </tbody>
  </TABLE>
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
