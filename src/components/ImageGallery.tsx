import { ImageWithFallback } from "./figma/ImageWithFallback";
import Gardsbilde from '../assets/Gardsbilde.jpg'
import Eplehagen from '../assets/Eplehagen.png'
import Flasker from '../assets/Flasker.jpg'
import Gardstunet from '../assets/Gårdstunet.png'

export function ImageGallery() {
  const images = [
    {
      src: Flasker,
      alt: "Sauar Gard juice bottles"
    },
    {
      src: Eplehagen,
      alt: "Sauar Gard farm and apple orchard"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white flex items-center justify-center">
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}