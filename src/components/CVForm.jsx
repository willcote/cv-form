import { useState } from 'react';
import EditForm from './EditForm';
import LockForm from './LockForm';
import { initialFormData } from '../initialFormData';

export default function CVForm() {
  const [editable, setEditable] = useState(true);

  //  format:
  //  object of objects -
  //  {
  //    0: {id: _, label: _, value: _},
  //    1: {id: _, label: _, value: _},
  //    ...
  //  }
  const [userInfo, setUserInfo] = useState(initialFormData);

  function handleChange(e) {
    const id = e.target.id;
    const label = e.target.parentNode.textContent;
    const type = e.target.type;
    const value = e.target.value;

    let newInfo = { ...userInfo, [+id]: { id, label, type, value } };

    setUserInfo(newInfo);
  }

  function handleSubmit() {
    setEditable(!editable);
  }

  return (
    <>
      {editable ? (
        <EditForm
          onSubmit={handleSubmit}
          userInfo={userInfo}
          onChange={handleChange}
        />
      ) : (
        <LockForm userInfo={userInfo} onSubmit={handleSubmit} />
      )}
    </>
  );
}
