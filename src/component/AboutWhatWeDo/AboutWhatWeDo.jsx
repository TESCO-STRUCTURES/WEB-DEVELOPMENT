import './AboutWhatWeDo.css';
import w1 from '../../assets/about what1.svg';
import w2 from '../../assets/about what2.svg';
import w3 from '../../assets/about what3.svg';
import w4 from '../../assets/about what4.svg';
import w5 from '../../assets/about what5.svg';

const SERVICES = [
  { img: w1, title: 'Pre Engineered Buildings', icon: <><path d="M3 21h18 M3 7v14 M21 7v14 M6 21V7 M18 21V7 M9 21v-4a3 3 0 0 1 6 0v4 M3 7l9-4 9 4 M9 7v6 M15 7v6"/></> },
  { img: w2, title: 'Tensile Structures',       icon: <><path d="M22 12A10 10 0 0 0 12 2a10 10 0 0 0-10 10 M12 2v20 M2 12h20 M4.93 4.93l14.14 14.14 M19.07 4.93L4.93 19.07"/></> },
  { img: w3, title: 'Civil Construction',       icon: <><path d="M3 21h18 M3 7v14 M21 7v14 M6 21V7 M18 21V7 M9 21v-4a3 3 0 0 1 6 0v4 M3 7l9-4 9 4"/></> },
  { img: w4, title: 'Architectural design & Structural consultant',        icon: <><path d="M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></> },
  { img: w5, title: 'All type of Roofing',       icon: <><path d="M3 21h18 M3 7v14 M21 7v14 M3 7l9-4 9 4"/></> },
];

export default function AboutWhatWeDo() {
  return (
    <section className="ts-awd">
      <div className="container">
        <div className="ts-awd__head">
          <span className="ts-awd__eyebrow">What We Do</span>
          <p className="ts-awd__desc">
            We provide complete construction solutions, combining innovative design, strong engineering, and high-quality execution across all types of building projects.
          </p>
        </div>

        <div className="ts-awd__grid">
          {SERVICES.map((s, i) => (
            <article key={i} className="ts-awd__card">
              <div className="ts-awd__bg">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="ts-awd__content">
                <div className="ts-awd__icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="ts-awd__title">{s.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
