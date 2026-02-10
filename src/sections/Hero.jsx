import { FiArrowDown } from "react-icons/fi";
const logo = "/assets/logo.png";

export default function Hero() {
  return (
    <section className="ti-band ti-band-hero">
      <div className="ti-wrap ti-hero-grid">
        {/* Left */}
        <div className="ti-hero-left">
          <img src={logo} alt="TapIT Invoices logo" className="ti-hero-logo" />

          <p className="ti-kicker">Fast. Local. No BS.</p>

          <h1 className="ti-h1">Invoices. Done before you overthink them.</h1>

          <p className="ti-sub">
            TapIT Invoices is a lightweight Chrome extension that generates
            clean, professional invoices locally. No account. No cloud. Just
            open and send.
          </p>
        </div>

        {/* Right */}
        <div className="ti-hero-right">
          <div className="ti-cta-card ti-cta-card-lg">
            <a className="ti-btn ti-btn-lg ti-btn-wide" href="#waitlist">
              Join the waitlist
            </a>

            <p className="ti-mini ti-mini-muted">
              Takes 5 seconds. No spam. Your future self says thanks.
            </p>

            <div className="ti-badges-in-card">
              <span className="ti-badge ti-badge-a">Local-first</span>
              <span className="ti-badge ti-badge-b">Unlimited invoices</span>
              <span className="ti-badge ti-badge-c">One-click PDF</span>
            </div>

            {/* Scribble arrow + handwriting text (inside the card) */}
            <div className="ti-scribble ti-scribble-in-card">
              <span className="ti-hand">Yep. This button. Do it.</span>
              <svg
                className="ti-scribble-arrow"
                viewBox="0 0 220 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 105 C 60 60, 120 60, 170 35 C 190 25, 205 18, 214 10"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M205 10 L214 10 L214 20"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom center scroll button */}
      <a className="ti-scroll" href="#carousel" aria-label="Scroll to carousel">
        <span className="ti-scroll-pill">
          <FiArrowDown /> See it in action
        </span>
      </a>
    </section>
  );
}
