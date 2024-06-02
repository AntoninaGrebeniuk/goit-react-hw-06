// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import { initialContacts } from '../../data/initialContacts';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import css from './App.module.css';

// const getContacts = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
// };

export default function App() {
  //   const [contacts, setContacts] = useState(getContacts);
  //   const [filter, setFilter] = useState('');

  //   const handleAddContact = data => {
  //     const newContact = { ...data, id: nanoid() };

  //     setContacts(prevContacts => {
  //       return [...prevContacts, newContact];
  //     });
  //   };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts => {
  //     return prevContacts.filter(contact => contact.id !== contactId);
  //   });
  // };

  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase()),
  // );

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.subtitle}>Contacts</h2>
      <div className={css.wrapper}>
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}
