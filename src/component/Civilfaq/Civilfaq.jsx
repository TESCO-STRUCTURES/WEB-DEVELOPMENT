import { useState } from 'react';
import './Civilfaq.css';
import faqArt from '../../assets/civilFAQ.svg';

const FAQS = [
  { q: 'Do you do civil works only, or only with steel projects?',     a: 'Both. Tesco can take on standalone civil contracts (foundation, RCC, finishing) or bundle civil works with our steel/PEB build to give you one accountable team end-to-end.' },
  { q: 'What grade of concrete do you use?',                            a: 'M20 for non-load-bearing, M25 for slabs and beams, M30 for foundations carrying heavy industrial loads. We share the mix design and cube-test results before every pour.' },
  { q: 'How is foundation design decided?',                             a: 'A geotechnical engineer runs soil-bearing and water-table tests on your site. Based on results we recommend isolated, raft, or pile foundations and engineer the structural drawings.' },
  { q: 'How long does a typical civil project take?',                   a: 'A 50,000 sq.ft. industrial floor takes 8–14 weeks (earthworks → handover). Multi-storey RCC frames typically run 5–10 months depending on floor count and finishing scope.' },
  { q: 'What kind of warranty do you offer on civil works?',            a: 'A 15-year structural warranty on foundations and load-bearing RCC, and a 5-year warranty on finishing trades (waterproofing, tiling, painting).' },
  { q: 'Can you work in restricted/urban sites?',                       a: 'Yes. We have experience in tight downtown sites, basement projects, and noise-restricted zones. We handle site permissions, traffic plans, and dust-control on your behalf.' },
];

export default function Civilfaq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="civ-faq">
      <div className="container civ-faq__inner">
        <div className="civ-faq__art">
          <img src={faqArt} alt="" />
        </div>
        <div className="civ-faq__copy">
          <span className="civ-faq__eyebrow">FAQ</span>
          <h2 className="civ-faq__title">Civil questions <span>builders ask first</span></h2>
          <p className="civ-faq__desc">Quick answers before the first quote.</p>
          <ul className="civ-faq__list">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={i} className={`civ-faq__item ${isOpen ? 'civ-faq__item--open' : ''}`}>
                  <button type="button" className="civ-faq__q" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                    <span>{f.q}</span>
                    <span className="civ-faq__icon" aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <line x1="12" y1="5" x2="12" y2="19" className="civ-faq__icon-v"/>
                      </svg>
                    </span>
                  </button>
                  <div className="civ-faq__a" role="region"><p>{f.a}</p></div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
