import carsImage from '../../assets/images/two_cars.png';
import './SatisfactionSection.css'
function SatisfactionSection() {
  return (
    <section className="satisfaction-container">
      <div className="in-container">
      <img src={carsImage} alt="mistway limited" />
        <div className="details">
            <h2>Your satisfaction is our <span>main aim</span></h2>
            <p>At Mistway Limited delivering the best experience possible. Our team is dedicated to ensuring that every step of your journey with us exceeds expectations. Whether you're booking your first car rental or are a regular customer, we're here to make your experience smooth and hassle-free. We listen to your needs, provide exceptional service, and go above and beyond to make sure you're satisfied every time.
                Your comfort, convenience, and satisfaction are at the heart of everything we do. Trust us to be the reliable choice you can count on, time and time again.</p>
        </div>
      </div>
    </section>
  )
}

export default SatisfactionSection