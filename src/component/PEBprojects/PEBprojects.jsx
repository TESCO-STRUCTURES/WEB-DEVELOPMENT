import './PEBprojects.css';
import { useEffect, useRef } from 'react';
import p1 from '../../assets/PEBprojects1.svg';
import p2 from '../../assets/PEBprojects2.svg';
import p3 from '../../assets/PEBprojects3.svg';
import compo1 from '../../assets/compo1.png';
import compo2 from '../../assets/compo2.png';

const PROJECTS = [
  { src: p1,     alt: 'PEB warehouse interior' },
  { src: p2,     alt: 'Tensile fabric structure' },
  { src: p3,     alt: 'Architectural PEB build' },
  { src: compo1, alt: 'Composite construction project' },
  { src: compo2, alt: 'Composite construction structure' },
];

// Render 3 copies so the user can scroll left or right and we jump back to the middle copy seamlessly.
const LOOPED = [...PROJECTS, ...PROJECTS, ...PROJECTS];

export default function PEBprojects() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Width of one set of cards (no gap)
    const cardWidth = 425.6;
    const setWidth = PROJECTS.length * cardWidth;

    // Start at the middle copy
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

    // Infinite-loop reset: when entering the leading or trailing copy, snap silently to the middle copy
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
    <section id="peb-projects" className="peb-pro">
      <div className="container">

        <div className="peb-pro__head">
          <span className="peb-pro__eyebrow">Our Projects</span>
          <p className="peb-pro__desc">
            Delivering high-quality construction projects with precision and reliability.
            Our portfolio reflects strong engineering, modern design, and trusted execution.
          </p>
        </div>

        <div className="peb-pro__grid" ref={gridRef}>
          <div className="peb-pro__screen">
            {LOOPED.map((p, i) => (
              <figure key={i} className="peb-pro__card">
                <img src={p.src} alt={p.alt} loading="lazy" draggable={false} />
              </figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
