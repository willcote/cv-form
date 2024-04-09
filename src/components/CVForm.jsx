import { useState } from 'react';
import EditForm from './EditForm';
import LockForm from './LockForm';

export default function CVForm() {
  const [editable, setEditable] = useState(true);
  // const [userInfo, setUserInfo] = useState({});

  function handleSubmit(e) {
    // setUserInfo(e); // something like this
    setEditable(!editable);
  }

  return (
    <>
      {editable ? (
        <EditForm onSubmit={handleSubmit} /*userInfo={userInfo} */ />
      ) : (
        <LockForm /* userInfo={userInfo} */ />
      )}
    </>
  );
}
