export default function Privacy() {
  return (
    <section className="ti-band ti-band-privacy">
      <div className="ti-wrap">
        <div className="ti-privacy-header">
          <a className="ti-privacy-back" href="/">
            ← Back to home
          </a>
        </div>

        <div className="ti-privacy-card">
          <h1 className="ti-h1 ti-privacy-title">Privacy Policy</h1>

          <p className="ti-sub">
            TapIT Invoices is designed to be local-first. The extension
            generates invoices in your browser and stores data locally on your
            device so you can work without creating an account.
          </p>

          <h2 className="ti-h2 ti-privacy-h2">What we collect</h2>
          <p className="ti-sub">
            TapIT Invoices does not collect or transmit your invoice data (such
            as names, emails, line items, amounts, or notes). Your invoice
            content is stored locally in your browser storage.
          </p>

          <h2 className="ti-h2 ti-privacy-h2">License verification</h2>
          <p className="ti-sub">
            If you enter a license key, the extension may verify the key with
            the licensing provider (for example, Gumroad). This verification is
            used only to confirm subscription status and unlock paid features.
          </p>

          <h2 className="ti-h2 ti-privacy-h2">Payments</h2>
          <p className="ti-sub">
            Payments are processed by third-party payment providers. TapIT
            Invoices does not process or store your credit card details.
          </p>

          <h2 className="ti-h2 ti-privacy-h2">Support</h2>
          <p className="ti-sub">
            If you contact support, you may share information such as your email
            address and a description of the issue. This information is used
            only to respond to your request.
          </p>

          <h2 className="ti-h2 ti-privacy-h2">Changes</h2>
          <p className="ti-sub">
            This policy may be updated from time to time. Material changes will
            be reflected on this page with an updated date.
          </p>

          <p className="ti-mini ti-mini-muted ti-privacy-updated">
            Last updated: 2026-02-18
          </p>
        </div>
      </div>
    </section>
  );
}
