import Flasker from '../assets/Flasker.jpg'
import Gardstunet from '../assets/Gardstunet.jpg'
import { ImageWithFallback } from "./figma/ImageWithFallback";
import './About.css';

export function About() {
  return (
    <>
      <section className="about">
        <div className="about-container">
          <div className="about-text">
            <h2 className="about-title heading-rule">Om Sauar Gard</h2>
            <div className="about-content">
              <p>
                På Sauar gard har vi presset eplemost og bærjuicer siden 2003. Sauar Gard er vårt eksklusive varemerke som har kvalitet og smak som matcher kresne restaurant-ganer.
              </p>
              <p>
                Det er firmaet Epleblomsten som er lokalisert her, og som står for produksjonen. Ønsker du mer informasjon om Epleblomsten?
              </p>
              <a className="text-link" href="https://epleblomsten.no" target="_blank" rel="noopener noreferrer">
                Klikk her <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="about-image">
            <ImageWithFallback
              src={Flasker}
              alt="Sauar Gard juice bottles"
              className="image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="photo-band">
        <ImageWithFallback
          src={Gardstunet}
          alt="Gårdstunet på Sauar Gard"
          className="photo-band-image"
          loading="lazy"
        />
      </div>
    </>
  );
}
