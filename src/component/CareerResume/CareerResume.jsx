import { useState } from 'react';
import './CareerResume.css';

export default function CareerResume() {
  const [fileName, setFileName] = useState('');

  const onFile = (e) => {
    const f = e.target.files?.[0];
    setFileName(f ? f.name : '');
  };

  return (
    <section id="cr-resume" className="cr-resume">
      <div className="container cr-resume__inner">
        
        <h2 className="cr-resume__title">Don&apos;t See the Right Fit?</h2>
        <p className="cr-resume__desc">
          Drop your resume anyway. We&apos;re always looking for exceptional talent.
        </p>

        <div className="cr-resume__dropzone-wrapper">
          <label className="cr-resume__dropzone">
            <input type="file" accept=".pdf,.doc,.docx" onChange={onFile} />
            <div className="cr-resume__dz-content">
              <span className="cr-resume__dz-icon" aria-hidden>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4FA31E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                  <path d="M12 15V9"/>
                  <path d="m9 12 3-3 3 3"/>
                </svg>
              </span>
              <h3 className="cr-resume__dz-title">Drag & Drop Your Resume</h3>
              <p className="cr-resume__dz-sub">PDF, DOCX up to 10MB</p>
              
              <div className="cr-resume__dz-btn">
                Browse Files
              </div>
              
              {fileName && <p className="cr-resume__dz-file">Selected: {fileName}</p>}
            </div>
          </label>
        </div>

      </div>
    </section>
  );
}
