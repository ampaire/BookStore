import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = props => {
  const { state } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {state.map(book => <Book key={book.id} book={book} />)}
      </tbody>
    </table>
  );
};
BooksList.propTypes = {
  state: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(BooksList);
