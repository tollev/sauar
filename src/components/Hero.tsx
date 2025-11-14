import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../assets/Epler.png"
import './Hero.css';

export function Hero() {
  return (
    <div className="hero">
      <ImageWithFallback
        src={heroImage}
        alt="Apple orchard at Sauar Gard"
        className="hero-image"
      />
      <div className="hero-overlay">
        <div className="hero-content">
          <h2 className="hero-title animate-fade-in">Velkommen til Sauar Gard</h2>
          <p className="hero-subtitle animate-fade-in-delayed">
            Håndpresset eplemost og bærjuicer <br/> siden 2003
          </p>
        </div>
      </div>
    </div>
  );
}