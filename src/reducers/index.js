import { createStore, combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const reducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});
const store = createStore(reducer);

export default store;
