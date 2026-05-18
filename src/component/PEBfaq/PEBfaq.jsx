import { useState } from 'react';
import './PEBfaq.css';
import faqArt from '../../assets/PEBFAQ.svg';

const FAQS = [
  { q: 'What are Pre-Engineered Buildings (PEBs)?',
    a: 'Pre-Engineered Buildings are steel structures designed, fabricated, and pre-cut in a factory, then assembled on site. They are engineered for speed, strength, and long-term value.' },
  { q: 'What are the major advantages of PEBs?',
    a: 'Faster build timelines, lower total cost, predictable quality from factory-controlled fabrication, easy future expansion, and engineered durability for 50+ years.' },
  { q: 'How do PEBs compare to traditional construction?',
    a: 'PEBs cut on-site labour, reduce material wastage, and shorten timelines by 40% on average compared to conventional cast-in-situ RCC construction.' },
  { q: 'What kind of materials will be used?',
    a: 'High-tensile structural steel for the primary frame, hot-dip galvanized fasteners, and colour-coated metal roofing with optional PUF/PIR sandwich panels for insulation.' },
  { q: 'How long does a typical PEB project take?',
    a: 'A 50,000 sq.ft. industrial shed typically takes 4–6 weeks of design and fabrication, 4–8 weeks of erection, and 1–2 weeks of finishing.' },
  { q: 'Do you handle civil works as well?',
    a: 'Yes. Tesco fields its own civil crew for earthworks, foundations, RCC columns, slabs, and finishing — so you get a single-vendor, single-accountability build.' },
  { q: 'What warranty does Tesco offer on PEB structures?',
    a: 'Tesco PEBs ship with a 15-year structural warranty and a 10-year warranty on galvanized hardware. Roofing membranes carry separate material warranties up to 20 years.' },
  { q: 'Can a PEB be expanded later?',
    a: 'Absolutely. PEBs are designed for modular expansion — extra bays can be bolted on without disturbing operations, and a mezzanine can be added under the existing roof.' },
];

export default function PEBfaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="peb-faq">
      <div className="container peb-faq__inner">

        <div className="peb-faq__art">
          <img src={faqArt} alt="Frequently asked questions illustration" />
        </div>

        <div className="peb-faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`peb-faq__item ${isOpen ? 'peb-faq__item--open' : ''}`}>
                <button
                  type="button"
                  className="peb-faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="peb-faq__icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="12" y1="5" x2="12" y2="19" className="peb-faq__icon-v" />
                    </svg>
                  </span>
                </button>
                <div className="peb-faq__a" role="region">
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
