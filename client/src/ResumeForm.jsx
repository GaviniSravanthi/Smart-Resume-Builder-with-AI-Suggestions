import React from 'react';

export default function ResumeForm({ data, setData, onSave, onSuggest, suggestion }) {
  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const fields = [
    'name', 'address', 'phone', 'email',
    'linkedin', 'github', 'summary',
    'education', 'experience', 'skills',
  ];

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      {fields.map((field, index) => (
        <React.Fragment key={field}>
          <div>
            <label htmlFor={field} className="block font-semibold capitalize">
              {field}
            </label>
            {['address', 'summary', 'education', 'experience', 'skills'].includes(field) ? (
              <textarea
                id={field}
                name={field}
                value={data[field] || ''}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                className="w-full border rounded p-2"
                rows={3}
              />
            ) : (
              <input
                id={field}
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                value={data[field] || ''}
                onChange={handleChange}
                placeholder={`Enter your ${field}`}
                className="w-full border rounded p-2"
              />
            )}
          </div>
          {index < fields.length - 1 && <hr className="my-3 border-gray-300" />}
        </React.Fragment>
      ))}

      {suggestion && (
        <div className="bg-gray-100 p-3 rounded border border-gray-300 text-sm whitespace-pre-wrap">
          <strong>AI Suggestions:</strong>
          <p>{suggestion}</p>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <button
          onClick={onSuggest}
          className="w-full py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
        >
          Get AI Suggestions
        </button>
        <button
          onClick={onSave}
          className="w-full py-2 bg-indigo-600 text-white rounded font-semibold hover:bg-indigo-700"
        >
          Save & Preview
        </button>
      </div>
    </div>
  );
}
