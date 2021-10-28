import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-actions';
import PropTypes, { arrayOf } from 'prop-types';
import s from './ContactList.module.css';
import actionTypes from '../../redux/phonebook/phonebook-types';

const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <ContactListItem
              name={name}
              number={number}
              onContactDelete={() => onContactDelete(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

// const mapStateToProps = state => {
//   return {
//     contacts: state.contacts.items
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   onContactDelete: id => dispatch(deleteContact(id))
//   onDecrement: value => dispatch(actions.decrement(value)),
// });

ContactList.propTypes = {
  contacts: arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  onContactDelete: PropTypes.func,
};

export default connect()(ContactList);
