import { ArrowRightDown, ArrowRightUp } from "../../assets/icons/Icons"
import { Link } from "react-router-dom";
import { BiCake } from "react-icons/bi";
import './ServicesCard.css';
function ServicesCard() {
  return (
    <div className="service-card">
        <div className="overlay"></div>
        <div className="content">
            <h2><BiCake/></h2>

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