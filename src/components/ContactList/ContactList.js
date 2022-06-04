import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import actions from '../../redux/phone-actions';

const ContactList = ({ contactArrey, onDeleteEl }) => {
  return (
    <ul>
      {contactArrey.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteEl={onDeleteEl}
          />
        );
      })}
    </ul>
  );
};

const getVisibleEl = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = state => {
  const { contacts, filter } = state.contacts;
  const visibleEl = getVisibleEl(contacts, filter);

  return {
    contactArrey: visibleEl,
  };
};

ContactList.propTypes = {
  contactArrey: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteEl: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onDeleteEl: id => dispatch(actions.deleteEl(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
