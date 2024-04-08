import InputSection from './InputSection';

import '../styles/form.css';

export default function ImportForm() {
  return (
    <form action="">
      <InputSection
        inputs={[
          {
            id: 0,
            type: 'text',
            label: 'name',
          },
          { id: 1, type: 'email', label: 'email' },
          { id: 2, type: 'tel', label: 'phone number' },
        ]}
      />
      <InputSection
        inputs={[
          { id: 0, type: 'text', label: 'school' },
          { id: 1, type: 'text', label: 'area of study' },
          { id: 0, type: 'date', label: 'graduation date' },
        ]}
      />
      <InputSection
        inputs={[
          { id: 0, type: 'text', label: 'company' },
          { id: 1, type: 'text', label: 'position' },
          { id: 2, type: 'text', label: 'responsibilities' },
          { id: 3, type: 'date', label: 'from' },
          { id: 4, type: 'date', label: 'to' },
        ]}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
