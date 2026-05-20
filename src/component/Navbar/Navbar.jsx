import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/tesco structures.svg';

/* ── Services dropdown items ───────────────────────────── */
const SERVICES_CHILDREN = [
  { label: 'Pre-Engineered Building (PEB)', to: '/peb' },
  { label: 'Tensile Roofing', to: '/tensile' },
  { label: 'Civil Construction', to: '/civil' },
  { label: 'Architectural Design & Structural Consultancy', to: '/architectural' },
  { label: 'All Type of Roofing', to: '/all' },
];

/* ── Top-level nav items ───────────────────────────────── */
const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', dropdown: SERVICES_CHILDREN },
  { label: 'Projects', to: '/projects' },

  // Brochure single downloadable PDF (place file at `public/brochures/tesco-brochure.pdf`)
  { label: 'Brochure', dropdown: [ { label: 'Download PDF', to: '/brochures/tesco-brochure.pdf' } ] },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/career' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDD, setOpenDD] = useState(null);
  const ddCloseTimer = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onEsc = (e) => { if (e.key === 'Escape') setOpenDD(null); };
    const onDocClick = (e) => {
      if (!e.target.closest('.ts-nav__has-dd')) setOpenDD(null);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onEsc);
    document.addEventListener('click', onDocClick);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onEsc);
      document.removeEventListener('click', onDocClick);
    };
  }, []);

  /* Close any open menu/dropdown when route changes */
  useEffect(() => {
    setMenuOpen(false);
    setOpenDD(null);
  }, [location.pathname]);

  const onTriggerEnter = (label) => {
    clearTimeout(ddCloseTimer.current);
    setOpenDD(label);
  };
  const onTriggerLeave = () => {
    ddCloseTimer.current = setTimeout(() => setOpenDD(null), 180);
  };

  const isDDActive = (link) =>
    !!link.dropdown && link.dropdown.some((c) => location.pathname === c.to);

  /* Click handler for the dropdown trigger:
     - On desktop the dropdown opens on hover; the click still navigates to
       the first child (PEB) so users on touch devices get a usable target.
     - On mobile (menu open / no hover), the click just toggles the panel. */
  const onDropdownTriggerClick = (e, link) => {
    e.preventDefault();
    // mobile — toggle the panel when menu (burger) is open
    if (menuOpen) {
      setOpenDD((cur) => (cur === link.label ? null : link.label));
      return;
    }

    // Desktop: prefer opening the dropdown for links that expose a downloadable
    // resource (e.g. Brochure). If the dropdown only contains navigational
    // children, fall back to navigating to the first child for touch devices.
    const hasDownloadChild = !!(link.dropdown && link.dropdown.some((c) => typeof c.to === 'string' && c.to.endsWith('.pdf')));
    if (hasDownloadChild) {
      setOpenDD((cur) => (cur === link.label ? null : link.label));
      return;
    }

    // Fallback for dropdowns without downloadable items: navigate to first child
    if (link.dropdown && link.dropdown[0]) {
      navigate(link.dropdown[0].to);
      setOpenDD(null);
    }
  };

  return (
    <header className={`ts-nav ${scrolled ? 'ts-nav--scrolled' : ''}`}>
      <div className="ts-nav__inner container">

        <Link to="/" className="ts-nav__brand" aria-label="Tesco Structures home">
          <img src={logo} alt="Tesco Structures" className="ts-nav__logo" />
        </Link>

        <nav className={`ts-nav__links ${menuOpen ? 'ts-nav__links--open' : ''}`}>
          {LINKS.map((l) => {
            if (l.dropdown) {
              const open = openDD === l.label;
              const active = isDDActive(l);
              return (
                <div
                  key={l.label}
                  className={`ts-nav__has-dd ${open ? 'ts-nav__has-dd--open' : ''}`}
                  onMouseEnter={() => onTriggerEnter(l.label)}
                  onMouseLeave={onTriggerLeave}
                >
                  <a
                    href="#services"
                    className={`ts-nav__link ts-nav__link--has-dd ${active ? 'ts-nav__link--active' : ''}`}
                    aria-haspopup="menu"
                    aria-expanded={open}
                    onClick={(e) => onDropdownTriggerClick(e, l)}
                  >
                    {l.label}
                    <svg className="ts-nav__caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </a>

                  <ul className="ts-nav__dd" role="menu" aria-label={`${l.label} submenu`}>
                    {l.dropdown.map((child) => (
                      <li key={child.to} role="none">
                        {typeof child.to === 'string' && (child.to.endsWith('.pdf') || child.to.startsWith('http')) ? (
                          <a
                            href={child.to}
                            role="menuitem"
                            className="ts-nav__dd-link"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <NavLink
                            to={child.to}
                            role="menuitem"
                            className={({ isActive }) =>
                              `ts-nav__dd-link ${isActive ? 'ts-nav__dd-link--active' : ''}`
                            }
                          >
                            {child.label}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            // If link points to a PDF or external URL, render as downloadable anchor
            if (typeof l.to === 'string' && (l.to.endsWith('.pdf') || l.to.startsWith('http'))) {
              return (
                <a
                  key={l.to}
                  href={l.to}
                  className={`ts-nav__link`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.label}
                  <svg className="ts-nav__dd-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              );
            }

            return (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `ts-nav__link ${isActive ? 'ts-nav__link--active' : ''}`
                }
              >
                {l.label}
              </NavLink>
            );
          })}

          <Link to="/contact" className="ts-nav__cta">Contact</Link>
        </nav>

        <button
          type="button"
          className={`ts-nav__burger ${menuOpen ? 'ts-nav__burger--open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}