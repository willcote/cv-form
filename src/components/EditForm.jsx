import { useState } from "react";
import "../styles/EditForm.css";

function FormInput({ id, label, type }) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <label htmlFor={id}>
        {label}
        <input type={type} id={id} value={input} onChange={handleChange} />
      </label>
    </>
  );
}

export default function EditForm({ onSubmit, userInfo }) {
  return (
    <form>
      <div className="form-section general">
        <h1>General</h1>
        <FormInput id="name" label="name" type="text" />
        <FormInput id="email" label="email" type="email" />
        <FormInput id="phone-number" label="phone number" type="tel" />
      </div>
      <div className="form-section education">
        <h1>Education</h1>
        <label htmlFor="school">
          school
          <input type="text" id="school" />
        </label>
        <label htmlFor="area-of-study">
          area of study
          <input type="text" id="area-of-study" />
        </label>
        <label htmlFor="graduation-date">
          graduation date
          <input type="date" id="graduation-date" />
        </label>
      </div>
      <div className="form-section experience">
        <h1>Experience</h1>
        <label htmlFor="company">
          company
          <input type="text" id="company" />
        </label>
        <label htmlFor="position">
          position
          <input type="text" id="position" />
        </label>
        <label htmlFor="responsibilities">
          responsibilities
          <input type="text" id="responsibilities" />
        </label>
        <label htmlFor="start-date">
          start date
          <input type="date" id="start-date" />
        </label>
        <label htmlFor="end-date">
          end date
          <input type="date" id="end-date" />
        </label>
      </div>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
}
