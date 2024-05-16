import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <label className={css.label} htmlFor="">
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
        placeholder="Name"
      />
    </label>
  );
}
