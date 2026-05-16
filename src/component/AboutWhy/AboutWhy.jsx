import './AboutWhy.css';
import img from '../../assets/about why.svg';

export default function AboutWhy() {
  return (
    <div className="ts-awy">
      <div className="ts-awy__head">
        <span className="ts-awy__eyebrow">Why Choose Tesco Structure</span>
      </div>

      <div className="ts-awy__grid">
        <div className="ts-awy__center-img">
          <img src={img} alt="Why Choose Us" />
        </div>

        <div className="ts-awy__item ts-awy__item--tl">
          <div className="ts-awy__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h3>Expert Technicians</h3>
          <p>Our skilled professionals bring 15+ years of hands-on experience, ensuring every project is executed with precision, safety, and structural excellence.</p>
        </div>
        
        <div className="ts-awy__item ts-awy__item--bl">
          <div className="ts-awy__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <h3>Affordable Pricing</h3>
          <p>We deliver high-quality construction solutions at competitive prices, with complete transparency and no hidden costs.</p>
        </div>

        <div className="ts-awy__item ts-awy__item--tr">
          <div className="ts-awy__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <h3>Fast Turnaround</h3>
          <p>With efficient planning and execution, we complete projects on time without compromising on quality or performance.</p>
        </div>

        <div className="ts-awy__item ts-awy__item--br">
          <div className="ts-awy__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          <h3>All-Inclusive Services</h3>
          <p>From design and consultancy to construction and finishing, we provide end-to-end solutions tailored to your needs.</p>
        </div>
      </div>

    </div>
  );
}
