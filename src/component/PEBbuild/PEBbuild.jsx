import { useState } from 'react';
import './PEBbuild.css';
import buildImg from '../../assets/PEBbuild.svg';

const PROJECT_TYPES = [
  'Pre-Engineered Building (PEB)',
  'Tensile Structure',
  'Civil Construction',
  'Architectural Design',
  'All Type of Roofing',
  'Other',
];

export default function PEBbuild() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="peb-build" className="peb-bld">
      <div className="container peb-bld__inner">

        {/* LEFT — image with floating badges */}
        <div className="peb-bld__visual">
          <img src={buildImg} alt="Tesco Structure industrial build site" className="peb-bld__visual-img" />

          <div className="peb-bld__badge peb-bld__badge--top">
            <span className="peb-bld__badge-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF8A1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/><path d="M9 14v7l3-2 3 2v-7"/>
              </svg>
            </span>
            <div className="peb-bld__badge-body">
              <strong>25+ Years Experience</strong>
              <span>GLOBAL INDUSTRY LEADER</span>
            </div>
          </div>

          <div className="peb-bld__badge peb-bld__badge--bottom">
            <span className="peb-bld__badge-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="#FF8A1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V8l7-5 7 5v13M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/>
              </svg>
            </span>
            <div className="peb-bld__badge-body">
              <strong>500+ Projects Completed</strong>
              <span>ACROSS 4 CITIES (INDIA)</span>
            </div>
          </div>
        </div>

        {/* RIGHT — dark form */}
        <form className="peb-bld__form" onSubmit={onSubmit}>
          <h2 className="peb-bld__title">Let&apos;s Build Your Project</h2>
          <p className="peb-bld__desc">
            Connect with our engineering experts for customized steel structure solutions.
          </p>

          <div className="peb-bld__row peb-bld__row--two">
            <label className="peb-bld__field">
              <span className="peb-bld__field-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </span>
              <input type="text" placeholder="Full Name" required />
            </label>
            <label className="peb-bld__field">
              <span className="peb-bld__field-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <input type="email" placeholder="Corporate Email" required />
            </label>
          </div>

          <div className="peb-bld__row peb-bld__row--two">
            <label className="peb-bld__field">
              <span className="peb-bld__field-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <input type="tel" placeholder="Phone Number" required />
            </label>
            <label className="peb-bld__field">
              <span className="peb-bld__field-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/>
                </svg>
              </span>
              <input type="text" placeholder="Company Name" />
            </label>
          </div>

          <label className="peb-bld__field">
            <span className="peb-bld__field-icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-6 9 6v12H3z"/><path d="M9 21V12h6v9"/>
              </svg>
            </span>
            <select required defaultValue="">
              <option value="" disabled>Project Type</option>
              {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <span className="peb-bld__field-chev" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </label>

          <label className="peb-bld__field peb-bld__field--area">
            <textarea rows="4" placeholder="Tell us about your project requirements" />
          </label>

          <button type="submit" className="peb-bld__btn">
            {sent ? 'Thanks — we\'ll be in touch!' : 'Send Enquiry ▷'}
          </button>
        </form>

      </div>
    </section>
  );
}
