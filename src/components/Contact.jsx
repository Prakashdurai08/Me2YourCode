import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import useReveal from "../hooks/useReveal";
import "./Contact.css";

// ═══════════════════════════════════════════════════
// ✅ PASTE YOUR KEYS HERE — only 4 values to change
// ═══════════════════════════════════════════════════
const WEB3FORMS_KEY       = "635fa833-b858-420f-82d0-44ef55f56d72";
const EMAILJS_SERVICE_ID  = "service_p3npe3n";
const EMAILJS_TEMPLATE_ID = "template_b96fuw9";
const EMAILJS_PUBLIC_KEY  = "n8tmvdvbBA_exbIGz";
// ═══════════════════════════════════════════════════

export default function Contact() {
  const [status, setStatus] = useState({ msg: "", type: "" });
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);
  const gridRef = useReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus({ msg: "", type: "" });

    const clientName   = formRef.current.querySelector('[name="name"]').value;
    const clientEmail  = formRef.current.querySelector('[name="email"]').value;
    const clientPhone  = formRef.current.querySelector('[name="phone"]').value || "Not provided";
    const clientBudget = formRef.current.querySelector('[name="budget"]').value || "Not specified";
    const clientMsg    = formRef.current.querySelector('[name="message"]').value;

    try {

      // ────────────────────────────────────────────────
      // CALL 1 — Web3Forms → Full enquiry details TO YOU
      // ────────────────────────────────────────────────
      const ownerData = new FormData();
      ownerData.append("access_key",  WEB3FORMS_KEY);
      ownerData.append("subject",     "🔔 New Project Enquiry — Me to Your Code");
      ownerData.append("from_name",   "Me to Your Code Website");
      ownerData.append("replyto",     clientEmail);
      ownerData.append("name",        clientName);
      ownerData.append("email",       clientEmail);
      ownerData.append("phone",       clientPhone);
      ownerData.append("budget",      clientBudget);
      ownerData.append("message",     clientMsg);

      const ownerRes  = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: ownerData,
      });
      const ownerJson = await ownerRes.json();

      // ────────────────────────────────────────────────
      // CALL 2 — EmailJS → Clean thank-you TO CLIENT
      // ────────────────────────────────────────────────
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email:     clientEmail,
          client_name:  clientName,
          your_phone:   "+91 98765 43210",   // ← your real phone
          your_website: "yourwebsite.com",    // ← your real URL
        },
        EMAILJS_PUBLIC_KEY
      );

      // ────────────────────────────────────────────────
      // Show result
      // ────────────────────────────────────────────────
      if (ownerJson.success) {
        setStatus({
          msg: "✅ Message sent! Check your email for confirmation.",
          type: "success",
        });
        formRef.current.reset();
      } else {
        setStatus({
          msg: "❌ Something went wrong. Please try WhatsApp.",
          type: "error",
        });
      }

    } catch (err) {
      console.error("Form error:", err);
      setStatus({
        msg: "❌ Network error. Please try WhatsApp.",
        type: "error",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid reveal" ref={gridRef}>

        {/* ── Left — Contact Info ────────────────── */}
        <div className="section-intro">
          <span className="badge">Contact</span>
          <h2>
            Let's Discuss Your <span className="accent">Project</span>
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Fill the form and I'll get back to you within 24 hours.
            Or reach me directly below.
          </p>
          <ul className="contact-info">
            <li>
              <i className="fa-solid fa-phone" />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope" />
              <span>duraiprakash08@gmail.com</span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot" />
              <span>Your City, India</span>
            </li>
          </ul>
        </div>

        {/* ── Right — Form ──────────────────────── */}
        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>

          {/* Honeypot spam protection */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
          />

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
            />
            <input
              type="text"
              name="budget"
              placeholder="Budget (e.g. ₹10,000)"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            required
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={sending}
          >
            {sending ? (
              <>
                <i className="fa-solid fa-spinner fa-spin" /> Sending…
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane" /> Send Message
              </>
            )}
          </button>

          {status.msg && (
            <p className={`form-status ${status.type}`} role="status">
              {status.msg}
            </p>
          )}

        </form>
      </div>
    </section>
  );
}