const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.book;
    default:
      return state;
  }
};

export default filterReducer;
