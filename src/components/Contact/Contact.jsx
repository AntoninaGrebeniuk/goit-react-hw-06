export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div>
      <span>{name}</span>
      <span>{number}</span>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
