import { useState } from 'react';
import './Tensilefaq.css';
import faqArt from '../../assets/tensileFAQ.svg';

const FAQS = [
  { q: 'What is a tensile structure?',
    a: 'A tensile structure is a pre-tensioned fabric membrane suspended on steel masts and cables, carrying load entirely through tension to create sculptural, long-span roofs.' },
  { q: 'What membrane materials does Tesco use?',
    a: 'PVC-coated polyester for cost-effective canopies up to 12 years, PTFE-coated fibreglass for 20+ year architectural roofs, and ETFE pillow-cushions for fully transparent atriums.' },
  { q: 'How long does a tensile project take?',
    a: 'A 5,000 sq.ft. entrance canopy takes 6–10 weeks from design freeze to handover. Stadium-scale projects (50,000+ sq.ft.) typically run 5–9 months.' },
  { q: 'Will the membrane stand up to monsoon rain?',
    a: 'Yes. Architectural PTFE membranes are tested to monsoon-grade wind-driven rain. Self-cleaning surface treatment lets dust and grime wash off naturally.' },
  { q: 'Can the membrane be replaced later?',
    a: 'Yes. Membranes are designed to be removable. After service life, the membrane skin can be re-tensioned over the original steel and cable system at a fraction of new-build cost.' },
  { q: 'Is tensile cheaper than metal roofing?',
    a: 'For large clear spans (above 25m), tensile beats steel on both material and erection cost. For small spans below 15m, metal roofing is typically cheaper.' },
  { q: 'What warranty does Tesco offer on tensile structures?',
    a: 'A 15-year membrane material warranty, plus a 10-year warranty on hot-dip galvanized hardware and cable systems.' },
  { q: 'Do tensile structures need permits?',
    a: 'Yes — they are permanent structures and need building permission like any other roof. Tesco helps prepare drawings and structural reports for municipal sign-off.' },
];

export default function Tensilefaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="ten-faq">
      <div className="container ten-faq__inner">

        <div className="ten-faq__art">
          <img src={faqArt} alt="Frequently asked questions illustration" />
        </div>

        <div className="ten-faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`ten-faq__item ${isOpen ? 'ten-faq__item--open' : ''}`}>
                <button
                  type="button"
                  className="ten-faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="ten-faq__icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="12" y1="5" x2="12" y2="19" className="ten-faq__icon-v" />
                    </svg>
                  </span>
                </button>
                <div className="ten-faq__a" role="region">
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
