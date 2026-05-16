import './AboutWork.css';

const STEPS = [
  { n: '01', title: 'REQUIREMENT & PLANNING', desc: 'Understanding project needs, site conditions, and strategic scope definition.', icon: <><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></> },
  { n: '02', title: 'DESIGN & APPROVAL',     desc: 'Creating optimized designs and securing rigorous technical approvals.', icon: <><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></> },
  { n: '03', title: 'MATERIAL & PREPARATION',            desc: 'Procuring high-quality materials and planning critical project resources.', icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></> },
  { n: '04', title: 'EXECUTION & INSTALLATION',     desc: 'Construction and installation with uncompromising safety standards.', icon: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></> },
  { n: '05', title: 'QUALITY & HANDOVER',               desc: 'Final inspections and strategic delivery for lifelong durability.', icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></> },
];

export default function AboutWork() {
  return (
    <section className="ts-awk">
      <div className="container">
        <div className="ts-awk__head">
          <span className="ts-awk__eyebrow">Our Work Process</span>
          <p className="ts-awk__desc">
            Delivering quality construction through a structured and efficient workflow
          </p>
        </div>

        <div className="ts-awk__timeline">
           <svg className="ts-awk__line" viewBox="0 0 1000 100" preserveAspectRatio="none">
             <path d="M 100 80 C 150 80, 250 20, 300 20 C 350 20, 450 80, 500 80" fill="none" stroke="#FF6A00" strokeWidth="2" />
             <path d="M 500 80 C 550 80, 650 20, 700 20 C 750 20, 850 80, 900 80" fill="none" stroke="#D1D5DB" strokeWidth="2" />
           </svg>
           <div className="ts-awk__steps">
             {STEPS.map((s, i) => (
               <div key={s.n} className={`ts-awk__step ts-awk__step--${i+1}`}>
                 <div className="ts-awk__icon-wrap">
                   <div className="ts-awk__icon-box">
                     <span className="ts-awk__red-dot"></span>
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                       {s.icon}
                     </svg>
                   </div>
                   <div className="ts-awk__badge">{s.n}</div>
                 </div>
                 <h3 className="ts-awk__title">{s.title}</h3>
                 <p className="ts-awk__step-desc">{s.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
