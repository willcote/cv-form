export default function LockForm({ userInfo, onSubmit }) {
  return (
    <>
      {Object.keys(userInfo).map((key) => {
        const info = userInfo[key];

        return (
          <>
            <h1>{info.label}</h1>
            <p key={`${info.index}`}>{info.value}</p>
          </>
        );
      })}

      <button onClick={onSubmit} type="button">
        Edit
      </button>
    </>
  );
}
