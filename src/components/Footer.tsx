import eplerSvg from '../assets/epler.svg';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3 className="contact-title heading-rule">Kontakt oss</h3>
          <ul className="contact-list">
            <li>Telefon: <a href="tel:+4740222210">+47 40 22 22 10</a></li>
            <li>E-post: <a href="mailto:post@epleblomsten.no">post@epleblomsten.no</a></li>
          </ul>
        </div>
        <img src={eplerSvg} alt="" className="footer-logo" />
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sauar Gard</span>
        <a href="https://epleblomsten.no" target="_blank" rel="noopener noreferrer">epleblomsten.no</a>
      </div>
    </footer>
  );
}
