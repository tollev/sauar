import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "../assets/Eplehagen.jpg"
import './Hero.css';

export function Hero() {
  return (
    <div className="hero">
      <ImageWithFallback
        src={heroImage}
        alt="Apple orchard at Sauar Gard"
        className="hero-image"
        fetchPriority="high"
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
