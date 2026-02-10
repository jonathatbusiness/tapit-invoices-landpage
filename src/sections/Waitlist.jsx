import { FiMail } from "react-icons/fi";

export default function Waitlist() {
  return (
    <section className="ti-band ti-waitlist" id="waitlist">
      <div className="ti-wrap">
        <h2 className="ti-h2">Want early access?</h2>
        <p className="ti-sub">
          Drop your email. We’ll ping you when it’s ready. (No weird stuff.)
        </p>

        <form
          className="ti-form"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(
              "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__tgwfYNUMUg4TkdaVE85MDUzQ0M2QjJEOE9aMTJKUi4u",
              "_blank",
              "noopener,noreferrer",
            );
          }}
        >
          <label className="ti-field">
            <span className="ti-field-icon">
              <FiMail />
            </span>
            <input
              type="email"
              name="email"
              placeholder="you@domain.com"
              autoComplete="email"
              required
            />
          </label>

          <button className="ti-btn" type="submit">
            Join the list
          </button>
        </form>

        <p className="ti-mini ti-mini-muted">
          No spam. No noise. Just “it’s ready” energy.
        </p>
      </div>
    </section>
  );
}
