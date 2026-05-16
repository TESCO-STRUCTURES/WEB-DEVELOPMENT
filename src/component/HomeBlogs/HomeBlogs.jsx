import './HomeBlogs.css';
import b1 from '../../assets/homeblog1.svg';
import b2 from '../../assets/homeblog2.svg';
import b3 from '../../assets/homeblog3.svg';
import b4 from '../../assets/homeblog4.svg';

const POSTS = [
  {
    src: b1,
    tag:   'PRE ENGINEERED BUILDING (PEB)',
    title: 'Smarter Construction with Pre-Engineered Buildings',
    excerpt: 'Pre-engineered buildings offer faster construction, cost efficiency, and high structural strength.',
  },
  {
    src: b2,
    tag:   'CIVIL CONSTRUCTION',
    title: 'Building Strong Foundations for Every Project',
    excerpt: 'From residential to commercial projects, our civil construction ensures quality, safety, and long-term reliability.',
  },
  {
    src: b3,
    tag:   'TENSILE STRUCTURES',
    title: 'Modern Tensile Designs for Flexible Architecture',
    excerpt: 'Tensile structures bring aesthetic appeal and functional efficiency together.',
  },
  {
    src: b4,
    tag:   'ARCHITECTURAL DESIGN & STRUCTURAL',
    title: 'Designing Spaces with Precision and Purpose',
    excerpt: 'We provide complete architectural and consulting services, ensuring every project is visually appealing and structurally sound.',
  },
];

export default function HomeBlogs() {
  return (
    <section id="blog" className="ts-blg">
      <div className="container">
        <div className="ts-blg__head">
          <span className="ts-blg__eyebrow">Blogs</span>
          <p className="ts-blg__desc">Explore insights, trends, and expert knowledge from the construction industry.<br/>Our blogs keep you informed with practical ideas and innovative solutions.</p>
        </div>

        <div className="ts-blg__stage" style={{ position: 'relative', marginTop: '40px' }}>
          <div className="ts-blg__mask-top" style={{ position: 'absolute', top: -1, left: 0, right: 0, zIndex: 10, pointerEvents: 'none' }}>
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ width: '100%', height: '80px', display: 'block' }}>
              <path d="M0,0 L1000,0 L1000,80 Q500,-60 0,80 Z" fill="#000" />
            </svg>
          </div>

          <div className="ts-blg__grid">
            {POSTS.map((p, i) => (
              <div key={i} className="ts-blg__card">
                <img src={p.src} alt={p.title} className="ts-blg__img" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="ts-blg__mask-bottom" style={{ position: 'absolute', bottom: -1, left: 0, right: 0, zIndex: 10, pointerEvents: 'none' }}>
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ width: '100%', height: '80px', display: 'block' }}>
              <path d="M0,100 L1000,100 L1000,20 Q500,160 0,20 Z" fill="#000" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
