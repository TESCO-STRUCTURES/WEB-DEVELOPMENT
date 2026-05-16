import './Architecturalabout.css';
import aboutImg from '../../assets/architecturalabout.svg';

export default function Architecturalabout() {
  return (
    <section id="arc-about" className="arc-about">
      <div className="container arc-about__inner">
        <div className="arc-about__media"><img src={aboutImg} alt="Architectural design studio" /></div>
        <div className="arc-about__copy">
          <span className="arc-about__eyebrow">About Design</span>
          <h2 className="arc-about__title">Where <span>engineering meets architecture</span></h2>
          <p className="arc-about__desc">Our in-house design studio turns site briefs into fabrication-ready drawings — load-tested, IS-800/AISC-360 compliant, and rendered in 3D so you can sign off on the build before the first plate is cut.</p>
          <p className="arc-about__desc">Every drawing is engineered with manufacturing in mind, so what you see in the model is what gets built on site — to within 2mm tolerance.</p>
          <div className="arc-about__stats">
            <div className="arc-about__stat"><span className="arc-about__num">30%</span><span className="arc-about__lbl">faster design cycles</span></div>
            <div className="arc-about__stat"><span className="arc-about__num">±2mm</span><span className="arc-about__lbl">model-to-build tolerance</span></div>
            <div className="arc-about__stat"><span className="arc-about__num">100%</span><span className="arc-about__lbl">in-house — no outsourcing</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
