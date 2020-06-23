import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BooksList />
        <BooksForm />
      </div>

    </div>
  );
}

export default App;
