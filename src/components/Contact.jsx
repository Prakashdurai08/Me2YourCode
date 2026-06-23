import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import useReveal from "../hooks/useReveal";
import "./Contact.css";

// ═══════════════════════════════════════════════════
// ✅ PASTE YOUR KEYS HERE — only 4 values to change
// ═══════════════════════════════════════════════════
const WEB3FORMS_KEY       = "635fa833-b858-420f-82d0-44ef55f56d72";
const EMAILJS_SERVICE_ID  = "service_rfqtxq8";
const EMAILJS_TEMPLATE_ID = "template_8nbqtvh";
const EMAILJS_PUBLIC_KEY  = "eIQMIpO5LGVA4iaZp";
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
          your_phone:   "+91 7200960676",   // ← your real phone
          your_website: "yourwebsite.com",    // ← your real URL
        },
        EMAILJS_PUBLIC_KEY
      );

      // ────────────────────────────────────────────────
      // Show result
      // ────────────────────────────────────────────────
      if (ownerJson.success) {
        setStatus({
          msg: "Message sent! Check your email for confirmation.",
          type: "success",
        });
        formRef.current.reset();
      } else {
        setStatus({
          msg: "Something went wrong. Please try WhatsApp.",
          type: "error",
        });
      }

    } catch (err) {
      console.error("Form error:", err);
      setStatus({
        msg: "Network error. Please try WhatsApp.",
        type: "error",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid reveal" ref={gridRef}>
        <span className="contact-blob" aria-hidden="true"></span>

        {/* ── Left — Contact Info ────────────────── */}
        <div className="section-intro">
          <span className="badge">Contact</span>
          <h2>
            Let's Discuss Your <span className="accent">Project</span>
          </h2>
          <p className="contact-lead">
            Fill the form and I'll get back to you within 24 hours.
            Or reach me directly below.
          </p>

          <div className="availability-chip">
            <span className="status-dot"></span> Usually responds within a few hours
          </div>

          <ul className="contact-info">
            <li>
              <a href="tel:+919876543210" className="contact-info-link">
                <span className="contact-icon"><i className="fa-solid fa-phone" /></span>
                <span>+91 7200960676</span>
              </a>
            </li>
            <li>
              <a href="mailto:metoyourcode@gmail.com" className="contact-info-link">
                <span className="contact-icon"><i className="fa-solid fa-envelope" /></span>
                <span>metoyourcode@gmail.com</span>
              </a>
            </li>
            <li>
              <span className="contact-info-link static">
                <span className="contact-icon"><i className="fa-solid fa-location-dot" /></span>
                <span>Chennai, India</span>
              </span>
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
            <div className="form-field">
              <input type="text" name="name" placeholder=" " required />
              <label>Full name</label>
              <i className="fa-solid fa-user field-icon" aria-hidden="true" />
            </div>
            <div className="form-field">
              <input type="email" name="email" placeholder=" " required />
              <label>Your email</label>
              <i className="fa-solid fa-envelope field-icon" aria-hidden="true" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <input type="tel" name="phone" placeholder=" " />
              <label>Phone number</label>
              <i className="fa-solid fa-phone field-icon" aria-hidden="true" />
            </div>
            <div className="form-field">
              <input type="text" name="budget" placeholder=" " />
              <label>Budget (e.g. ₹10,000)</label>
              <i className="fa-solid fa-indian-rupee-sign field-icon" aria-hidden="true" />
            </div>
          </div>

          <div className="form-field textarea-field">
            <textarea name="message" rows="5" placeholder=" " required />
            <label>Tell me about your project...</label>
            <i className="fa-solid fa-comment-dots field-icon" aria-hidden="true" />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-shine"
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
              <i className={`fa-solid ${status.type === "success" ? "fa-circle-check" : "fa-circle-exclamation"}`} />
              {status.msg}
            </p>
          )}

        </form>
      </div>
    </section>
  );
}