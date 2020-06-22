import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import logo from '../assets/logo.png';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <img className="book-logo" src={logo} alt="logo" />
          <h4>BOOKS</h4>
          <h4>CATEGORIES</h4>
        </header>

        <BooksList />
        <BooksForm />
      </div>

    </div>
  );
}

export default App;
