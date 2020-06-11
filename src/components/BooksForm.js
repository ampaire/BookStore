import React from 'react';


const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <div>
      <form>
        <input type="text" value="Book Title" />
        <select name="category">
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="submit"> Submit </button>
      </form>

    </div>
  );
};

export default BooksForm;
