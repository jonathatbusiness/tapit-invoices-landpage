import { FiZap, FiLock, FiFileText, FiCopy } from "react-icons/fi";

const items = [
  {
    icon: <FiZap />,
    title: "Fast by default",
    desc: "Open → fill → generate. No setup spiral.",
  },
  {
    icon: <FiLock />,
    title: "Local-first",
    desc: "Your data stays on your device. Not in a dashboard zoo.",
  },
  {
    icon: <FiFileText />,
    title: "Clean PDF in one click",
    desc: "Professional, client-ready, instantly.",
  },
  {
    icon: <FiCopy />,
    title: "Email text ready to paste",
    desc: "Because typing the same email again is a crime.",
  },
];

export default function Features() {
  return (
    <section className="ti-band ti-band-features">
      <div className="ti-wrap">
        <h2 className="ti-h2">The “no drama” invoice workflow.</h2>
        <p className="ti-sub">
          Built for freelancers who want the invoice done and out of the way.
        </p>

        <div className="ti-grid">
          {items.map((it) => (
            <div className="ti-card" key={it.title}>
              <div className="ti-card-icon">{it.icon}</div>
              <div className="ti-card-title">{it.title}</div>
              <div className="ti-card-desc">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
