import './AboutBuild.css';
import img from '../../assets/about build.svg';

export default function AboutBuild() {
  return (
    <section className="ts-abld">
      <div className="ts-abld__inner">
        <div className="ts-abld__content">
          <div className="ts-abld__copy">
            <h2 className="ts-abld__title">Let's Build Together</h2>
            <p className="ts-abld__desc">
              Partner with us for your next construction project and experience excellence in engineering and execution.
            </p>
          </div>
        </div>
        <div className="ts-abld__media" style={{ backgroundImage: `url("${img}")` }}>
           <div className="ts-abld__buttons">
              <button className="ts-btn ts-btn--orange">Book Free Site Inspection</button>
              <button className="ts-btn ts-btn--white">Get Instant Pricing</button>
           </div>
        </div>
      </div>
    </section>
  );
}
