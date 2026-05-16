import './Allabout.css';
import aboutImg from '../../assets/allabout.svg';

export default function Allabout() {
  return (
    <section id="all-about" className="all-about">
      <div className="container all-about__inner">
        <div className="all-about__media"><img src={aboutImg} alt="Industrial roofing project" /></div>
        <div className="all-about__copy">
          <span className="all-about__eyebrow">About Roofing</span>
          <h2 className="all-about__title">Every <span>roofing system</span> covered</h2>
          <p className="all-about__desc">Tesco delivers the full range of industrial and architectural roofing — trapezoidal, standing-seam, insulated, curved, polycarbonate, and tiled — each engineered for India&apos;s monsoon, heat, and dust loads.</p>
          <p className="all-about__desc">We pick the profile, gauge, and finish based on your span, span direction, and budget — then fabricate the panels in our 80,000 sq.ft. factory and erect them with our own crew.</p>
          <div className="all-about__stats">
            <div className="all-about__stat"><span className="all-about__num">20yr</span><span className="all-about__lbl">anti-corrosion warranty</span></div>
            <div className="all-about__stat"><span className="all-about__num">11</span><span className="all-about__lbl">distinct roofing systems</span></div>
            <div className="all-about__stat"><span className="all-about__num">700+</span><span className="all-about__lbl">roofs installed</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
