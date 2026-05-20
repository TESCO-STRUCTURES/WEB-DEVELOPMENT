import { useEffect, useRef } from 'react';
import './HomeBlogs.css';
import b1 from '../../assets/homeblog1.svg';
import b2 from '../../assets/homeblog2.svg';
import b3 from '../../assets/homeblog3.svg';
import b4 from '../../assets/homeblog4.svg';

const POSTS = [
  { src: b1, alt: 'Smarter Construction with Pre-Engineered Buildings' },
  { src: b2, alt: 'Building Strong Foundations for Every Project' },
  { src: b3, alt: 'Modern Tensile Designs for Flexible Architecture' },
  { src: b4, alt: 'Designing Spaces with Precision and Purpose' },
];

const LOOPED = [...POSTS, ...POSTS, ...POSTS];

export default function HomeBlogs() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Width of one set of cards (no gap)
    const cardWidth = 425.6;
    const setWidth = POSTS.length * cardWidth;

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

    // Infinite-loop reset: snap silently when passing boundaries
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
    <section id="blog" className="ts-blg">
      <div className="container">

        <div className="ts-blg__head">
          <span className="ts-blg__eyebrow">Blogs</span>
          <p className="ts-blg__desc">
            Explore insights, trends, and expert knowledge from the construction industry.
            Our blogs keep you informed with practical ideas and innovative solutions.
          </p>
        </div>

        <div className="ts-blg__grid" ref={gridRef}>
          <div className="ts-blg__screen">
            {LOOPED.map((p, i) => (
              <figure key={i} className="ts-blg__card">
                <img src={p.src} alt={p.alt} loading="lazy" draggable={false} />
              </figure>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
