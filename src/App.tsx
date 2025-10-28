import Gardsbilde from './assets/Gardsbilde.jpg'
import Eplehagen from './assets/Eplehagen.png'
import Flasker from './assets/Flasker.jpg'
import Gardstunet from './assets/Gårdstunet.png'

function App() {
 // #FCF5E2
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4F4F4' }}>
      <div className="pt-[8rem]">
        <div className="w-full pb-[4rem]">
          <h1 className="text-[5.5vw] font-bold text-green-800 drop-shadow-lg leading-none text-center">
            Velkommen til Sauar Gard
          </h1>
            <p className="text-green-700 text-[1.5rem] mb-4 leading-[1.5] px-[20vw] text-center">
              På Sauar gard har vi presset eplemost og bærjuicer siden 2003. Det er firmaet Epleblomsten som er lokalisert her, og som står for produksjonen. Sauar Gard er vårt eksklusive varemerke som har kvalitet og smak som matcher kresne restaurant-ganer.
            </p>
        </div>
        
        <div className="flex items-start">
          <div className="w-1/2 h-[50vh] flex flex-col justify-center items-center px-16" style={{ backgroundColor: '#F4F4F4' }}>
            <p className="text-green-700 text-[1.5rem] leading-[1.5] max-w-md">
              <strong>Forbrukerkontakt for Sauar Gard:</strong>
              <br/>
                 -  Epleblomsten as, tlf. 40222210
                <br/>
                -  E-post: post@epleblomsten.no
            </p>
          </div>
          
          <div className="w-[55%]">
            <img 
              src={Eplehagen} 
              className="w-full h-[50vh] object-cover" 
              alt="Eplehagen" 
            />
          </div>
        </div>
        
        {/* Flasker - Left side, double height */}
        <div className="flex items-start">
          <div className="w-[55%] h-[100vh] flex items-center justify-center" style={{ backgroundColor: '#F4F4F4' }}>
            <img 
              src={Flasker} 
              className="max-w-[100%] max-h-[100%] object-contain" 
              alt="Flasker" 
            />
          </div>
          
          {/* Right side with Gårdstunet on top and Gardsbilde on bottom */}
          <div className="w-1/2 h-[100vh] flex flex-col">
            <div className="h-1/2">
              <img 
                src={Gardstunet} 
                className="w-full h-full object-cover" 
                alt="Gårdstunet" 
              />
            </div>
            <div className="h-1/2">
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
