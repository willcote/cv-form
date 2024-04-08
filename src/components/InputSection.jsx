import { useState, Fragment } from 'react';
import '../styles/input.css';

export default function InputSection({ inputs }) {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState();

  function getValues() {
    let inputValues = [];
    for (let i = 0; i < inputs.length; i++) {
      inputValues.push({
        id: inputs[i].id,
        label: inputs[i].label,
        type: inputs[i].type,
        value: document.getElementById(inputs[i].label).value,
      });
    }

    return inputValues;
  }

  function handleClick() {
    if (!submitted) setValues(getValues());
    setSubmitted(!submitted);
  }

  return (
    <div className="input-container">
      {submitted ? (
        <>
          {values.map((value) => {
            return (
              <Fragment key={value.label}>
                <label>{value.label}</label>
                <input type={value.type} value={value.value} disabled />
              </Fragment>
            );
          })}
          <button type="button" onClick={handleClick}>
            Edit
          </button>
        </>
      ) : (
        <>
          {inputs.map((input) => {
            return (
              <Fragment key={input.id}>
                <label htmlFor={input.label}>{input.label}</label>
                <input type={input.type} id={input.label} />
              </Fragment>
            );
          })}
          <button type="button" onClick={handleClick}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}
