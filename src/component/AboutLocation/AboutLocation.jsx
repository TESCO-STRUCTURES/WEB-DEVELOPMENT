import './AboutLocation.css';

const COLS = [
  ['Chennai', 'Mumbai', 'Bengaluru', 'Delhi'],
  ['Kolkata', 'Ahmedabad', 'Pune', 'Hyderabad'],
  ['Kochi', 'Surat']
];

export default function AboutLocation() {
  return (
    <section className="ts-aloc">
      <div className="container">
        <div className="ts-aloc__head">
          <span className="ts-aloc__eyebrow">Our Location</span>
          <p className="ts-aloc__desc">
            Delivering services across multiple cities with architectural precision and engineering excellence.
          </p>
        </div>

        <div className="ts-aloc__grid">
          {COLS.map((col, colIdx) => (
            <div key={colIdx} className="ts-aloc__col">
              {col.map((loc) => (
                <div key={loc} className="ts-aloc__item">
                  <span className="ts-aloc__pin">
                    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                    </svg>
                  </span>
                  <span className="ts-aloc__city">{loc}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
