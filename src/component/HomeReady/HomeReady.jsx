import './HomeReady.css';
import ready from '../../assets/homeready.svg';

export default function HomeReady() {
  return (
    <section className="ts-rdy">
      <div className="ts-rdy__inner">
        <div className="ts-rdy__content">
          <div className="ts-rdy__copy">
            <h2 className="ts-rdy__title">Ready to Start Your <span>Project?</span></h2>
            <p className="ts-rdy__desc">
              We design and build strong, long-lasting structures
              with modern technology and expert workmanship.
              Contact us today and get a quick quote within 24
              hours.
            </p>
          </div>
        </div>
        <div className="ts-rdy__media" style={{ backgroundImage: `url("${ready}")` }}>
           <div className="ts-rdy__buttons">
              <button className="ts-btn ts-btn--orange">Book Free Site Inspection</button>
              <button className="ts-btn ts-btn--white">Get Instant Pricing</button>
           </div>
        </div>
      </div>
    </section>
  );
}
