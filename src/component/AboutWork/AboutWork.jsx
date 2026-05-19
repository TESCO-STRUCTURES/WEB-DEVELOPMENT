import './AboutWork.css';

const STEPS = [
  { n: '01', title: 'REQUIREMENT & PLANNING',   desc: 'Understanding project needs, site conditions, and strategic scope definition.', icon: <><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></> },
  { n: '02', title: 'DESIGN & APPROVAL',         desc: 'Creating optimized designs and securing rigorous technical approvals.',        icon: <><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></> },
  { n: '03', title: 'MATERIAL & PREPARATION',    desc: 'Procuring high-quality materials and planning critical project resources.',    icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></> },
  { n: '04', title: 'EXECUTION & INSTALLATION',  desc: 'Construction and installation with uncompromising safety standards.',         icon: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></> },
  { n: '05', title: 'QUALITY & HANDOVER',         desc: 'Final inspections and strategic delivery for lifelong durability.',            icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></> },
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
          {/* Curved connector — 1101.5 × 179.15 px, 4px stroke */}
          <svg
            className="ts-awk__line"
            viewBox="0 0 1100 180"
            preserveAspectRatio="none"
            aria-hidden
          >
            {/* Arc 1: box1 → box2 — orange, arches UP */}
            <path
              d="M 110,90 C 170,5 270,5 330,90"
              fill="none" stroke="#FF6A00" strokeWidth="4" strokeLinecap="round"
            />
            {/* Arc 2: box2 → box3 — gray, arches DOWN */}
            <path
              d="M 330,90 C 390,175 490,175 550,90"
              fill="none" stroke="#A3A3A3" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.8"
            />
            {/* Arc 3: box3 → box4 — orange, arches UP */}
            <path
              d="M 550,90 C 610,5 710,5 770,90"
              fill="none" stroke="#FF6A00" strokeWidth="4" strokeLinecap="round"
            />
            {/* Arc 4: box4 → box5 — gray, arches DOWN */}
            <path
              d="M 770,90 C 830,175 930,175 990,90"
              fill="none" stroke="#A3A3A3" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.8"
            />
          </svg>

          <div className="ts-awk__steps">
            {STEPS.map((s) => (
              <div key={s.n} className="ts-awk__step">
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
