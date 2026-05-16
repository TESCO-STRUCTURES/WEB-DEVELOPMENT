import './AboutMission.css';

const CARDS = [
  { title: 'Our Mission', desc: 'Deliver projects on time through innovation, reliability, and sustainable construction practices while maintaining the highest standards of quality and safety.', icon: <><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7" /></> },
  { title: 'Our Vision', desc: 'Provide innovative, sustainable, and cost-effective construction solutions that set new benchmarks in quality and long-term performance.', icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></> },
  { title: 'Our Quality', desc: 'Ensure precision, safety, and efficiency using advanced technology, skilled expertise, and premium materials for durable and reliable results.', icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></> },
];

export default function AboutMission() {
  return (
    <section className="ts-ams-wrapper container">
      <div className="ts-ams-left">
        <div className="ts-ams__experience">
          <div className="ts-ams__exp-number">00+</div>
          <div className="ts-ams__exp-text">YEARS OF EXPERIENCE</div>
          <div className="ts-ams__exp-logos">
             <div className="ts-ams__logo-circle" style={{background: '#e11d48', zIndex: 3}}></div>
             <div className="ts-ams__logo-circle" style={{background: '#2563eb', zIndex: 2}}></div>
             <div className="ts-ams__logo-circle" style={{background: '#16a34a', zIndex: 1}}></div>
          </div>
          <p className="ts-ams__exp-desc">Trusted by industry leaders worldwide.</p>
        </div>
      </div>

      <div className="ts-ams">
        <div className="ts-ams__list">
          {CARDS.map((c, i) => (
            <div key={i} className="ts-ams__card">
               <div className="ts-ams__icon">
                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                   {c.icon}
                 </svg>
               </div>
               <div className="ts-ams__content">
                 <h3>{c.title}</h3>
                 <p>{c.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
