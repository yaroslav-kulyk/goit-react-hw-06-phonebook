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

export default addContact;
