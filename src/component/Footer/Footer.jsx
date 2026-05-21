import './Footer.css';
import footerLogo from '../../assets/fLogo.png';

/* SOCIAL ICONS */
import linkedinIcon from '../../assets/fl L.png';
import youtubeIcon from '../../assets/fl Y.png';
import facebookIcon from '../../assets/fl F.png';
import instagramIcon from '../../assets/fl I.png';
import pinterestIcon from '../../assets/fl P.png';
import twitterIcon from '../../assets/fl X.png';

const QUICK_LINKS = [
  'Home',
  'About us',
  'Services',
  'Project',
  'Brochure',
  'Blogs',
  'Career',
  'Contact'
];

export default function Footer() {
  return (
    <footer id="contact" className="ts-footer">

      {/* ===================================
          WATERMARK
      =================================== */}
      <div className="ts-footer__watermark">
        TESCO STRUCTURES
      </div>

      {/* ===================================
          MAIN CONTENT
      =================================== */}
      <div className="container ts-footer__inner">

        {/* =========================
            BRAND
        ========================= */}
        <div className="ts-footer__brand">

          {/* LOGO */}
          <div className="ts-footer__logo-mark">

            <img
              src={footerLogo}
              alt="Tesco Logo"
              className="ts-footer__logo-icon"
            />

          </div>

          {/* DESCRIPTION */}
          <p className="ts-footer__desc">
            Delivering strong, reliable, and cost-
            effective construction solutions for
            industrial, commercial, and residential
            projects. We design, fabricate, and
            build high-quality PEB structures,
            roofing systems, and steel buildings
            that stand the test of time.
          </p>

        </div>

        {/* =========================
            QUICK LINKS
        ========================= */}
        <div className="ts-footer__col">

          <h4 className="ts-footer__title">
            Quick Links
          </h4>

          <ul className="ts-footer__list">

            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="ts-footer__link">
                  {link}
                </a>
              </li>
            ))}

          </ul>

        </div>

        {/* =========================
            CONTACT
        ========================= */}
        <div className="ts-footer__col ts-footer__contact">

          <h4 className="ts-footer__title">
            Contact
          </h4>

          <ul className="ts-footer__list ts-footer__contact-list">

            {/* EMAIL */}
            <li>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>

              <a
                href="mailto:tescostructure@gmail.com"
                className="ts-footer__link"
              >
                tescostructure@gmail.com
              </a>

            </li>

            {/* PHONE */}
            <li>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>

              <span>
                +91 9600652424, +91 9150050533
              </span>

            </li>

            {/* ADDRESS */}
            <li>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>

              <span>
                37, 15th St, Gandhi Nagar,
                Ashok Nagar, Chennai,
                Tamil Nadu 600083
              </span>

            </li>

          </ul>

        </div>

        {/* =========================
            SOCIAL
        ========================= */}
        <div className="ts-footer__social-col">

          <a
            href="https://www.linkedin.com/company/tesco-structures/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tesco Structures on LinkedIn"
            className="ts-footer__soc-wrap"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="ts-footer__soc-img"
            />
          </a>

          <a
            href="#"
            aria-label="YouTube (coming soon)"
            className="ts-footer__soc-wrap"
          >
            <img
              src={youtubeIcon}
              alt="YouTube"
              className="ts-footer__soc-img"
            />
          </a>

          <a
            href="https://www.facebook.com/tescostructures/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tesco Structures on Facebook"
            className="ts-footer__soc-wrap"
          >
            <img
              src={facebookIcon}
              alt="Facebook"
              className="ts-footer__soc-img"
            />
          </a>

          <a
            href="https://www.instagram.com/tesco_structures/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tesco Structures on Instagram"
            className="ts-footer__soc-wrap"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="ts-footer__soc-img"
            />
          </a>

          <a
            href="#"
            aria-label="Pinterest (coming soon)"
            className="ts-footer__soc-wrap"
          >
            <img
              src={pinterestIcon}
              alt="Pinterest"
              className="ts-footer__soc-img"
            />
          </a>

          <a
            href="#"
            aria-label="Twitter / X (coming soon)"
            className="ts-footer__soc-wrap"
          >
            <img
              src={twitterIcon}
              alt="Twitter"
              className="ts-footer__soc-img"
            />
          </a>

        </div>

      </div>

      {/* ===================================
          BOTTOM BAR
      =================================== */}
      <div className="container ts-footer__bottom">

        <span>
          © 2026 Tesco digital
        </span>

        <span className="ts-footer__legal">

          <span>
            All rights reserved.
          </span>

          <span style={{ margin: '0 8px' }}>
            •
          </span>

          <a href="#privacy">
            Privacy Policy
          </a>

        </span>

      </div>

    </footer>
  );
}