import { useState } from 'react';
import './Architecturalfaq.css';
import faqArt from '../../assets/architecturalFAQ.svg';

const FAQS = [
  { q: 'What is Architectural Design & Structural Consultancy?',
    a: 'A combined service — architectural form-finding plus structural engineering, drafting, BOQ, and code compliance — delivered by a single in-house Tesco team.' },
  { q: 'Do you only design Tesco-built projects, or external too?',
    a: 'Both. Tesco often provides design + consultancy as a standalone service for architects and contractors. We are happy to deliver designs only — no build commitment required.' },
  { q: 'What design software do you use?',
    a: 'STAAD.Pro for structural analysis, Tekla Structures for shop drawings, AutoCAD/Revit for GA, and Blender/Lumion for 3D walkthroughs.' },
  { q: 'How fast can you turn around a design?',
    a: 'For a 50,000 sq.ft. PEB design — concept to fabrication-ready in 3–4 weeks. For complex landmark builds, 8–12 weeks. We share a Gantt with milestones up front.' },
  { q: 'Do you provide third-party reviews?',
    a: 'Yes — Tesco PEs can review another firm\'s structural drawings for compliance, value-engineering, and constructability. Reports in 7 working days.' },
  { q: 'Can we revise designs after approval?',
    a: 'Yes. We include two rounds of revision in the base scope. Additional revisions are billed per drawing/sheet at transparent rates.' },
  { q: 'Do you support BIM coordination?',
    a: 'Yes. We model in Revit at LOD 350 and coordinate MEP/HVAC/architecture through Navisworks clash detection.' },
  { q: 'What deliverables do I get?',
    a: 'GA drawings, shop drawings, erection drawings, 3D renders/animations, BOQ, structural analysis report, and code-compliance certification — all in editable + PDF formats.' },
];

export default function Architecturalfaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="arc-faq">
      <div className="container arc-faq__inner">

        <div className="arc-faq__art">
          <img src={faqArt} alt="Frequently asked questions illustration" />
        </div>

        <div className="arc-faq__list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`arc-faq__item ${isOpen ? 'arc-faq__item--open' : ''}`}>
                <button
                  type="button"
                  className="arc-faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="arc-faq__icon" aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line x1="12" y1="5" x2="12" y2="19" className="arc-faq__icon-v" />
                    </svg>
                  </span>
                </button>
                <div className="arc-faq__a" role="region">
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
