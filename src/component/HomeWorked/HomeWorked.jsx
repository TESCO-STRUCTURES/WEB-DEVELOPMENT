import './HomeWorked.css';

import homeworked1 from '../../assets/homeworked1.svg';
import homeworked2 from '../../assets/homeworked2.svg';

/* ============================================
   IMAGE DATA
============================================ */
const ROW_1 = [
  homeworked1,
  homeworked2,
  homeworked1,
  homeworked2,
  homeworked1,
];

const ROW_2 = [
  homeworked2,
  homeworked1,
  homeworked2,
  homeworked1,
  homeworked2,
];

/* ============================================
   MARQUEE
============================================ */
function Marquee({ items, direction = 'left' }) {
  // Duplicate items for seamless infinite loop
  const marqueeItems = [...items, ...items];

  return (
    <div className={`ts-wkd__track ts-wkd__track--${direction}`}>
      <div className="ts-wkd__row">
        {marqueeItems.map((image, index) => (
          <div
            key={`${direction}-${index}`}
            className="ts-wkd__chip"
          >
            <img
              src={image}
              alt="Worked Brand"
              className="ts-wkd__image"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================
   COMPONENT
============================================ */
export default function HomeWorked() {
  return (
    <section className="ts-wkd">
      {/* HEADING */}
      <div className="container ts-wkd__head">
        <span className="ts-eyebrow">
         Our Worked Client
        </span>

        <h2 className="ts-title">
          We are proud to work with trusted brands across industries. Our clients reflect the quality, reliability, and trust we deliver.
        </h2>
      </div>

      {/* MARQUEE ROWS */}
      <div className="ts-wkd__rows">
        <Marquee items={ROW_1} direction="left" />
        <Marquee items={ROW_2} direction="right" />
      </div>
    </section>
  );
}