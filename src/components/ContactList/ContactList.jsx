import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ initialContacts, onDelete }) {
  return (
    <ul>
      {initialContacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}