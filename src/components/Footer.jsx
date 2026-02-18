export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ti-footer">
      <div className="ti-wrap ti-footer-inner">
        <div className="ti-footer-row">
          <div className="ti-footer-brand">TapIT Invoices</div>
          <div className="ti-footer-meta">
            © {year} Jonatha Teixeira. All rights reserved.
          </div>
        </div>

        <div className="ti-footer-row ti-footer-row-links">
          <a className="ti-footer-link" href="/privacy">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
