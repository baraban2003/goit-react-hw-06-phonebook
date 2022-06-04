import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './SearchForm.module.css';
import actions from '../../redux/phone-actions';

export default function SearchForm() {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.searchBlock}>
      Find Contacts by Name
      <input
        className={s.searchInput}
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </label>
  );
}
