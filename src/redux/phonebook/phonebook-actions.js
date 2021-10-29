import shortid from 'shortid';
import actionTypes from './phonebook-types';

const addContact = ({ name, number }) => {
  const newContact = {
    id: shortid.generate(),
    name,
    number,
  };

  return {
    type: actionTypes.ADD,
    payload: newContact,
  };
};

const deleteContact = contactId => ({
  type: actionTypes.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});

export { addContact, deleteContact, changeFilter };
