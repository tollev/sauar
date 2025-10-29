import Gardsbilde from './assets/Gardsbilde.jpg'
import Eplehagen from './assets/Eplehagen.png'
import Flasker from './assets/Flasker.jpg'
import Gardstunet from './assets/Gårdstunet.png'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCF5E2' }}>
      <div className="md:pt-[6rem] pt-[4rem]">
        <div className="w-full md:pb-[2rem] pb-[2rem]">
          {/* Header */}
          <h1 className="md:text-[1.5rem] text-[3.5rem] font-bold text-green-800 drop-shadow-lg leading-none text-center">
            Velkommen til Sauar Gard
          </h1>

          {/* Intro Paragraph */}
          <p className="text-green-700 md:text-[2.3rem] text-base mb- leading-relaxed md:px-[18vw] md:py-8 px-8 py-4 text-center">
            På Sauar gard har vi presset eplemost og bærjuicer siden 2003. Det er firmaet Epleblomsten som er lokalisert her, 
            og som står for produksjonen. Sauar Gard er vårt eksklusive varemerke som har kvalitet og smak som matcher 
            kresne restaurant-ganer.
          </p>
        </div>
        
        {/* Contact Section */}
        <div className="flex md:flex-row flex-col items-start">
          <div className="md:w-1/2 w-full md:h-[35vh] h-auto md:flex md:flex-col md:justify-center md:items-center md:px-16 md:py-12 p-8 text-center" style={{ backgroundColor: '#FCF5E2' }}>
            <p className="text-green-700 md:text-[2.3rem] text-base leading-relaxed md:max-w-md md:py-6 py-3">
              <strong>Forbrukerkontakt for Sauar Gard:</strong>
              <br />
              - Epleblomsten as, tlf. <a href="tel:40222210" className="hover:underline">40222210</a><br />
              - E-post: <a href="mailto:post@epleblomsten.no" className="hover:underline">post@epleblomsten.no</a>
            </p>
          </div>
          
          <div className="md:w-[55%] w-full flex justify-center items-center" style={{ backgroundColor: '#FCF5E2' }}>
            <img 
              src={Eplehagen} 
              className="h-[35vh]" 
              alt="Eplehagen" 
            />
          </div>
        </div>

        {/* Flasker + Gardstunet + Gardsbilde Section */}
        <div className="flex md:flex-row flex-col items-start">
          <div className="md:w-[55%] w-full md:h-[70vh] h-[50vh] flex items-center justify-center" style={{ backgroundColor: '#FCF5E2' }}>
            <img 
              src={Flasker} 
              className="h-[60vh]" 
              alt="Flasker" 
            />
          </div>

          <div className="md:w-1/2 w-full md:h-[70vh] h-auto flex flex-col" style={{ backgroundColor: '#FCF5E2' }}>
            <div className="md:h-1/2 h-[40vh] flex justify-center items-center">
              <img src={Gardstunet} className="h-[30vh]" alt="Gårdstunet" />
            </div>
            <div className="md:h-1/2 h-[40vh] flex justify-center items-center">
              <img src={Gardsbilde} className="h-[30vh]" alt="Gardsbilde" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
