import { FiArrowDown } from "react-icons/fi";
const logo = "/assets/logo.png";

export default function Hero() {
  return (
    <section className="ti-band ti-band-hero ti-reveal" data-ti-animate>
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
            <a
              className="ti-btn ti-btn-lg ti-btn-wide"
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Get TapIT Invoices
            </a>

            <p className="ti-mini ti-mini-muted">
              Chrome Web Store link will be added here soon.
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
      <button
        type="button"
        className="ti-scroll"
        aria-label="Scroll to carousel"
        onClick={() => {
          const target = document.getElementById("carousel");
          if (!target) return;

          target.scrollIntoView({ behavior: "smooth", block: "start" });

          target.classList.remove("ti-jump");
          void target.offsetWidth;
          target.classList.add("ti-jump");

          window.setTimeout(() => {
            target.classList.remove("ti-jump");
          }, 900);
        }}
      >
        <span className="ti-scroll-pill">
          <FiArrowDown /> See it in action
        </span>
      </button>
    </section>
  );
}
