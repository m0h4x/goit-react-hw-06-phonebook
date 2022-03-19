import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Item.styles';
import { Box } from './Box.styles';

const ContactListItem = ({ name, number, children }) => {
  return (
    <Item>
      <Box>
        {name} : {number}
      </Box>
      {children}
    </Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ContactListItem;
