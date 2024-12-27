import { FaWhatsapp } from 'react-icons/fa'
import './CarCollection.css'
import { PiSeat } from 'react-icons/pi'
import fordRanger from '../../assets/images/fordRanger.png'

function CarCollection({image,name,type,seaters}) {
  const whatAppText = `*hello I am enquiring about* %0A
                        car: ${name} %0A
                        type: ${type} %0A
                        _comming from the website_`;
  return (
    <div className='carCollectionInd'>
      <img src={`${image}`} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <p>{type}</p>
        <span><PiSeat/> {seaters}</span>
        <a href={`https://wa.me/+254721731678?text=${encodeURIComponent(whatAppText)}`}> <FaWhatsapp/> Book now</a>
      </div>
      
    </div>
  )
}

export default CarCollection