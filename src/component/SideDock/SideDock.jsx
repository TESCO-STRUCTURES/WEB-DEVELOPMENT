import './SideDock.css';

/* ------------------------------------------------------------------
   Quick-contact floating dock
   - Mail   → mailto:tescostructure@gmail.com
   - WhatsApp → https://wa.me/919600652424
   - Phone  → tel:+919600652424
   Mounted globally in App.jsx, fixed to the right edge of the viewport.
------------------------------------------------------------------ */

const EMAIL = 'tescostructure@gmail.com';

// WhatsApp wa.me link must omit the leading '+' and any spaces.
const WA_NUMBER = '919600652424';

// `tel:` works best with international format kept.
const TEL_NUMBER = '+919600652424';

export default function SideDock() {
  return (
    <aside className="ts-dock" aria-label="Quick contact">

      {/* Email */}
      <a
        href={`mailto:${EMAIL}`}
        className="ts-dock__btn ts-dock__btn--mail"
        aria-label="Email Tesco Structures"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span className="ts-dock__tip">Email us</span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ts-dock__btn ts-dock__btn--wa"
        aria-label="WhatsApp Tesco Structures"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden>
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 01-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 01-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.7.315-.402.46-1.005 1.135-1.005 2.235 0 1.135.405 2.205 1.005 3.075.96 1.39 2.105 2.715 3.48 3.69 1.18.83 2.32 1.418 3.69 1.418 1.005 0 1.85-.488 2.235-1.345.143-.32.215-.6.215-.945 0-.143-.072-.273-.187-.36-.387-.215-1.32-.633-1.66-.633z" />
          <path d="M16.012 4.667c-6.247 0-11.333 5.085-11.333 11.333 0 1.996.518 3.916 1.508 5.625l-1.572 5.731 5.869-1.541a11.272 11.272 0 005.528 1.43c6.247 0 11.333-5.084 11.333-11.333S22.26 4.667 16.012 4.667zm0 20.667a9.318 9.318 0 01-4.751-1.299l-.34-.203-3.484.913.933-3.398-.222-.353a9.31 9.31 0 01-1.42-4.994c0-5.143 4.184-9.327 9.327-9.327 5.143 0 9.327 4.184 9.327 9.327 0 5.143-4.184 9.327-9.327 9.327z" />
        </svg>
        <span className="ts-dock__tip">WhatsApp</span>
      </a>

      {/* Phone */}
      <a
        href={`tel:${TEL_NUMBER}`}
        className="ts-dock__btn ts-dock__btn--call"
        aria-label="Call Tesco Structures"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="ts-dock__tip">Call us</span>
      </a>

    </aside>
  );
}
