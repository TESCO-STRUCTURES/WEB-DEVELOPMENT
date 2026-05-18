import { useState } from 'react';
import './Allfaq.css';
import faqArt from '../../assets/allFAQ.svg';

const FAQS = [
  { q: 'Which roofing profile is right for my building?',
    a: 'It depends on your span, slope, and whether you need thermal control. Tesco picks between trapezoidal, standing-seam, insulated PUF, or curved — based on load, daylight, and budget — and walks you through the trade-offs.' },
  { q: 'What gauge and coating do you recommend?',
    a: 'For industrial sheds: 0.50mm trapezoidal with AZ-150 (zinc-aluminium). For commercial / architectural: 0.55–0.70mm standing-seam with PVDF paint finish. Full spec data sheet shared up front.' },
  { q: 'How long does the warranty last?',
    a: '20-year anti-corrosion warranty on AZ-150 / GP-275 coated sheets, 15-year colour warranty on PVDF finishes, and 10-year structural warranty on installation.' },
  { q: 'Can you roll-form sheets on site?',
    a: 'Yes — for spans above 12m we bring a portable roll-former on site, eliminating transit damage and sheet joints. Sheets are rolled to exact length and craned onto purlins.' },
  { q: 'Do you handle gutters and rainwater harvesting?',
    a: 'Yes. Tesco fabricates and installs gutters, downpipes, and full rainwater-harvesting tanks as an integrated package with the roofing.' },
  { q: 'How does installation work in monsoon?',
    a: 'Monsoon is fine — we use tarpaulin staging and prioritise eave-up sequencing so each completed section is water-tight before the next panel goes on.' },
  { q: 'Do you supply insulated panels?',
    a: 'Yes — PUF and PIR sandwich panels in 40mm / 60mm / 80mm thickness with fire-rated cores for cold-storage and clean-room applications.' },
  { q: 'Can you re-roof an existing building?',
    a: 'Yes. We strip and replace existing roofing with minimal operational downtime, including bay-by-bay sequencing to keep your facility running.' },
];

export default function Allfaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="all-faq">
      <div className="container all-faq__inner">

        <div className="all-faq__art">
          <img src={faqArt} alt="Frequently asked questions illustration" />
        </div>

        <div className="all-faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`all-faq__item ${isOpen ? 'all-faq__item--open' : ''}`}>
                <button
                  type="button"
                  className="all-faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="all-faq__icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="12" y1="5" x2="12" y2="19" className="all-faq__icon-v" />
                    </svg>
                  </span>
                </button>
                <div className="all-faq__a" role="region">
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
