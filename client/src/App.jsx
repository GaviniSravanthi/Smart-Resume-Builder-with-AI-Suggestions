import React, { useState, useRef } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import ReactToPrint from 'react-to-print';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    summary: '',
    education: '',
    experience: '',
    skills: '',
  });

  const [suggestion, setSuggestion] = useState('');
  const [previewData, setPreviewData] = useState({});
  const previewRef = useRef();

  const handleSave = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/resume', data);
      if (res.status === 201) {
        setPreviewData(data); 
      }
    } catch (err) {
      console.error('Error saving resume:', err.message);
    }
  };

  const handleSuggest = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/suggestions', data);
      setSuggestion(res.data.suggestions);
    } catch (err) {
      console.error('Error fetching suggestions:', err.message);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Smart Resume Builder</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <ResumeForm
          data={data}
          setData={setData}
          onSave={handleSave}
          onSuggest={handleSuggest}
          suggestion={suggestion}
        />
        <div>
          {previewData.name ? (
            <div ref={previewRef}>
              <ResumePreview data={previewData} />
            </div>
          ) : (
            <p className="text-center text-gray-500">No preview yet. Save your resume first.</p>
          )}
          {previewData.name && (
            <ReactToPrint
              trigger={() => (
                <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700">
                  Export to PDF
                </button>
              )}
              content={() => previewRef.current}
            />
          )}
        </div>
      </div>
    </div>
  );
}
