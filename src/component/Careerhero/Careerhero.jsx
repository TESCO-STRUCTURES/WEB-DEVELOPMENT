import './Careerhero.css';
import heroImg from '../../assets/Careerhero.svg';
import icon1 from '../../assets/careericon1.svg';
import icon2 from '../../assets/careericon2.svg';
import icon3 from '../../assets/careericon3.svg';

export default function Careerhero() {
  return (
    <section className="cr-hero">
      <div className="container cr-hero__inner">

        <div className="cr-hero__content">
          <h1 className="cr-hero__title">Build Your Career<br />With Tesco<br />Structure</h1>
          <p className="cr-hero__desc">
            Join a team of visionary engineers and project managers shaping the skylines of tomorrow with structural integrity and sustainable innovation.
          </p>
          <div className="cr-hero__cta">
            <a href="#cr-jobs" className="cr-hero__btn cr-hero__btn--primary">Apply Now</a>
            <a href="#cr-resume" className="cr-hero__btn cr-hero__btn--ghost">Explore Jobs</a>
          </div>
        </div>

        <div className="cr-hero__collage">
          <img src={heroImg} alt="Tesco Career" className="cr-hero__main-img" />

          <img src={icon1} alt="30+ Team Members" className="cr-badge cr-badge-1" />
          <img src={icon2} alt="10+ Departments" className="cr-badge cr-badge-2" />
          <img src={icon3} alt="50+ Projects" className="cr-badge cr-badge-3" />
        </div>

      </div>
    </section>
  );
}
