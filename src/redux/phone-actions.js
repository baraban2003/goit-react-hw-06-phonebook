import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phone/addContact', (id, name, number) => ({
  payload: {
    id,
    name,
    number,
  },
}));
const deleteEl = createAction('phone/deleteEl');
const getVisibleEl = createAction('phone/deleteEl/getVisibleEl');
const changeFilter = createAction('phone/setFilter');

const actions = {
  addContact,
  deleteEl,
  getVisibleEl,
  changeFilter,
};

export default actions;
