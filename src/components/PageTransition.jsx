import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./PageTransition.css";

export default function PageTransition({ children }) {
  const location = useLocation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const t = setTimeout(() => setShow(true), 50);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className={`page-transition ${show ? "visible" : ""}`}>
      {children}
    </div>
  );
}