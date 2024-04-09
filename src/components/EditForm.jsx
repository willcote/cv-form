import { useState } from 'react';
import '../styles/EditForm.css';
import { initialFormData } from '../initialFormData';

function FormInput({ id, label, type, value, onChange }) {
  return (
    <>
      <label htmlFor={id}>
        {label}
        <input type={type} id={id} value={value} onChange={onChange} />
      </label>
    </>
  );
}

export default function EditForm({ onSubmit, userInfo, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-section general">
        <h1>General</h1>
        <FormInput
          id={0}
          label="name"
          type="text"
          value={userInfo[0] && userInfo[0].value}
          onChange={onChange}
        />
        <FormInput
          id={1}
          label="email"
          type="email"
          value={userInfo[1] && userInfo[1].value}
          onChange={onChange}
        />
        <FormInput
          id={2}
          label="phone number"
          type="tel"
          value={userInfo[2] && userInfo[2].value}
          onChange={onChange}
        />
      </div>

      <div className="form-section education">
        <h1>Education</h1>
        <FormInput
          id={3}
          label={'school'}
          type={'text'}
          value={userInfo[3] && userInfo[3].value}
          onChange={onChange}
        />
        <FormInput
          id={4}
          label={'major'}
          type={'text'}
          value={userInfo[4] && userInfo[4].value}
          onChange={onChange}
        />
        <FormInput
          id={5}
          label={'graduation date'}
          type={'date'}
          value={userInfo[5] && userInfo[5].value}
          onChange={onChange}
        />
      </div>
      <div className="form-section experience">
        <h1>Experience</h1>
        <FormInput
          id={6}
          label="company"
          type={'text'}
          value={userInfo[6] && userInfo[6].value}
          onChange={onChange}
        />
        <FormInput
          id={7}
          label="position"
          type={'text'}
          value={userInfo[7] && userInfo[7].value}
          onChange={onChange}
        />
        <FormInput
          id={8}
          label="responsibilities"
          type={'text'}
          value={userInfo[8] && userInfo[8].value}
          onChange={onChange}
        />
        <FormInput
          id={9}
          label="start date"
          type={'date'}
          value={userInfo[9] && userInfo[9].value}
        />
        <FormInput
          id={10}
          label="end date"
          type={'date'}
          value={userInfo[10] && userInfo[10].value}
          onChange={onChange}
        />
      </div>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
}
