import './Civilprojects.css';
import { useEffect, useRef } from 'react';
import p1 from '../../assets/civilprojects1.svg';
import p2 from '../../assets/civilprojects2.svg';
import p3 from '../../assets/civilprojects3.svg';
import compo1 from '../../assets/compo1.png';
import compo2 from '../../assets/compo2.png';

const PROJECTS = [
  { src: p1,     alt: 'Industrial RCC foundation' },
  { src: p2,     alt: 'Commercial RCC frame build' },
  { src: p3,     alt: 'University campus civil works' },
  { src: compo1, alt: 'Composite construction project' },
  { src: compo2, alt: 'Composite construction structure' },
];

const LOOPED = [...PROJECTS, ...PROJECTS, ...PROJECTS];

export default function Civilprojects() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cardWidth = 425.6;
    const setWidth = PROJECTS.length * cardWidth;

    grid.scrollLeft = setWidth;

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let isResetting = false;

    const onDown = (e) => {
      isDown = true;
      startX = e.pageX;
      scrollStart = grid.scrollLeft;
      grid.style.cursor = 'grabbing';
      grid.style.scrollBehavior = 'auto';
    };

    const onMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      grid.scrollLeft = scrollStart - (e.pageX - startX);
    };

    const onUp = () => {
      if (!isDown) return;
      isDown = false;
      grid.style.cursor = '';
      grid.style.scrollBehavior = '';
    };

    const onScroll = () => {
      if (isResetting) return;
      if (grid.scrollLeft >= setWidth * 2) {
        isResetting = true;
        const prev = grid.style.scrollBehavior;
        grid.style.scrollBehavior = 'auto';
        grid.scrollLeft -= setWidth;
        requestAnimationFrame(() => {
          grid.style.scrollBehavior = prev;
          isResetting = false;
        });
      } else if (grid.scrollLeft < 1) {
        isResetting = true;
        const prev = grid.style.scrollBehavior;
        grid.style.scrollBehavior = 'auto';
        grid.scrollLeft += setWidth;
        requestAnimationFrame(() => {
          grid.style.scrollBehavior = prev;
          isResetting = false;
        });
      }
    };

    grid.addEventListener('mousedown', onDown);
    grid.addEventListener('mousemove', onMove);
    grid.addEventListener('mouseup', onUp);
    grid.addEventListener('mouseleave', onUp);
    grid.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      grid.removeEventListener('mousedown', onDown);
      grid.removeEventListener('mousemove', onMove);
      grid.removeEventListener('mouseup', onUp);
      grid.removeEventListener('mouseleave', onUp);
      grid.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section id="civ-projects" className="civ-pro">
      <div className="container">

        <div className="civ-pro__head">
          <span className="civ-pro__eyebrow">Our Projects</span>
          <p className="civ-pro__desc">
            Delivering high-quality civil construction projects with precision and reliability.
            Our portfolio reflects strong engineering, modern execution, and trusted handover.
          </p>
        </div>

        <div className="civ-pro__grid" ref={gridRef}>
          <div className="civ-pro__screen">
            {LOOPED.map((p, i) => (
              <figure key={i} className="civ-pro__card">
                <img src={p.src} alt={p.alt} loading="lazy" draggable={false} />
              </figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
