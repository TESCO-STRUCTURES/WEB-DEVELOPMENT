import './AboutWork.css';

import processImg from '../../assets/Aboutwork.png';

export default function AboutWork() {
  return (
    <section className="ts-awk">

      <div className="container">

        <div className="ts-awk__head">

          <span className="ts-awk__eyebrow">
            Our Work Process
          </span>

          <p className="ts-awk__desc">
            Delivering quality construction through a structured and efficient workflow
          </p>

        </div>

        <div className="ts-awk__image-wrap">

          <img
            src={processImg}
            alt="Work Process"
            className="ts-awk__image"
          />

        </div>

      </div>

    </section>
  );
}