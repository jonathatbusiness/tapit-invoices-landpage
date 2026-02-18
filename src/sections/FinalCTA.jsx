export default function FinalCTA() {
  return (
    <section
      className="ti-band ti-band-final ti-reveal"
      id="buy"
      data-ti-animate
      style={{ "--ti-delay": "120ms" }}
    >
      <div className="ti-wrap ti-center">
        <h2 className="ti-h2">Ready to stop overthinking invoices?</h2>
        <p className="ti-sub ti-sub-center">
          Install TapIT Invoices, generate your first invoice, and move on with
          your day.
        </p>

        <div className="ti-final-actions">
          <a
            className="ti-btn ti-btn-lg ti-btn-wide ti-btn-pulse"
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Get TapIT Invoices
          </a>
        </div>

        <p className="ti-mini ti-mini-muted">
          Chrome Web Store link will be added here soon.
        </p>
      </div>
    </section>
  );
}
