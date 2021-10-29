import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Counter from './components/Counter/Counter';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import s from './App.module.css';

// const shortid = require('shortid');

export default function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   if (
  //     contacts.find(
  //       contact => contact.name.toLowerCase() === name.toLowerCase(),
  //     )
  //   ) {
  //     alert(`${name} already in contacts`);
  //     return;
  //   }

  //   const newContact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   setContacts(state => [...state, newContact]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(state => state.filter(contact => contact.id !== contactId));
  // };

  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const normalizedFilter = filter.toLowerCase();
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter),
  // );

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Counter</h2>
      <Counter />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
