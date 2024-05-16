import { HiUserMinus } from 'react-icons/hi2';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <span className={css.name}>{name}</span>
      <span className={css.number}>{number}</span>
      <button
        className={css.btnDelete}
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        <HiUserMinus />
      </button>
    </>
  );
}
