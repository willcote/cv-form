export default function InputField({ type, label }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} />
    </>
  );
}
