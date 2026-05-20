import './Architecturalprojects.css';
import { useEffect, useRef } from 'react';
import p1 from '../../assets/architecturalprojects1.svg';
import p2 from '../../assets/architecturalprojects2.svg';
import p3 from '../../assets/architecturalprojects3.svg';
import compo1 from '../../assets/compo1.png';
import compo2 from '../../assets/compo2.png';

const PROJECTS = [
  { src: p1,     alt: 'Stadium structural design' },
  { src: p2,     alt: 'Port logistics drafting' },
  { src: p3,     alt: 'Hospital structural consultancy' },
  { src: compo1, alt: 'Composite construction project' },
  { src: compo2, alt: 'Composite construction structure' },
];

const LOOPED = [...PROJECTS, ...PROJECTS, ...PROJECTS];

export default function Architecturalprojects() {
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
    <section id="arc-projects" className="arc-pro">
      <div className="container">

        <div className="arc-pro__head">
          <span className="arc-pro__eyebrow">Our Projects</span>
          <p className="arc-pro__desc">
            Delivering high-quality architectural & structural designs with precision and reliability.
            Our portfolio reflects engineering depth, modern visualisation, and trusted execution.
          </p>
        </div>

        <div className="arc-pro__grid" ref={gridRef}>
          <div className="arc-pro__screen">
            {LOOPED.map((p, i) => (
              <figure key={i} className="arc-pro__card">
                <img src={p.src} alt={p.alt} loading="lazy" draggable={false} />
              </figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
