import './OurProjecthero.css';

export default function OurProjecthero() {
  return (
    <section className="op-hero">
      <div className="container op-hero__inner">
        <span className="op-hero__eyebrow">
          Portfolio
        </span>

        <h1 className="op-hero__title">
          Our Projects
        </h1>

        <p className="op-hero__desc">
          Delivering excellence across industrial, commercial, and
          infrastructure projects through precision engineering and
          architectural mastery.
        </p>

        <ul
          className="op-hero__filters"
          role="tablist"
          aria-label="Project categories"
        >
          {[
            'All',
            'PEB',
            'Tensile',
            'Civil',
            'Roofing',
            'Architectural',
          ].map((c) => (
            <li key={c}>
              <button
                type="button"
                className="op-hero__chip"
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}