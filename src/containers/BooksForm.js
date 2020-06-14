import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';


const INPUT = styled.input`
padding: 7px;
margin-right: 3%;
`;

const SELECT = styled.select`
padding: 5px;
background: brown;
color:white;
margin-right: 2%;
`;
const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 1000),
      title: '',
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === 'title') {
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.name === 'category') {
      this.setState({
        category: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    const { title } = this.state;
    const { createBook } = this.props;
    e.preventDefault();
    if (title) {
      createBook(this.state);
      this.reset();
    }
  }

  reset() {
    this.setState({
      id: Math.ceil(Math.random() * 1000),
      title: '',
      category: categories[0],
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="input-form">
        <INPUT name="title" type="text" value={title} onChange={this.handleChange} />
        <SELECT name="category" value={category} onChange={this.handleChange}>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </SELECT>
        <button type="submit"> Submit </button>
      </form>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
