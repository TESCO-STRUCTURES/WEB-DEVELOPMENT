import './AboutLocation.css';

/* Red teardrop map pin (Figma style) */
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8z"
      fill="#E11D48"
    />
    <circle cx="12" cy="10" r="3" fill="#ffffff" />
  </svg>
);

const CITIES = [
  { name: 'Chennai', col: 1, row: 1 },
  { name: 'Kolkata', col: 2, row: 1 },
  { name: 'Mumbai', col: 1, row: 2 },
  { name: 'Ahmedabad', col: 2, row: 2 },
  { name: 'Kochi', col: 3, row: 2 },
  { name: 'Bengaluru', col: 1, row: 3 },
  { name: 'Pune', col: 2, row: 3 },
  { name: 'Surat', col: 3, row: 3 },
  { name: 'Delhi', col: 1, row: 4 },
  { name: 'Hyderabad', col: 2, row: 4 },
];

export default function AboutLocation() {
  return (
    <section className="ts-aloc">
      <div className="ts-aloc__head">
        <span className="ts-aloc__eyebrow">
          <span className="ts-aloc__eyebrow-text">Our Location</span>
        </span>
        <p className="ts-aloc__desc">
          Delivering services across multiple cities with architectural<br />
          precision and engineering excellence.
        </p>
      </div>

      <div className="ts-aloc__grid">
        {CITIES.map(({ name, col, row }) => (
          <div
            key={name}
            className="ts-aloc__item"
            style={{ gridColumn: col, gridRow: row }}
          >
            <span className="ts-aloc__pin"><PinIcon /></span>
            <span className="ts-aloc__city">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}