import { useState, Fragment } from 'react';
import '../styles/input.css';

export default function InputSection({ inputs }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="input-container">
      {inputs.map((input) => {
        return (
          <Fragment key={input.id}>
            <label htmlFor={input.label}>{input.label}</label>
            <input type={input.type} id={input.label} />
          </Fragment>
        );
      })}
    </div>
  );
}
