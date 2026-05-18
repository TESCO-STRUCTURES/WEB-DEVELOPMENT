import './HomeWorked.css';

/* ──────────────────────────────────────────────
   Inline brand wordmarks — matched to the Figma
   ────────────────────────────────────────────── */

const Google = () => (
  <span className="ts-wkd__brand ts-wkd__brand--google">
    <span style={{ color: '#4285F4' }}>G</span>
    <span style={{ color: '#EA4335' }}>o</span>
    <span style={{ color: '#FBBC05' }}>o</span>
    <span style={{ color: '#4285F4' }}>g</span>
    <span style={{ color: '#34A853' }}>l</span>
    <span style={{ color: '#EA4335' }}>e</span>
  </span>
);

const Amazon = () => (
  <span className="ts-wkd__brand ts-wkd__brand--amazon">
    <span>amazon</span>
    <svg viewBox="0 0 36 10" aria-hidden>
      <path d="M2 7 Q 18 14, 34 5" stroke="#FF9900" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <polygon points="30,3 34,5 31,8" fill="#FF9900" />
    </svg>
  </span>
);

const Spotify = () => (
  <span className="ts-wkd__brand ts-wkd__brand--spotify">
    <svg viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="12" fill="#1DB954" />
      <path d="M6 9.5 C 10 8, 16 8.5, 18 10" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M7 12 C 10.5 11, 15 11.4, 16.6 12.6" stroke="#fff" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M7.5 14.4 C 10.5 13.7, 14.2 14, 15.4 14.8" stroke="#fff" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
    <span>Spotify</span>
  </span>
);

const LinkedIn = () => (
  <span className="ts-wkd__brand ts-wkd__brand--linkedin">
    <span style={{ color: '#0A0A0A' }}>Linked</span>
    <span className="ts-wkd__linkedin-badge">in</span>
  </span>
);

const Samsung = () => (
  <span className="ts-wkd__brand ts-wkd__brand--samsung">
    <span className="ts-wkd__samsung-oval">
      SAMSUNG
    </span>
  </span>
);

const Apple = () => (
  <span className="ts-wkd__brand ts-wkd__brand--apple">
    <svg viewBox="0 0 24 24" aria-hidden>
      <path
        d="M16.5 12.7c0-2.4 1.95-3.55 2.03-3.6-1.1-1.6-2.84-1.83-3.46-1.85-1.47-.15-2.87.87-3.62.87-.75 0-1.9-.85-3.13-.83-1.6.02-3.1.93-3.93 2.37-1.68 2.92-.43 7.24 1.21 9.6.81 1.16 1.78 2.46 3.05 2.41 1.23-.05 1.7-.79 3.18-.79 1.49 0 1.91.79 3.22.77 1.33-.03 2.17-1.18 2.97-2.34.7-.92.99-1.81 1.25-2.74-2.4-.91-2.78-3.86-2.77-3.87zM14.06 5.6c.66-.8 1.11-1.92 1-3.04-.94.04-2.08.62-2.77 1.42-.6.7-1.13 1.85-.99 2.93 1.04.08 2.1-.51 2.76-1.31z"
        fill="#0A0A0A"
      />
    </svg>
    <span>iPhone</span>
  </span>
);

const Microsoft = () => (
  <span className="ts-wkd__brand ts-wkd__brand--microsoft">
    <span className="ts-wkd__ms-tiles">
      <i style={{ background: '#F25022' }} />
      <i style={{ background: '#7FBA00' }} />
      <i style={{ background: '#00A4EF' }} />
      <i style={{ background: '#FFB900' }} />
    </span>
    <span>Microsoft</span>
  </span>
);

const Zomato = () => (
  <span className="ts-wkd__brand ts-wkd__brand--zomato">zomato</span>
);

const BRANDS = [Google, Amazon, Spotify, LinkedIn, Samsung, Apple, Microsoft, Zomato];

/* Duplicate the brand list so the marquee loop is seamless */
const TRACK = [...BRANDS, ...BRANDS];

export default function HomeWorked() {
  return (
    <section className="ts-wkd">
      <div className="container">

        {/* HEAD */}
        <div className="ts-wkd__head">
          <span className="ts-wkd__pill">Our Worked Client</span>
          <span className="ts-wkd__accent" aria-hidden />
          <p className="ts-wkd__desc">
            We are proud to work with trusted brands across industries. Our clients
            <br />reflect the quality, reliability, and trust we deliver.
          </p>
        </div>

        {/* TWO MARQUEE ROWS — left & right scroll */}
        <div className="ts-wkd__rows">
          <div className="ts-wkd__track ts-wkd__track--left">
            <div className="ts-wkd__row">
              {TRACK.map((Brand, i) => (
                <div key={`l-${i}`} className="ts-wkd__chip">
                  <Brand />
                </div>
              ))}
            </div>
          </div>

          <div className="ts-wkd__track ts-wkd__track--right">
            <div className="ts-wkd__row">
              {TRACK.map((Brand, i) => (
                <div key={`r-${i}`} className="ts-wkd__chip">
                  <Brand />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
