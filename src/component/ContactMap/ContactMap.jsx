import './ContactMap.css';

export default function ContactMap() {
  return (
    <section id="contact-map" className="ct-map">
      <div className="container">

        <div className="ct-map__card ct-map__card--info-only">

          {/* RIGHT SIDE (now the only side — the dark left card was removed) */}
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

            {/* ADDRESS CARD */}
            <div className="ct-map__address-card">

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
                  500 Market Street, Suite 1200
                  <br />
                  Ashok Nagar, Chennai, TN 600083
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}