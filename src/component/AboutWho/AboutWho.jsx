import './AboutWho.css';
import img1 from '../../assets/about who1.svg';
import img2 from '../../assets/about who2.svg';

export default function AboutWho() {
  return (
    <section className="ts-aw">
      <div className="ts-aw__inner">

        <div className="ts-aw__copy">
          <span className="ts-aw__eyebrow"><span className="ts-aw__eyebrow-text">Who We Are</span></span>
          <p className="ts-aw__desc">
            Tesco Structure LLP is a trusted construction company with over 15 years of            experience in delivering high-quality projects across industrial, commercial,
            and residential sectors. We specialize in Pre-Engineered Buildings (PEB),
            structural steel solutions, roofing systems, multi-storey construction,
            civil works, and architectural and structural consultancy. With a strong
            focus on engineering excellence and innovation, our team ensures every project
            is designed with precision and executed using modern construction methods.<br />
            We are committed to delivering safe, durable, and cost-effective structures
            while maintaining the highest standards of quality and professionalism. By
            using premium materials and following industry best practices, we ensure
            timely project completion without compromising performance. Our goal is to
            build long-term relationships with clients through reliability, transparency,
            and consistent service—creating structures that stand strong for years to come.
          </p>
        </div>

        <div className="ts-aw__media">
          <div className="ts-aw__diamond-grid">
            <div className="ts-aw__diamond ts-aw__diamond--1">
              <div className="ts-aw__diamond-inner">
                <img src={img1} alt="Tensile Structure" />
              </div>
            </div>
            <div className="ts-aw__diamond ts-aw__diamond--2">
              <div className="ts-aw__diamond-inner">
                <img src={img2} alt="PEB Structure" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}