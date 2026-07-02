import "./WhatsAppFloat.css";

const WHATSAPP_NUMBER = "917200960676";
const WHATSAPP_MSG = encodeURIComponent("Hi! I visited your website and I'd like to discuss a project.");

export default function WhatsAppFloat() {
  return (
    
     <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
      <span className="whatsapp-tooltip">Chat with me</span>
    </a>
  );
}