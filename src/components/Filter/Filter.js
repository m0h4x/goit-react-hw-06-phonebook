import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { LableFilter } from './LableFilter.styles';

const Filter = ({ handleChange }) => {
  const filterInputId = nanoid();
  return (
    <>
      <LableFilter htmlFor={filterInputId}>Find contacts by name</LableFilter>
      <input
        id={filterInputId}
        type="text"
        name="filter"
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
