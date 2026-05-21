import './ContactMap.css';

import mapImg from '../../assets/contactenquiry.svg';
import Contactap from '../../assets/contactmaplogo.svg';

export default function ContactMap() {
  return (
    <section id="contact-map" className="ct-map">
      <div className="container">

        <div className="ct-map__card">

          {/* LEFT SIDE */}
          <div className="ct-map__visual">

            <img
              src={mapImg}
              alt="Tesco Location Map"
              className="ct-map__img"
            />

            {/* FLOATING CARD */}
            <div className="ct-map__floating-card">

              <div className="ct-map__fc-brand">

                <div className="ct-map__fc-brand-icon">
                  <img
                    src={Contactap}
                    alt="Tesco Structure Logo"
                    className="ct-map__fc-logo"
                  />
                </div>

                <div className="ct-map__fc-brand-text">
                  <span className="ct-map__fc-brand-title">
                    TESCO
                  </span>

                  <span className="ct-map__fc-brand-sub">
                    STRUCTURE
                  </span>
                </div>

              </div>

              <p className="ct-map__fc-addr">
                37, 15th St, Gandhi Nagar, Ashok Nagar,
                <br />
                Chennai, Tamil Nadu 600083
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
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