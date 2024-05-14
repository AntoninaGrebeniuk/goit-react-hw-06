import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { initialContacts } from '../../data/initialContacts';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

const getContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  return savedContacts !== null ? JSON.parse(savedContacts) : initialContacts;
};

export default function App() {
  const [contacts, setContacts] = useState(getContacts);
  const [filter, setFilter] = useState('');

  const handleAddContact = data => {
    // console.log(newContact);
    const newContact = { ...data, id: nanoid() };

    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />

      <h2>Contacts</h2>
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList initialContacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
