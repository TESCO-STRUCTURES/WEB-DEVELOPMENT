import './HomeManufacturing.css';
import img1 from '../../assets/homemanufacturing1.svg';
import img2 from '../../assets/homemanufacturing2.svg';
import img3 from '../../assets/homemanufacturing3.svg';

const WorkforceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GearsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="3" y1="20" x2="21" y2="20" />
  </svg>
);

const CARDS = [
  {
    src: img1,
    icon: <WorkforceIcon />,
    title: 'Skilled Workforce',
    desc: 'Our manufacturing process integrates every step from start to finish under one roof delivering high-quality results through advanced technology.',
  },
  {
    src: img2,
    icon: <GearsIcon />,
    title: 'Integrated Manufacturing Process',
    desc: 'Our manufacturing process integrates every step from start to finish under one roof delivering high-quality results through advanced technology.',
    feature: true,
  },
  {
    src: img3,
    icon: <ChartIcon />,
    title: 'Integrated Manufacturing Process',
    desc: 'Our manufacturing process integrates every step from start to finish under one roof delivering high-quality results through advanced technology.',
  },
];

export default function HomeManufacturing() {
  return (
    <section className="ts-mfg">
      <div className="container">

        {/* HEAD */}
        <div className="ts-mfg__head">
          <span className="ts-mfg__pill">Our Manufacturing Unit</span>
          <span className="ts-mfg__accent" aria-hidden />
          <h2 className="ts-mfg__title">We own and operate our own</h2>
          <p className="ts-mfg__lede">
            High-capacity steel fabrication with advanced machinery and skilled workforce.<br />
            1,500 MT monthly output in a 1,00,000 sq.ft facility.<br />
            Expertise in PEB structures, sheds, and custom steel work.
          </p>
        </div>

        {/* 3-CARD ROW — raw images, no scrim */}
        <div className="ts-mfg__grid">
          {CARDS.map((c, i) => (
            <article key={i} className={`ts-mfg__card ${c.feature ? 'ts-mfg__card--feature' : ''}`}>
              <img src={c.src} alt={c.title} className="ts-mfg__img" />
              <div className="ts-mfg__panel">
                <span className="ts-mfg__icon">{c.icon}</span>
                <h3 className="ts-mfg__name">{c.title}</h3>
                <p className="ts-mfg__desc">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
