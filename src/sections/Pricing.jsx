export default function Pricing() {
  return (
    <section
      className="ti-band ti-band-pricing ti-reveal"
      data-ti-animate
      style={{ "--ti-delay": "100ms" }}
    >
      <div className="ti-wrap ti-center">
        <h2 className="ti-h2">Pricing that doesn’t waste your time.</h2>
        <p className="ti-sub ti-sub-center">
          You’re here to send invoices. Not to decode pricing pages.
        </p>

        <div className="ti-price-grid">
          <div className="ti-price-card">
            <div className="ti-price-tag">Standard</div>
            <div className="ti-price">
              <span className="ti-price-amount">$3</span>
              <span className="ti-price-unit">/month</span>
            </div>
            <div className="ti-price-note">Billed annually.</div>

            <ul className="ti-price-list">
              <li>Unlimited invoices</li>
              <li>Local-first (no cloud required)</li>
              <li>One-click PDF</li>
              <li>Themes included</li>
            </ul>
          </div>

          <div className="ti-price-card ti-price-card-highlight">
            <div className="ti-price-tag">Waitlist deal</div>
            <div className="ti-price">
              <span className="ti-price-amount">$2</span>
              <span className="ti-price-unit">/month</span>
            </div>
            <div className="ti-price-note">Billed annually.</div>

            <ul className="ti-price-list">
              <li>Unlimited invoices</li>
              <li>Local-first</li>
              <li>One-click PDF</li>
              <li>Locked-in early price</li>
            </ul>
          </div>
        </div>

        <p className="ti-mini ti-mini-muted ti-pricing-note">
          Yes, it’s simple. That’s the point. Now go ship the invoice.
        </p>
      </div>
    </section>
  );
}
