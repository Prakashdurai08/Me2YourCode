import { useEffect, useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
          <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
          <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
        </div>
        <p>&copy; {year} Me to Your Code. All Rights Reserved</p>
      </div>
    </footer>
  );
}
