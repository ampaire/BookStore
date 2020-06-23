import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, CHANGE_FILTER } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import logo from '../assets/logo.png';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const filteredBooks = (filter !== 'All') ? books.filter(book => book.category === filter) : books;
  return (
    <div>
      <div>
        <div>
          <header className="header">
            <img className="book-logo" src={logo} alt="logo" />
            <h4>BOOKS</h4>
            <CategoryFilter changeFilter={changeFilter} />
          </header>

        </div>
        <div>
          {filteredBooks.map(book => (
            <Book book={book} key={book.id} removeBook={removeBook} />
          ))}
        </div>
      </div>
    </div>
  );
};
BooksList.defaultProps = {
  filter: 'All',
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: category => {
    dispatch(CHANGE_FILTER(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
