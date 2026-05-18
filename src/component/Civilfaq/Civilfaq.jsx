import { useState } from 'react';
import './Civilfaq.css';
import faqArt from '../../assets/civilFAQ.svg';

const FAQS = [
  { q: 'What is Civil Construction?',
    a: 'Civil construction covers earthworks, foundations, RCC, walls, drainage and finishing — the structural and ground works that anchor every project.' },
  { q: 'Do you do civil works standalone or only with steel projects?',
    a: 'Both. Tesco takes on standalone civil contracts or bundles civil works with our PEB/steel build for one accountable team end-to-end.' },
  { q: 'What grade of concrete do you use?',
    a: 'M20 for non-load-bearing, M25 for slabs and beams, M30 for foundations carrying heavy industrial loads. We share mix design and cube-test results before every pour.' },
  { q: 'How is foundation design decided?',
    a: 'A geotechnical engineer runs soil-bearing and water-table tests. Based on results we recommend isolated, raft, or pile foundations and engineer the structural drawings.' },
  { q: 'How long does a typical civil project take?',
    a: 'A 50,000 sq.ft. industrial floor takes 8–14 weeks. Multi-storey RCC frames typically run 5–10 months depending on floor count and finishing scope.' },
  { q: 'What warranty does Tesco offer on civil works?',
    a: 'A 15-year structural warranty on foundations and load-bearing RCC, and a 5-year warranty on finishing trades (waterproofing, tiling, painting).' },
  { q: 'Can you work in restricted/urban sites?',
    a: 'Yes. We have experience in tight downtown sites, basement projects, and noise-restricted zones. We handle site permissions, traffic plans, and dust-control.' },
  { q: 'What documentation will I receive?',
    a: 'BOQ trace, material vouchers, concrete cube test reports, rebar audit logs, and stage-wise photo records — handed over at project completion.' },
];

export default function Civilfaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="civ-faq">
      <div className="container civ-faq__inner">

        <div className="civ-faq__art">
          <img src={faqArt} alt="Frequently asked questions illustration" />
        </div>

        <div className="civ-faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`civ-faq__item ${isOpen ? 'civ-faq__item--open' : ''}`}>
                <button
                  type="button"
                  className="civ-faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="civ-faq__icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="12" y1="5" x2="12" y2="19" className="civ-faq__icon-v" />
                    </svg>
                  </span>
                </button>
                <div className="civ-faq__a" role="region">
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
