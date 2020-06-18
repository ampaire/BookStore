import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ onChange, value }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <p>Category</p>
      <select onChange={onChange} value={value}>
        <option value="ALL">All</option>
        {categories.map(el => <option key={Math.random() * 100} value={el}>{el}</option>)}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CategoryFilter;
