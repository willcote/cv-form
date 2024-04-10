export default function LockForm({ userInfo, onSubmit }) {
  return (
    <>
      <h1>General</h1>
      {userInfo.general.map((index) => {
        let inputData = userInfo[index];
        return (
          <>
            <h2>{inputData.label}</h2>
            <p>{inputData.value}</p>
          </>
        );
      })}

      <h1>Education</h1>
      {userInfo.education.map((index) => {
        let inputData = userInfo[index];
        return (
          <>
            <h2>{inputData.label}</h2>
            <p>{inputData.value}</p>
          </>
        );
      })}

      <h1>Work</h1>
      {userInfo.work.map((index) => {
        let inputData = userInfo[index];
        return (
          <>
            <h2>{inputData.label}</h2>
            <p>{inputData.value}</p>
          </>
        );
      })}

      <button onClick={onSubmit} type="button">
        Edit
      </button>
    </>
  );
}
