import { useMemo, useState } from 'react';
import './HomeCost.css';

/* ── Option lists ──────────────────────────────────────── */
const STATES = [
  'Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh', 'Telangana',
  'Maharashtra', 'Gujarat', 'Delhi', 'Uttar Pradesh', 'West Bengal',
];

const CITIES_BY_STATE = {
  'Tamil Nadu':     ['Chennai', 'Coimbatore', 'Madurai', 'Trichy', 'Salem'],
  'Karnataka':      ['Bangalore', 'Mysore', 'Mangalore', 'Hubli'],
  'Kerala':         ['Kochi', 'Thiruvananthapuram', 'Calicut'],
  'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur'],
  'Telangana':      ['Hyderabad', 'Warangal'],
  'Maharashtra':    ['Mumbai', 'Pune', 'Nagpur', 'Nashik'],
  'Gujarat':        ['Ahmedabad', 'Surat', 'Vadodara'],
  'Delhi':          ['New Delhi'],
  'Uttar Pradesh':  ['Lucknow', 'Kanpur', 'Noida', 'Ghaziabad'],
  'West Bengal':    ['Kolkata', 'Howrah'],
};

const SERVICES = [
  { id: 'peb',     label: 'Pre-Engineered Building', rate: 450 },
  { id: 'tensile', label: 'Tensile Canopy',          rate: 650 },
  { id: 'shed',    label: 'Industrial Shed',         rate: 380 },
  { id: 'curved',  label: 'Curved Roof',             rate: 720 },
  { id: 'roofing', label: 'Roofing & Cladding',      rate: 320 },
];

/* Phase percentages add up to 100 */
const PHASES = [
  { id: 'design',     label: 'Design & Engineering',         pct: 8,  weeks: '1–2 wks'  },
  { id: 'site',       label: 'Site Preparation',             pct: 7,  weeks: '1 wk'     },
  { id: 'foundation', label: 'Foundation & Civil Works',     pct: 18, weeks: '2–4 wks' },
  { id: 'structure',  label: 'Steel Fabrication & Erection', pct: 32, weeks: '4–8 wks' },
  { id: 'roofing',    label: 'Roofing & Cladding',           pct: 22, weeks: '3–5 wks' },
  { id: 'finish',     label: 'Finishing & Installations',    pct: 10, weeks: '2–3 wks' },
  { id: 'handover',   label: 'Quality Audit & Handover',     pct: 3,  weeks: '1 wk'    },
];

/* ₹ formatter */
const inr = (n) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(n)));

