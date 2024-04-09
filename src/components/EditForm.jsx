import { useState } from 'react';
import '../styles/EditForm.css';

function FormInput({ id, label, type, value, onChange }) {
  // const [input, setInput] = useState('');

  // function handleChange(e) {
  //   setInput(e.target.value);
  // }

  return (
    <>
      <label htmlFor={id}>
        {label}
        <input type={type} id={id} value={value} onChange={onChange} />
      </label>
    </>
  );
}

export default function EditForm({ onSubmit }) {
  const [userInfo, setUserInfo] = useState({});

  function handleChange(e) {
    const id = e.target.id;
    const value = e.target.value;

    let newInfo = {
      ...userInfo,
    };

    newInfo[id] = (userInfo.id ? userInfo.id : '') + value;

    setUserInfo(newInfo);
  }

  return (
    <form>
      <div className="form-section general">
        <h1>General</h1>
        <FormInput
          id="name"
          label="name"
          type="text"
          value={userInfo.name}
          onChange={handleChange}
        />
        <FormInput
          id="email"
          label="email"
          type="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <FormInput
          id="phone-number"
          label="phone number"
          type="tel"
          value={userInfo['phone-number']}
          onChange={handleChange}
        />
      </div>
      <div className="form-section education">
        <h1>Education</h1>
        <FormInput
          id={'school'}
          label={'school'}
          type={'text'}
          value={userInfo.school}
          onChange={handleChange}
        />
        <FormInput
          id={'major'}
          label={'major'}
          type={'text'}
          value={userInfo.major}
          onChange={handleChange}
        />
        <FormInput
          id={'graduation-date'}
          label={'graduation date'}
          type={'date'}
          value={userInfo['graduation-date']}
          onChange={handleChange}
        />
      </div>
      <div className="form-section experience">
        <h1>Experience</h1>
        <FormInput
          id={'company'}
          label="company"
          type={'text'}
          value={userInfo.company}
          onChange={handleChange}
        />
        <FormInput
          id={'position'}
          label="position"
          type={'text'}
          value={userInfo.position}
          onChange={handleChange}
        />
        <FormInput
          id={'responsibilities'}
          label="responsibilities"
          type={'text'}
          value={userInfo.responsibilities}
          onChange={handleChange}
        />
        <FormInput
          id={'start-date'}
          label="start date"
          type={'date'}
          value={userInfo['start-date']}
          onChange={handleChange}
        />
        <FormInput
          id={'end-date'}
          label="end date"
          type={'date'}
          value={userInfo['end-date']}
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
}
