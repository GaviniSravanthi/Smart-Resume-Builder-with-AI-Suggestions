
import React from 'react';

export default function ResumePreview({ data }) {
  if (!data.name) {
    return (
      <div className="p-4 bg-gray-100 text-center text-gray-600">
        No preview yet. Save your resume first.
      </div>
    );
  }

  return (
    <div className="bg-white px-8 py-6 rounded shadow print:p-0 print:shadow-none print:text-black max-w-3xl mx-auto">
      {/* Name */}
      <h2 className="text-2xl font-bold text-center mb-1">{data.name}</h2>

      {/* Address */}
      {data.address && (
        <p className="text-center text-sm text-gray-700 mb-2">{data.address}</p>
      )}

      {/* Contact */}
      <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-blue-700 mb-4">
        {data.phone && <span>{data.phone}</span>}
        {data.email && (
          <a href={`mailto:${data.email}`} className="hover:underline">
            {data.email}
          </a>
        )}
        {data.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
        )}
        {data.github && (
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
        )}
      </div>

      <hr className="my-8 border-t-4 border-gray-300 rounded" />

      {/* Summary */}
      {data.summary && (
        <section className="mt-6">
          <h3 className="font-semibold text-xl mb-2">Summary</h3>
          <p className="leading-relaxed whitespace-pre-line mt-2">{data.summary}</p>
          <hr className="my-8 border-t-4 border-gray-300 rounded" />
        </section>
      )}

      {/* Education */}
      <section className="mt-6">
        <h3 className="font-semibold text-xl mb-2">Education</h3>
        {data.education ? (
          <ul className="list-disc list-inside space-y-1 mt-2">
            {data.education
              .split('\n')
              .filter((line) => line.trim() !== '')
              .map((line, idx) => (
                <li key={idx}>{line.trim()}</li>
              ))}
          </ul>
        ) : (
          <p className="italic text-gray-500 mt-2">Not provided</p>
        )}
        <hr className="my-8 border-t-4 border-gray-300 rounded" />
      </section>

      {/* Experience */}
      <section className="mt-6">
        <h3 className="font-semibold text-xl mb-2">Experience</h3>
        {data.experience ? (
          <div className="space-y-6 mt-2">
            {data.experience
              .split(/\n\s*\n/) // split into blocks by blank lines
              .map((entry, entryIdx) => {
                const lines = entry
                  .trim()
                  .split('\n')
                  .filter((line) => line.trim() !== '');
                const [firstLine, ...bulletPoints] = lines;

                return (
                  <div key={entryIdx} className="space-y-1">
                    <p className="font-bold">{firstLine}</p>
                    {bulletPoints.length > 0 && (
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        {bulletPoints.map((bp, bpIdx) => (
                          <li key={bpIdx}>{bp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
          </div>
        ) : (
          <p className="italic text-gray-500 mt-2">Not provided</p>
        )}
        <hr className="my-8 border-t-4 border-gray-300 rounded" />
      </section>

      {/* Skills */}
      <section className="mt-6">
        <h3 className="font-semibold text-xl mb-2">Skills</h3>
        {data.skills ? (
          <ul className="list-disc list-inside space-y-1 mt-2">
            {data.skills
              .split('\n')
              .filter((line) => line.trim() !== '')
              .map((line, idx) => (
                <li key={idx}>{line.trim()}</li>
              ))}
          </ul>
        ) : (
          <p className="italic text-gray-500 mt-2">Not provided</p>
        )}
      </section>
    </div>
  );
}



