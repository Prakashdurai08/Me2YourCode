import "./WhatsAppFloat.css";

const WHATSAPP_NUMBER = "917200960676"; // Replace with your number

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}
