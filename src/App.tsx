import Gardsbilde from './assets/Gardsbilde.jpg'
import Eplehagen from './assets/Eplehagen.png'
import Flasker from './assets/Flasker.jpg'
import Gardstunet from './assets/Gårdstunet.png'

function App() {
 // #FCF5E2
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FCF5E2' }}>
      <div className="md:pt-[8rem] pt-[4rem]">
        <div className="w-full md:pb-[4rem] pb-[2rem]">
          <h1 className="md:text-[5.5vw] text-[8vw] font-bold text-green-800 drop-shadow-lg leading-none text-center">
            Velkommen til Sauar Gard
          </h1>
            <p className="text-green-700 md:text-[1.5rem] text-base mb-4 leading-[1.5] md:px-[20vw] px-8 text-center">
              På Sauar gard har vi presset eplemost og bærjuicer siden 2003. Det er firmaet Epleblomsten som er lokalisert her, og som står for produksjonen. Sauar Gard er vårt eksklusive varemerke som har kvalitet og smak som matcher kresne restaurant-ganer.
            </p>
        </div>
        
        <div className="flex md:flex-row flex-col items-start">
          <div className="md:w-1/2 w-full md:h-[50vh] h-auto md:flex md:flex-col md:justify-center md:items-center md:px-16 p-8 text-center" style={{ backgroundColor: '#FCF5E2' }}>
            <p className="text-green-700 md:text-[1.5rem] text-base leading-[1.5] md:max-w-md">
              <strong>Forbrukerkontakt for Sauar Gard:</strong>
              <br/>
                 -  Epleblomsten as, tlf. <a href="tel:40222210" className="hover:underline">40222210</a>
                <br/>
                -  E-post: <a href="mailto:post@epleblomsten.no" className="hover:underline">post@epleblomsten.no</a>
            </p>
          </div>
          
          <div className="md:w-[55%] w-full">
            <img 
              src={Eplehagen} 
              className="w-full md:h-[50vh] h-[40vh] object-cover" 
              alt="Eplehagen" 
            />
          </div>
        </div>
        
        {/* Flasker - Left side, double height on desktop, stacked on mobile */}
        <div className="flex md:flex-row flex-col items-start">
          <div className="md:w-[55%] w-full md:h-[100vh] h-[50vh] flex items-center justify-center" style={{ backgroundColor: '#FCF5E2' }}>
            <img 
              src={Flasker} 
              className="max-w-[100%] max-h-[100%] object-contain" 
              alt="Flasker" 
            />
          </div>
          
          {/* Right side with Gårdstunet on top and Gardsbilde on bottom */}
          <div className="md:w-1/2 w-full md:h-[100vh] h-auto flex flex-col">
            <div className="md:h-1/2 h-[40vh]">
              <img 
                src={Gardstunet} 
                className="w-full h-full object-cover" 
                alt="Gårdstunet" 
              />
            </div>
            <div className="md:h-1/2 h-[40vh]">
              <img 
                src={Gardsbilde} 
                className="w-full h-full object-cover" 
                alt="Gardsbilde" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
