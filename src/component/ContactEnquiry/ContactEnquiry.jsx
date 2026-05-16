import { useState } from 'react';
import './ContactEnquiry.css';

const SERVICES = [
  'Select',
  'Pre-Engineered Building (PEB)',
  'Tensile Roofing',
  'Civil Construction',
  'Architectural Design & Structural Consultancy',
  'All Type of Roofing',
  'Other / Not sure',
];

export default function ContactEnquiry() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="contact-enquiry" className="ct-enq">
      <div className="container ct-enq__inner">
        
        <div className="ct-enq__info">
          <h2 className="ct-enq__title">Let's Build Something<br/>Strong Together</h2>
          <p className="ct-enq__desc">
            Partner with India's leading steel fabrication experts. From Pre-Engineered Buildings to heavy industrial structures, we provide precision engineering and structural integrity for every project.
          </p>

          <ul className="ct-enq__contact-list">
            <li>
              <div className="ct-enq__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="ct-enq__details">
                <span className="ct-enq__label">EMAIL</span>
                <span className="ct-enq__value">tescostructure@gmail.com</span>
              </div>
            </li>
            <li>
              <div className="ct-enq__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="ct-enq__details">
                <span className="ct-enq__label">PHONE</span>
                <span className="ct-enq__value">+91 9600652424, +91 9150050533</span>
              </div>
            </li>
            <li>
              <div className="ct-enq__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div className="ct-enq__details">
                <span className="ct-enq__label">OFFICE</span>
                <span className="ct-enq__value">37, 15th St, Gandhi Nagar, Ashok <br />Nagar, Chennai, Tamil Nadu 600083</span>
              </div>
            </li>
          </ul>

          <div className="ct-enq__stats">
            <div className="ct-enq__stat">
              <span className="ct-enq__stat-num">250+</span>
              <span className="ct-enq__stat-label">PROJECTS</span>
            </div>
            <div className="ct-enq__stat">
              <span className="ct-enq__stat-num">15+</span>
              <span className="ct-enq__stat-label">YEARS EXPERIENCE</span>
            </div>
            <div className="ct-enq__stat">
              <span className="ct-enq__stat-num">100+</span>
              <span className="ct-enq__stat-label">CLIENTS</span>
            </div>
          </div>
        </div>

        <div className="ct-enq__panel">
          <h3 className="ct-enq__panel-title">Send Inquiry</h3>

          {submitted ? (
            <div className="ct-enq__thanks">
              <div className="ct-enq__thanks-icon" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3>Enquiry sent</h3>
              <p>Thanks — a Tesco engineer will reach out within one working day.</p>
            </div>
          ) : (
            <form className="ct-enq__form" onSubmit={onSubmit}>
              <label className="ct-enq__field">
                <span>FIRST NAME</span>
                <input type="text" name="name" required placeholder="First name" />
              </label>

              <label className="ct-enq__field">
                <span>EMAIL ADDRESS</span>
                <input type="email" name="email" required placeholder="you@company.com" />
              </label>

              <label className="ct-enq__field">
                <span>PHONE NUMBER</span>
                <input type="tel" name="phone" required placeholder="+91 00000 00000" />
              </label>

              <label className="ct-enq__field">
                <span>PROJECT TYPE</span>
                <select name="service" defaultValue={SERVICES[0]} required>
                  {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </label>

              <label className="ct-enq__field">
                <span>MESSAGE</span>
                <textarea name="brief" rows={4} placeholder="Briefly describe your project requirements..." />
              </label>

              <button type="submit" className="ct-enq__submit">
                Send message
              </button>
              <p className="ct-enq__note">By submitting this form, you agree to our privacy policy.</p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
