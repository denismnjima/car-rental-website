import { ArrowRightDown, ArrowRightUp } from "../../assets/icons/Icons"
import { Link } from "react-router-dom";
import './ServicesCard.css';
function ServicesCard() {
  return (
    <div className="service-card">
        <div className="overlay"></div>
        <div className="content">
            <ArrowRightDown/>

            <h3>Car Rental With Driver</h3>
            <p>Enhance your rental exprience with this additional </p>
        </div>

        <Link>
            <ArrowRightUp/>
        </Link>

    </div>
  )
}

export default ServicesCard