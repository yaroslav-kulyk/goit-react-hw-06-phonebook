import ContactForm from './components/ContactForm/ContactForm';
import Counter from './components/Counter/Counter';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import s from './App.module.css';

export default function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

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