export default function HomeCost() {
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [serviceId, setService] = useState('');
  const [area, setArea] = useState(5000);
  const [unit] = useState('sqft');
  const [submitted, setSubmitted] = useState(false);

  const service = SERVICES.find((s) => s.id === serviceId);

  const total = useMemo(() => {
    if (!service || !area) return 0;
    return Number(area) * service.rate;
  }, [service, area]);

  const phaseRows = useMemo(
    () =>
      PHASES.map((p) => ({
        ...p,
        amount: (total * p.pct) / 100,
      })),
    [total]
  );

  const onNext = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const cityOptions = CITIES_BY_STATE[state] || [];

  return (
    <section id="cost" className="ts-cost">
      <div className="container">

        {/* ── Heading ───────────────────── */}
        <div className="ts-cost__head">

          <h2 className="ts-cost__title">
            Construction Cost Calculator
          </h2>

          <p className="ts-cost__subtitle">
            Total Cost &amp; Phase-wise Breakdown
          </p>

          <p className="ts-cost__desc">
            Estimate your project cost instantly with detailed phase-wise breakdown.
          </p>

        </div>

        {/* ── Form Card ─────────────────── */}
        <form className="ts-cost__bar" onSubmit={onNext}>
          <div className="ts-cost__bar-bg" aria-hidden />

          <div className="ts-cost__bar-grid">

            {/* State */}
            <div className="ts-cost__field">
              <label className="ts-cost__lbl" htmlFor="ts-cost-state">
                Select State
              </label>

              <div className="ts-cost__select-wrap">
                <select
                  id="ts-cost-state"
                  className="ts-cost__select"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                    setCity('');
                  }}
                >
                  <option value="">Choose state</option>

                  {STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>

                <Caret />
              </div>
            </div>

            {/* City */}
            <div className="ts-cost__field">
              <label className="ts-cost__lbl" htmlFor="ts-cost-city">
                Select City
              </label>

              <div className="ts-cost__select-wrap">
                <select
                  id="ts-cost-city"
                  className="ts-cost__select"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={!state}
                >
                  <option value="">Choose city</option>

                  {cityOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <Caret />
              </div>
            </div>

            {/* Services */}
            <div className="ts-cost__field">
              <label className="ts-cost__lbl" htmlFor="ts-cost-svc">
                Services
              </label>

              <div className="ts-cost__select-wrap">
                <select
                  id="ts-cost-svc"
                  className="ts-cost__select"
                  value={serviceId}
                  onChange={(e) => setService(e.target.value)}
                >
                  <option value="">Choose</option>

                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.label}
                    </option>
                  ))}
                </select>

                <Caret />
              </div>
            </div>

            {/* Area */}
            <div className="ts-cost__field">
              <label className="ts-cost__lbl" htmlFor="ts-cost-area">
                Area
              </label>

              <input
                id="ts-cost-area"
                type="number"
                inputMode="numeric"
                min="100"
                step="100"
                className="ts-cost__input"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            {/* Unit */}
            <div className="ts-cost__field">
              <label className="ts-cost__lbl">
                Unit
              </label>

              <label className="ts-cost__radio">
                <input
                  type="radio"
                  name="ts-cost-unit"
                  defaultChecked
                  readOnly
                />

                <span className="ts-cost__radio-dot" aria-hidden />

                <span className="ts-cost__radio-text">
                  Sq. Feet
                </span>
              </label>
            </div>

            {/* Next Button */}
            <div className="ts-cost__field ts-cost__field--cta">
              <button type="submit" className="ts-cost__next">
                Next

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="13 5 19 12 13 19" />
                </svg>
              </button>
            </div>

          </div>
        </form>

        {/* ── Result Section ─────────────── */}
        {submitted && service && (
          <div
            className="ts-cost__result"
            role="region"
            aria-label="Cost breakdown"
          >

            {/* Total */}
            <div className="ts-cost__total">
              <span className="ts-cost__total-label">
                Estimated total cost
              </span>

              <span className="ts-cost__total-value" key={total}>
                {inr(total)}
              </span>

              <span className="ts-cost__total-meta">
                {service.label}

                {state && city
                  ? ` · ${city}, ${state}`
                  : ''}

                {' '}·{' '}

                {new Intl.NumberFormat('en-IN').format(area)} sq.ft
              </span>
            </div>

            {/* Phase Breakdown */}
            <div
              className="ts-cost__phases"
              aria-label="Phase-wise breakdown"
            >
              <div className="ts-cost__phases-head">
                <h3 className="ts-cost__phases-title">
                  Phase-wise breakdown
                </h3>

                <span className="ts-cost__phases-meta">
                  7 phases · ~14–24 wks
                </span>
              </div>

              <ul className="ts-cost__phase-list">
                {phaseRows.map((p) => (
                  <li key={p.id} className="ts-cost__phase">

                    <div className="ts-cost__phase-top">
                      <span className="ts-cost__phase-name">
                        {p.label}
                      </span>

                      <span className="ts-cost__phase-amt">
                        {inr(p.amount)}
                      </span>
                    </div>

                    <div className="ts-cost__bar" aria-hidden>
                      <span
                        className="ts-cost__bar-fill"
                        style={{ width: `${p.pct}%` }}
                      />
                    </div>

                    <div className="ts-cost__phase-bot">
                      <span className="ts-cost__phase-pct">
                        {p.pct}% of total
                      </span>

                      <span className="ts-cost__phase-weeks">
                        {p.weeks}
                      </span>
                    </div>

                  </li>
                ))}
              </ul>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

/* ── Caret Icon ─────────────────────────── */
function Caret() {
  return (
    <svg
      className="ts-cost__caret"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}