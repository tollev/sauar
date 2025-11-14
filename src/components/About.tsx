import Eplehagen from '../assets/Eplehagen.png'
import Flasker from '../assets/Flasker.jpg'
import { ImageWithFallback } from "./figma/ImageWithFallback";
import './About.css';

export function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* First card with image on the right */}
        <div className="about-card">
          <div className="about-text">
            <h2 className="about-title">Om Sauar Gard</h2>
            <div className="about-content">
              <p>
                På Sauar gard har vi presset eplemost og bærjuicer siden 2003. Sauar Gard er vårt eksklusive varemerke som har kvalitet og smak som matcher kresne restaurant-ganer.<br /><br />Det er firmaet Epleblomsten som er lokalisert her, og som står for produksjonen. Ønsker du mer informasjon om Epleblomsten? <br/> <a href="https://epleblomsten.no" target="_blank" rel="noopener noreferrer"><u>Klikk her</u></a>
              </p>
            </div>
          </div>
          <div className="about-image">
            <ImageWithFallback
              src={Flasker}
              alt="Sauar Gard juice bottles"
              className="image"
            />
          </div>
        </div>
        
        {/* Second card with image on the left */}
        <div className="about-card about-card-reverse">
          <div className="about-image">
            <ImageWithFallback
              src={Eplehagen}
              alt="Sauar Gard farm and apple orchard"
              className="image"
            />
          </div>
          <div className="about-text">
            <h3 className="contact-title">Kontakt oss</h3>
            <ul className="contact-list">
              <li>Telefon: <a href="tel:+4740222210">+47 40 22 22 10</a></li>
              <li>E-post: <a href="mailto:post@epleblomsten.no">post@epleblomsten.no</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}