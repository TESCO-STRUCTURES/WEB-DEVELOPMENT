import './AboutWhy.css';
import img from '../../assets/about why.svg';

export default function AboutWhy() {
  return (
    <div className="ts-awy">
      <div className="ts-awy__head">
        <span className="ts-awy__eyebrow">Why Choose Tesco Structure</span>
        <p className="ts-awy__desc">
          Combining expertise, quality, and timely execution, we build structures that<br/>
          are strong, efficient, and designed to last.
        </p>
      </div>

      <div className="ts-awy__grid">
        <div className="ts-awy__center-img">
          <img src={img} alt="Why Choose Us" />
        </div>

        <div className="ts-awy__item ts-awy__item--tl">
          <div className="ts-awy__icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19.3L16 12.6C16.4 11.2 16 9.6 14.8 8.4C13.2 6.8 10.8 6.4 8.8 7.2L12.5 10.9L10.9 12.5L7.2 8.8C6.4 10.8 6.8 13.2 8.4 14.8C9.6 16 11.2 16.4 12.6 16L19.3 22.7C19.8 23.2 20.5 23.2 20.9 22.7L22.7 20.9C23.2 20.5 23.2 19.8 22.7 19.3Z"/><path d="M15.4 5.4C16.3 4.5 17.5 4 18.8 4L20 2L22 4L24 2.8L22.8 4.8L24.8 6.8L22.8 8C22.8 9.3 22.3 10.5 21.4 11.4C21.4 11.4 21.4 11.4 21.3 11.5C21.1 11.6 20.9 11.8 20.7 11.9L14.9 6.1C15 5.9 15.2 5.7 15.4 5.4Z"/></svg>
          </div>
          <h3>Expert Technicians</h3>
          <p>Our skilled professionals bring 15+ years of hands-on experience, ensuring every project is executed with precision, safety, and structural excellence.</p>
        </div>
        
        <div className="ts-awy__item ts-awy__item--bl">
          <div className="ts-awy__icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
          </div>
          <h3>Affordable Pricing</h3>
          <p>We deliver high-quality construction solutions at competitive prices, with complete transparency and no hidden costs.</p>
        </div>

        <div className="ts-awy__item ts-awy__item--tr">
          <div className="ts-awy__icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
          </div>
          <h3>Fast Turnaround</h3>
          <p>With efficient planning and execution, we complete projects on time without compromising on quality or performance.</p>
        </div>

        <div className="ts-awy__item ts-awy__item--br">
          <div className="ts-awy__icon">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h6v6H4zm0 10h6v6H4zm10-10h6v6h-6zm0 10h6v6h-6z"/></svg>
          </div>
          <h3>All-Inclusive Services</h3>
          <p>From design and consultancy to construction and finishing, we provide end-to-end solutions tailored to your needs.</p>
        </div>
      </div>

    </div>
  );
}
