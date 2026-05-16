import './Tensileabout.css';
import aboutImg from '../../assets/tensileabout.svg';

export default function Tensileabout() {
  return (
    <section id="ten-about" className="ten-about">
      <div className="container ten-about__inner">
        <div className="ten-about__media">
          <img src={aboutImg} alt="Tensile structure project" />
        </div>
        <div className="ten-about__copy">
          <span className="ten-about__eyebrow">About Tensile</span>
          <h2 className="ten-about__title">What is a <span>Tensile Structure?</span></h2>
          <p className="ten-about__desc">
            A tensile structure is a pre-tensioned membrane suspended on steel
            masts and cables — engineered to carry load entirely through tension
            rather than compression. The result is a lightweight, sculptural roof
            that spans huge distances with minimal material.
          </p>
          <p className="ten-about__desc">
            Tesco designs, fabricates and installs PVC, PTFE, and ETFE tensile
            roofs across India for stadiums, hotels, malls, public plazas, and
            architectural landmarks.
          </p>
          <div className="ten-about__stats">
            <div className="ten-about__stat"><span className="ten-about__num">15+</span><span className="ten-about__lbl">year membrane warranty</span></div>
            <div className="ten-about__stat"><span className="ten-about__num">12K</span><span className="ten-about__lbl">sq.ft. single-span capability</span></div>
            <div className="ten-about__stat"><span className="ten-about__num">85%</span><span className="ten-about__lbl">lighter than steel roofing</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
