import { FaWhatsapp } from 'react-icons/fa'
import './CarCollection.css'
import { PiSeat } from 'react-icons/pi'

function CarCollection() {
  return (
    <div className='carCollectionInd'>
      <div className="details">
        <h2>Nissan X-Trail</h2>
        <p>sedan</p>
        <span><PiSeat/> 4</span>
        <a href=""> <FaWhatsapp/> Book now</a>
      </div>
      
    </div>
  )
}

export default CarCollection