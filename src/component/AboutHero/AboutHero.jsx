import { Link } from 'react-router-dom';
import './AboutHero.css';
import heroBg from '../../assets/abouthero.svg';

export default function AboutHero() {
  return (
    <section className="ts-ah">
      <div className="ts-ah__bg">
        <img src={heroBg} alt="" className="ts-ah__bg-img" />
        <div className="ts-ah__scrim" />
      </div>

      <div className="container ts-ah__inner">
        <div className="ts-ah__logo-container">
          <h1 className="ts-ah__title">ABOUT US</h1>
        </div>
        
        <p className="ts-ah__desc">
          Three decades of engineering excellence, innovation, and commitment to delivering world-class construction solutions across India and beyond.
        </p>

        <div className="ts-ah__actions">
          <Link to="/projects" className="ts-ah__btn ts-ah__btn--outline">
            View Our Projects
          </Link>
          <Link to="/contact" className="ts-ah__btn ts-ah__btn--solid">
            Book free Site Inspection
          </Link>
        </div>
      </div>
    </section>
  );
}