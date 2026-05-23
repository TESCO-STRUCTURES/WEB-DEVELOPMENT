import './ContactMap.css';

/* Encoded address for the office.
   Used for both the embedded map iframe and the "Get Directions" link. */
const OFFICE_ADDRESS =
  '37, 15th St, Gandhi Nagar, Ashok Nagar, Chennai, Tamil Nadu 600083';
const ENCODED_ADDRESS = encodeURIComponent(OFFICE_ADDRESS);

/* Google Maps deep link — opens the native Maps app on iOS/Android
   or Google Maps on desktop with directions to the destination. */
const DIRECTIONS_URL =
  `https://www.google.com/maps/dir/?api=1&destination=${ENCODED_ADDRESS}`;

/* Embed URL — renders an interactive map preview inside an iframe. */
const EMBED_URL =
  `https://www.google.com/maps?q=${ENCODED_ADDRESS}&output=embed`;

export default function ContactMap() {
  return (
    <section id="contact-map" className="ct-map">
      <div className="container">

        <div className="ct-map__card">

          {/* LEFT — Interactive Google Map.
              Wrapping anchor opens directions in a new tab when clicked.
              Iframe is still interactive (pan/zoom) for users who want
              to explore the area first. */}
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google Maps directions to Tesco Structures"
            className="ct-map__visual"
          >
            <iframe
              title="Tesco Structures location"
              src={EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="ct-map__iframe"
            />
            <span className="ct-map__directions-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Get Directions
            </span>
          </a>

          {/* RIGHT */}
          <div className="ct-map__info">

            <span className="ct-map__eyebrow">
              OUR LOCATION
            </span>

            <h2 className="ct-map__title">
              Visit Our Office
            </h2>

            <p className="ct-map__desc">
              Our engineering center is located in the heart of
              Chennai&apos;s industrial hub. We welcome clients
              for technical consultations and project reviews
              by appointment.
            </p>

            {/* ADDRESS CARD — also clickable */}
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ct-map__address-card"
              aria-label="Open Google Maps directions"
            >

              <div className="ct-map__ac-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="4"
                    y="2"
                    width="16"
                    height="20"
                    rx="2"
                    ry="2"
                  />

                  <path d="M9 22v-4h6v4" />
                  <path d="M8 6h.01" />
                  <path d="M16 6h.01" />
                  <path d="M12 6h.01" />
                  <path d="M12 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 10h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 10h.01" />
                  <path d="M8 14h.01" />
                </svg>
              </div>

              <div className="ct-map__ac-details">

                <h4 className="ct-map__ac-title">
                  Tesco Headquarters
                </h4>

                <p className="ct-map__ac-text">
                  37, 15th St, Gandhi Nagar,
                  <br />
                  Ashok Nagar, Chennai, TN 600083
                </p>

              </div>

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}