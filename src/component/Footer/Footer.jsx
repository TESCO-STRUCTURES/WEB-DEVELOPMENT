import './Footer.css';

const QUICK_LINKS = ['Home', 'About us', 'Services', 'Pricing', 'Project', 'Brochure', 'Blogs', 'Career', 'Contact'];

export default function Footer() {
  return (
    <footer id="contact" className="ts-footer">
      <div className="ts-footer__bg-text">TESCO STRUCTURES</div>
      
      <div className="container ts-footer__inner">
        <div className="ts-footer__brand">
          <div className="ts-footer__logo-mark" style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px'}}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 80 L80 20 M20 50 L50 20 M50 80 L80 50" stroke="#4FA31E" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <span style={{fontFamily: "'Oswald', sans-serif", fontWeight: '700', fontSize: '20px', lineHeight: '1', color: '#fff', letterSpacing: '0.1em'}}>TESCO</span>
              <span style={{fontFamily: "'Manrope', sans-serif", fontWeight: '600', fontSize: '10px', lineHeight: '1.2', color: '#fff', letterSpacing: '0.3em'}}>STRUCTURE</span>
            </div>
          </div>
          <p className="ts-footer__desc">
            Delivering strong, reliable, and cost-effective construction solutions for industrial, commercial, and residential projects. We design, fabricate, and build high-quality PEB structures, roofing systems, and steel buildings that stand the test of time.
          </p>
        </div>

        <div className="ts-footer__col">
          <h4 className="ts-footer__title">Quick Links</h4>
          <ul className="ts-footer__list">
            {QUICK_LINKS.map((link) => (
              <li key={link}><a href="#" className="ts-footer__link">{link}</a></li>
            ))}
          </ul>
        </div>

        <div className="ts-footer__col ts-footer__contact">
          <h4 className="ts-footer__title">Contact</h4>
          <ul className="ts-footer__list ts-footer__contact-list">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:tescostructure@gmail.com" className="ts-footer__link">tescostructure@gmail.com</a>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+91 9600652424, +91 9150050533</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>37, 15th St, Gandhi Nagar, Ashok Nagar, Chennai, Tamil Nadu 600083</span>
            </li>
          </ul>
        </div>

        <div className="ts-footer__social-col">
          <a href="#" className="ts-footer__soc-icon" style={{background: '#0077b5'}} aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" className="ts-footer__soc-icon" style={{background: '#ff0000'}} aria-label="YouTube">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="#" className="ts-footer__soc-icon" style={{background: '#1877f2'}} aria-label="Facebook">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
          </a>
          <a href="#" className="ts-footer__soc-icon" style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}} aria-label="Instagram">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="ts-footer__soc-icon" style={{background: '#E60023'}} aria-label="Pinterest">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.624 0 12.017 0z"/></svg>
          </a>
          <a href="#" className="ts-footer__soc-icon" style={{background: '#000', border: '1px solid #333'}} aria-label="X">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>

      <div className="container ts-footer__bottom">
        <span>© 2026 Tesco digital</span>
        <span className="ts-footer__legal">
          <span>All rights reserved. Terms & Conditions</span>
          <span style={{margin: '0 8px'}}>•</span>
          <a href="#privacy">Privacy Policy</a>
        </span>
      </div>
    </footer>
  );
}
