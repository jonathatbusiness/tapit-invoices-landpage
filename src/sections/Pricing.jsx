export default function Pricing() {
  return (
    <section
      className="ti-band ti-band-pricing ti-reveal"
      id="pricing"
      data-ti-animate
      style={{ "--ti-delay": "100ms" }}
    >
      <div className="ti-wrap ti-center">
        <h2 className="ti-h2">Pricing that doesn’t waste your time.</h2>
        <p className="ti-sub ti-sub-center">
          One plan. One goal: get invoices out the door.
        </p>

        <div className="ti-price-grid">
          <div className="ti-price-card">
            <div className="ti-price-tag">Free trial</div>
            <div className="ti-price">
              <span className="ti-price-amount">$0</span>
              <span className="ti-price-unit">/7 days</span>
            </div>
            <div className="ti-price-note">Managed by Gumroad.</div>

            <ul className="ti-price-list">
              <li>Full access during the trial</li>
              <li>Unlimited invoices</li>
              <li>Local-first (no account)</li>
              <li>Cancel anytime</li>
            </ul>
          </div>

          <div className="ti-price-card ti-price-card-highlight">
            <div className="ti-price-tag">Yearly</div>
            <div className="ti-price">
              <span className="ti-price-amount">$36</span>
              <span className="ti-price-unit">/year</span>
            </div>
            <div className="ti-price-note">Renews yearly. Cancel anytime.</div>

            <ul className="ti-price-list">
              <li>Unlimited invoices</li>
              <li>One-click PDF export</li>
              <li>Built-in email template</li>
              <li>Multiple themes</li>
            </ul>
          </div>
        </div>

        <p className="ti-mini ti-mini-muted ti-pricing-note">
          No upsells. No tiers. Just invoices.
        </p>
      </div>
    </section>
  );
}
