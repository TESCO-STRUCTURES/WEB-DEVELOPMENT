import { useRef, useState } from 'react';
import './CareerResume.css';

/* Delivery endpoint — FormSubmit accepts file attachments when posted as
   multipart/form-data (NOT the /ajax/ JSON variant). The file input must
   be named "attachment". The form posts into a hidden iframe so the
   visitor's page never reloads. */
const FORM_ENDPOINT = 'https://formsubmit.co/tescostructure@gmail.com';
const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

export default function CareerResume() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error' | 'toobig'
  const [fileName, setFileName] = useState('');
  const formRef = useRef(null);

  const onFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;

    if (f.size > MAX_BYTES) {
      setFileName(f.name);
      setStatus('toobig');
      return;
    }

    setFileName(f.name);
    setStatus('sending');

    // Submit the parent form via the hidden iframe — fire and forget
    formRef.current?.submit();

    // FormSubmit responds quickly; optimistically flip to "sent"
    setTimeout(() => setStatus('sent'), 1600);
  };

  const reset = () => {
    setFileName('');
    setStatus('idle');
    formRef.current?.reset();
  };

  const dzTitle =
    status === 'sent'    ? "Thanks — we've received your resume!" :
    status === 'sending' ? 'Sending your resume…' :
    status === 'toobig'  ? 'File is too large' :
                           'Drag & Drop Your Resume';

  const dzBtn =
    status === 'sending' ? 'Sending…' :
    status === 'sent'    ? 'Send another' :
                           'Browse Files';

  return (
    <section id="cr-resume" className="cr-resume">

      <div className="container cr-resume__inner">

        <h2 className="cr-resume__title">
          Don&apos;t See the Right Fit?
        </h2>

        <p className="cr-resume__desc">
          Drop your resume anyway. We&apos;re always looking for exceptional talent.
        </p>

        {/* Hidden iframe receives FormSubmit's response so this page doesn't reload */}
        <iframe
          name="cr-resume-frame"
          title="resume-frame"
          style={{ display: 'none' }}
        />

        <form
          ref={formRef}
          action={FORM_ENDPOINT}
          method="POST"
          encType="multipart/form-data"
          target="cr-resume-frame"
          className="cr-resume__dropzone-wrapper"
        >
          {/* FormSubmit config — hidden fields */}
          <input type="hidden" name="_subject" value="New Resume submission — Tesco Structures careers" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_source" value="Careers page — Drop your resume" />
          {/* Honeypot — bots fill this, humans don't see it */}
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />

          <label className="cr-resume__dropzone">

            <input
              type="file"
              name="attachment"
              accept=".pdf,.doc,.docx"
              onChange={onFile}
              disabled={status === 'sending'}
            />

            <div className="cr-resume__dz-content">

              <span
                className="cr-resume__dz-icon"
                aria-hidden
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4FA31E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
                  <path d="M12 15V9"/>
                  <path d="m9 12 3-3 3 3"/>
                </svg>
              </span>

              <h3 className="cr-resume__dz-title">
                {dzTitle}
              </h3>

              <p className="cr-resume__dz-sub">
                PDF, DOCX up to 10MB
              </p>

              <div
                className="cr-resume__dz-btn"
                onClick={(e) => {
                  // If we're in "sent" state, let the user submit another file
                  if (status === 'sent') {
                    e.preventDefault();
                    reset();
                  }
                }}
              >
                {dzBtn}
              </div>

              {fileName && status === 'sending' && (
                <p className="cr-resume__dz-file">
                  Sending: {fileName}
                </p>
              )}
              {fileName && status === 'sent' && (
                <p className="cr-resume__dz-file" style={{ color: '#4FA31E' }}>
                  ✓ {fileName} delivered to our recruitment team
                </p>
              )}
              {status === 'toobig' && (
                <p className="cr-resume__dz-file" style={{ color: '#c0392b' }}>
                  {fileName} is over 10 MB — please compress and retry.
                </p>
              )}

            </div>

          </label>

        </form>

      </div>

    </section>
  );
}
