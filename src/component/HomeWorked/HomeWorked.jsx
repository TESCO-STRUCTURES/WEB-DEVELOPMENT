import './HomeWorked.css';
import homeworkedtop from '../../assets/homeworkedtop.svg';
import homeworkedbottom from '../../assets/homeworkedbottom.svg';

/* ──────────────────────────────────────────────
   Inline brand wordmarks — matched to the Figma
   ────────────────────────────────────────────── */

const TOP_ROW = [homeworkedtop, homeworkedtop];
const BOTTOM_ROW = [homeworkedbottom, homeworkedbottom];

export default function HomeWorked() {
  return (
    <section className="ts-wkd">
      <div className="container">

        {/* HEAD */}
        <div className="ts-wkd__head">
          <span className="ts-wkd__pill">Our Worked Client</span>
          <span className="ts-wkd__accent" aria-hidden />
          <p className="ts-wkd__desc">
            We are proud to work with trusted brands across industries. Our clients
            <br />reflect the quality, reliability, and trust we deliver.
          </p>
        </div>

        {/* TWO MARQUEE ROWS — left & right scroll */}
        <div className="ts-wkd__rows">
          <div className="ts-wkd__track ts-wkd__track--left">
            <div className="ts-wkd__row">
              {TOP_ROW.map((src, i) => (
                <div key={`l-${i}`} className="ts-wkd__image-card">
                  <img src={src} alt="Worked client logos" className="ts-wkd__image" />
                </div>
              ))}
            </div>
          </div>

          <div className="ts-wkd__track ts-wkd__track--right">
            <div className="ts-wkd__row">
              {BOTTOM_ROW.map((src, i) => (
                <div key={`r-${i}`} className="ts-wkd__image-card">
                  <img src={src} alt="Worked client logos" className="ts-wkd__image" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
