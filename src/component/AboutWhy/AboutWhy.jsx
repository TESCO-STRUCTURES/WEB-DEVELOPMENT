import './AboutWhy.css';

import img from '../../assets/about why.svg';

import aboutwhy1 from '../../assets/aboutwhy1.svg';
import aboutwhy2 from '../../assets/aboutwhy2.svg';
import aboutwhy3 from '../../assets/aboutwhy3.svg';
import aboutwhy4 from '../../assets/aboutwhy4.svg';

export default function AboutWhy() {
  return (
    <section className="ts-awy">

      {/* ---------- Heading ---------- */}

      <div className="ts-awy__head">

        <span className="ts-awy__eyebrow">
          Why Choose Tesco Structure
        </span>

        <p className="ts-awy__desc">
          Combining expertise, quality, and timely execution, we build structures that
          <br />
          are strong, efficient, and designed to last.
        </p>

      </div>

      {/* ---------- Grid ---------- */}

      <div className="ts-awy__grid">

        {/* ---------- Top Left ---------- */}

        <div className="ts-awy__item ts-awy__item--tl">

          <div className="ts-awy__icon">
            <img src={aboutwhy1} alt="Expert Technicians" />
          </div>

          <h3>Expert Technicians</h3>

          <p>
            Our skilled professionals bring 15+ years of hands-on

            experience, ensuring every project is

            executed with precision, safety, and

            structural excellence.
          </p>

        </div>

        {/* ---------- Center Image ---------- */}

        <div className="ts-awy__center-img">

          <img
            src={img}
            alt="Why choose Tesco Structure"
          />

        </div>

        {/* ---------- Top Right ---------- */}

        <div className="ts-awy__item ts-awy__item--tr">

          <div className="ts-awy__icon">
            <img src={aboutwhy2} alt="Fast Turnaround" />
          </div>

          <h3>Fast Turnaround</h3>

          <p>
            With efficient planning and execution,

            we complete projects on time without

            compromising on quality or

            performance.
          </p>

        </div>

        {/* ---------- Bottom Left ---------- */}

        <div className="ts-awy__item ts-awy__item--bl">

          <div className="ts-awy__icon">
            <img src={aboutwhy3} alt="Affordable Pricing" />
          </div>

          <h3>Affordable Pricing</h3>

          <p>
            We deliver high-quality construction

            solutions at competitive prices, with

            complete transparency and no hidden

            costs.
          </p>

        </div>

        {/* ---------- Bottom Right ---------- */}

        <div className="ts-awy__item ts-awy__item--br">

          <div className="ts-awy__icon">
            <img src={aboutwhy4} alt="All Inclusive Services" />
          </div>

          <h3>All-Inclusive Services</h3>

          <p>
            From design and consultancy to

            construction and finishing, we provide

            end-to-end solutions tailored to your

            needs.
          </p>

        </div>

      </div>

    </section>
  );
}