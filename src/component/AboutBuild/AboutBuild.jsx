import { Link } from 'react-router-dom';
import './AboutBuild.css';
import img from '../../assets/about build.svg';

export default function AboutBuild() {
  return (
    <section className="ts-abld">
      <div className="ts-abld__inner">
        {/* LEFT — gray panel with copy */}
        <div className="ts-abld__content">
          <div className="ts-abld__copy">
            <h2 className="ts-abld__title">Let&apos;s Build Together</h2>
            <p className="ts-abld__desc">
              Partner with us for your next construction project and experience excellence in engineering and execution.
            </p>
          </div>
        </div>

        {/* RIGHT — full-bleed photo with centered call-to-action buttons */}
        <div
          className="ts-abld__media"
          style={{ backgroundImage: `url("${img}")` }}
        >
          <div className="ts-abld__buttons">
            <a href="#book" className="ts-btn ts-btn--orange">Book Free Site Inspection</a>
            <Link to="/projects" className="ts-btn ts-btn--ghost">View Our Projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
