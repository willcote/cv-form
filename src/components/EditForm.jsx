import '../styles/EditForm.css';

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
        {userInfo.general.map((index) => {
          const inputData = userInfo[index];
          return (
            <FormInput
              key={inputData.id}
              id={inputData.id}
              label={inputData.label}
              type={inputData.type}
              value={inputData.value}
              onChange={onChange}
            />
          );
        })}
      </div>

      <div className="form-section education">
        <h1>Education</h1>
        {userInfo.education.map((index) => {
          const inputData = userInfo[index];
          return (
            <FormInput
              key={inputData.id}
              id={inputData.id}
              label={inputData.label}
              type={inputData.type}
              value={inputData.value}
              onChange={onChange}
            />
          );
        })}
      </div>

      <div className="form-section experience">
        <h1>Work</h1>
        {userInfo.work.map((index) => {
          const inputData = userInfo[index];
          return (
            <FormInput
              key={inputData.id}
              id={inputData.id}
              label={inputData.label}
              type={inputData.type}
              value={inputData.value}
              onChange={onChange}
            />
          );
        })}
      </div>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
}
