import { useState } from 'react';
import './PEBfaq.css';
import faqArt from '../../assets/PEBFAQ.svg';

const FAQS = [
  {
    q: 'How is a PEB different from conventional construction?',
    a: 'Pre-Engineered Buildings have every structural member designed and fabricated in a factory before reaching the site. This cuts on-site labour, reduces material wastage, and shortens project timelines by 40% on average versus cast-in-situ work.',
  },
  {
    q: 'What is the maximum clear span Tesco can deliver?',
    a: 'Our standard PEB system supports clear spans up to 90 metres without intermediate columns. Larger custom spans are achievable with truss roof systems engineered project by project.',
  },
  {
    q: 'How long does a typical PEB project take?',
    a: 'For a 50,000 sq.ft. industrial shed, expect 4–6 weeks of design + fabrication, 4–8 weeks of erection, and 1–2 weeks of finishing. Site readiness, floor levelling, and weather impact the total.',
  },
  {
    q: 'Does Tesco handle civil works as well?',
    a: 'Yes. Tesco fields its own civil crew for earthworks, foundations, RCC columns, slabs, and finishing — so you get a single-vendor build with one accountable project manager.',
  },
  {
    q: 'What warranty do you offer?',
    a: 'Tesco PEBs ship with a 15-year structural warranty and a 10-year warranty on hot-dip galvanized hardware. Roofing membranes carry separate material-specific warranties of up to 20 years.',
  },
  {
    q: 'Can a Tesco PEB be expanded later?',
    a: 'Absolutely. PEB systems are designed for modular expansion — additional bays can be bolted onto existing structures without disturbing operations, and a mezzanine floor can be added under the existing roof.',
  },
];

export default function PEBfaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="peb-faq">
      <div className="container peb-faq__inner">

        <div className="peb-faq__art">
          <img src={faqArt} alt="" />
        </div>

        <div className="peb-faq__copy">
          <span className="peb-faq__eyebrow">FAQ</span>
          <h2 className="peb-faq__title">Questions builders <span>ask us first</span></h2>
          <p className="peb-faq__desc">
            Quick answers to the questions our clients raise before their first
            quote. Need something more specific? Drop us a line.
          </p>

          <ul className="peb-faq__list">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className={`peb-faq__item ${isOpen ? 'peb-faq__item--open' : ''}`}>
                  <button
                    type="button"
                    className="peb-faq__q"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{f.q}</span>
                    <span className="peb-faq__icon" aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <line x1="12" y1="5" x2="12" y2="19" className="peb-faq__icon-v"/>
                      </svg>
                    </span>
                  </button>
                  <div className="peb-faq__a" role="region">
                    <p>{f.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
}
