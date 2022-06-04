import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';
import actions from '../../redux/phone-actions';

const SearchForm = ({ value, onChange }) => (
  <label className={s.searchBlock}>
    Find Contacts by Name
    <input
      className={s.searchInput}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { filter } = state.contacts;
  return {
    value: filter,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
