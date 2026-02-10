import { FiMail } from "react-icons/fi";

export default function FinalCTA() {
  return (
    <section className="ti-band ti-band-final" id="waitlist">
      <div className="ti-wrap ti-center">
        <h2 className="ti-h2">You made it all the way down here.</h2>
        <p className="ti-sub ti-sub-center">
          That little voice in your head already decided. Don’t leave it
          hanging.
        </p>

        <form className="ti-final-form" onSubmit={(e) => e.preventDefault()}>
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

          <button
            className="ti-btn ti-btn-lg ti-btn-wide ti-btn-pulse"
            type="submit"
          >
            Join the waitlist
          </button>
        </form>

        <p className="ti-mini ti-mini-muted">
          If you’re here, you already know. Let’s make invoices brain-free.
        </p>
      </div>
    </section>
  );
}
