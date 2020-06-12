import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialBooks = [
  { id: Math.floor(Math.random() * 100), title: 'A Wrinkle in Time', category: 'Fiction' },
  { id: Math.floor(Math.random() * 100), title: 'The Hobbit', category: 'Kids' },
  { id: Math.floor(Math.random() * 100), title: 'Pride and Prejudice', category: 'History' },
];

const bookReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== parseInt(action.id, 2));
    default:
      return state;
  }
};

export default bookReducer;
