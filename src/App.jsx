import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [city, setCity] = useState([]) 

  async function temp() {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=f59d98999cecfcf638aa71d6f580ea19`)
    setData(res.data)
    console.log(data)

  }
  

  return (
    <>
  
      <div className="main">

        <img src="./pht/Group 165 (1).svg" alt="" className='dd' />


        <div className='search'>
          <input type="text" className='in' placeholder='Search Location...' onChange={(e) => {setCity(e.target.value)}}/>
          <button className='s'><img src="./pht/fa_search.svg" alt="" className='s'  onClick={temp}/></button>
        </div>

        <div className="maininfo">
          <h1 className='gradusi'>{data?.main?.temp} °</h1>
          <h1 className='city'>{data?.name}</h1>
          <img src="./pht/outline.svg" alt="" className='surati' />
        </div>


        <div className="blur">

          <p className='detail'>Weather Details...</p>
          <p className='ragac'>thunderstorm with light drizzle</p>
          <div className="raxdeba">

          <div className="tempdiv b">
            <p className='chamonatvali'>Temp max</p>
            <p className='info'>{data?.main?.temp_max}°</p>
            <img src="./pht/Vector.svg" alt=""  className='vector'/>
          </div>

          <div className="tempdiv b">
            <p className='chamonatvali'>Temp min</p>
            <p className='info'>{data?.main?.temp_min}°</p>
            <img src="./pht/Vectorr.svg" alt=""  className='vector'/>
          </div>
        
          <div className="tempdiv b">
            <p className='chamonatvali'>Humadity</p>
            <p className='info ze'>{data?.main?.humidity}%</p>
            <img src="./pht/Vectorrr.svg" alt=""  className='vector'/>
          </div>

          <div className="tempdiv b">
            <p className='chamonatvali'>Cloudy</p>
            <p className='info zd'>{data?.clouds?.all}%</p>
            <img src="./pht/vectorrrr.svg" alt=""  className='vector'/>
          </div>
          <div className="tempdiv b">
            <p className='chamonatvali'>Wind</p>
            <p className='info za'>{data?.wind?.speed}km/h</p>
            <img src="./pht/vectorrrrr.svg" alt=""  className='vector'/>
          </div>
          <div className="xazi"></div>
          </div>
        </div>



      </div>
    </>
  )
}

export default App
