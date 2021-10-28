// {
//     counter: {},
//     contacts: {
//         items: [],
//         filter: ''
//     }
// }

import { combineReducers } from 'redux';
import actionTypes from './phonebook-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];

    case actionTypes.DELETE:
      return state.filter(contact => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
