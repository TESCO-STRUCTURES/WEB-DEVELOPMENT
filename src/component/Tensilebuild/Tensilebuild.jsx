import { useState } from 'react';
import './Tensilebuild.css';
import buildImg from '../../assets/tensileprojects1.svg';

const PROJECT_TYPES = [
  'Tensile Structure',
  'Pre-Engineered Building (PEB)',
  'Civil Construction',
  'Architectural Design',
  'All Type of Roofing',
  'Other',
];

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/tescostructure@gmail.com';

export default function Tensilebuild() {
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const btnLabel = {
    idle: 'Submit Enquiry',
    sending: 'Sending…',
    sent: "Thanks — we'll be in touch!",
    error: "Couldn't send — please retry",
  }[status];

  return (
    <section id="ten-build" className="ten-bld">
      <div className="container ten-bld__inner">

        <div className="ten-bld__visual">
          <img src={buildImg} alt="Tesco Structure tensile install" className="ten-bld__visual-img" />
        </div>

        <form className="ten-bld__form" onSubmit={onSubmit} noValidate>
          <h2 className="ten-bld__title">Let&apos;s Build Your Project</h2>
          <p className="ten-bld__desc">
            Connect with our tensile experts for customized fabric structure solutions.
          </p>

          <input type="hidden" name="_subject" value="New Tensile enquiry — Tesco Structures website" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_source" value="Tensile Roofing page" />
          <input type="text" name="_honey" tabIndex="-1" autoComplete="off" style={{ display: 'none' }} />

          <div className="ten-bld__row ten-bld__row--two">
            <label className="ten-bld__field">
              <span className="ten-bld__field-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </span>
              <input name="name" type="text" placeholder="Full Name" required />
            </label>
            <label className="ten-bld__field">
              <span className="ten-bld__field-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <input name="email" type="email" placeholder="Corporate Email" required />
            </label>
          </div>

          <div className="ten-bld__row ten-bld__row--two">
            <label className="ten-bld__field">
              <span className="ten-bld__field-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <input name="phone" type="tel" placeholder="Phone Number" required />
            </label>
            <label className="ten-bld__field">
              <span className="ten-bld__field-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/>
                </svg>
              </span>
              <input name="company" type="text" placeholder="Company Name" />
            </label>
          </div>

          <label className="ten-bld__field">
            <span className="ten-bld__field-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-6 9 6v12H3z"/><path d="M9 21V12h6v9"/>
              </svg>
            </span>
            <select name="project_type" required defaultValue="">
              <option value="" disabled>Project Type</option>
              {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <span className="ten-bld__field-chev" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </label>

          <label className="ten-bld__field ten-bld__field--area">
            <textarea name="message" rows="4" placeholder="Tell us about your project requirements" />
          </label>

          <button type="submit" className="ten-bld__btn" disabled={status === 'sending'}>
            {btnLabel}
          </button>
        </form>

      </div>
    </section>
  );
}
