export default function SearchBox({ value, onFilter }) {
  return (
    <label htmlFor="">
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
        placeholder="Name"
      />
    </label>
  );
}
