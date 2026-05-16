import './Civilabout.css';
import aboutImg from '../../assets/civilabout.svg';

export default function Civilabout() {
  return (
    <section id="civ-about" className="civ-about">
      <div className="container civ-about__inner">
        <div className="civ-about__media">
          <img src={aboutImg} alt="Civil construction site" />
        </div>
        <div className="civ-about__copy">
          <span className="civ-about__eyebrow">About Civil</span>
          <h2 className="civ-about__title">What does <span>Civil Construction</span> involve?</h2>
          <p className="civ-about__desc">
            Civil works are the bedrock of every Tesco project — the earthworks,
            RCC foundations, plinth, slabs, walls, and finishing that anchor
            our steel structures and the buildings around them.
          </p>
          <p className="civ-about__desc">
            We bring our own civil crew, our own QA logs, and our own equipment
            to every site — so foundations are completed without coordination
            penalties or sub-contractor handoffs.
          </p>
          <div className="civ-about__stats">
            <div className="civ-about__stat"><span className="civ-about__num">20+</span><span className="civ-about__lbl">years of civil experience</span></div>
            <div className="civ-about__stat"><span className="civ-about__num">350+</span><span className="civ-about__lbl">civil works completed</span></div>
            <div className="civ-about__stat"><span className="civ-about__num">100%</span><span className="civ-about__lbl">in-house crew, no subs</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
