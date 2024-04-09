import { useState } from 'react';
import EditForm from './EditForm';
import LockForm from './LockForm';

export default function CVForm() {
  const [editable, setEditable] = useState(true);
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

  function handleSubmit(e) {
    // setUserInfo(e); // something like this
    setEditable(!editable);
  }

  return (
    <>
      {editable ? (
        <EditForm
          onSubmit={handleSubmit}
          userInfo={userInfo}
          handleChange={handleChange} /*userInfo={userInfo} */
        />
      ) : (
        <LockForm /* userInfo={userInfo} */ />
      )}
    </>
  );
}
