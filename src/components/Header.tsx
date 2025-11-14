import './Header.css';
import eplerSvg from '../assets/epler.svg';

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <img src={eplerSvg} alt="Epler" className="header-logo" />
          <h1 className="header-title">Sauar Gard</h1>
        </div>
      </div>
    </header>
  );
}
