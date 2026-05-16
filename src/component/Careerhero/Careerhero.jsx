import './Careerhero.css';
import img1 from '../../assets/careerhero1.svg';
import img2 from '../../assets/careerhero2.svg';
import img3 from '../../assets/careerhero3.svg';
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
          <img src={img1} alt="Team member" className="cr-img-1" />
          <img src={img2} alt="Construction" className="cr-img-2" />
          <img src={img3} alt="Engineers" className="cr-img-3" />

          <div className="cr-badge cr-badge-1">
            <img src={icon1} alt="" className="cr-badge-icon" />
            <div className="cr-badge-text">
              <strong>30+</strong>
              <span>Team Members</span>
            </div>
          </div>

          <div className="cr-badge cr-badge-2">
            <div className="cr-badge-text">
              <strong>10+</strong>
              <span>Departments</span>
            </div>
            <img src={icon2} alt="" className="cr-badge-icon" />
          </div>

          <div className="cr-badge cr-badge-3">
            <div className="cr-badge-text">
              <span>Projects</span>
              <strong>50+</strong>
            </div>
            <img src={icon3} alt="" className="cr-badge-icon" />
          </div>
        </div>

      </div>
    </section>
  );
}
