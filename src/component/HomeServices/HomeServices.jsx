import './HomeServices.css';

/* Simple intro section — fill these in to match your Figma copy. */
const TITLE_LEAD = 'Our';
const TITLE_HIGHLIGHT = 'Services';
const PARAGRAPH = (
  <>
  We provide end-to-end construction solutions with precision, quality, and reliability.<br />Our services are designed to meet diverse project needs with strong engineering expertise.
  </>
);

export default function HomeServices() {
  return (
    <section id="services" className="ts-svc">
      <div className="container ts-svc__inner">
        <h2 className="ts-svc__title">
          {TITLE_LEAD} <span>{TITLE_HIGHLIGHT}</span>
        </h2>
        <p className="ts-svc__desc">{PARAGRAPH}</p>
        
      </div>
    </section>
  );
}
