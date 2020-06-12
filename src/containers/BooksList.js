import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Book from '../components/Book';

const TABLE = styled.table`
width: 600px
height: 400px
`;

const BooksList = props => {
  const { state } = props;
  return (
    <TABLE className="table-one">
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
    </TABLE>
  );
};
BooksList.propTypes = {
  state: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({ state });
export default connect(mapStateToProps)(BooksList);
