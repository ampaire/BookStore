import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <div className="book-bg">
        <div className="container center">
          <BooksList />
          <BooksForm />
        </div>
      </div>

    </div>
  );
}

export default App;
