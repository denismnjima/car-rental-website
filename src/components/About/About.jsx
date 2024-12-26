import { Link } from "react-router-dom"
import { ArrowRightDown, Loop } from "../../assets/icons/Icons"
import image from '../../assets/images/people_vehicles.png';
import { Booking } from "../../assets/icons/Icons";
import './About.css';
function About() {
  return (
    <div className="segment">
        <div className="design">
            <img  src={image}/>

        </div>
        <div className="content">
            <div className="cont-heading">
                <p className="cont-heading--icon">*</p>
                <h3>About Us</h3>
            </div>

            <h2>Your trusted patner in reliable car rental</h2>
            <p>This is some rnadom text to be replaced with the actual about text.</p>

            <div className="icon-cards">
                <div className="card">
                    <div className="card-icon">
                        <Booking/>
                    </div>
                    <div className="card-details">
                        <h3>Easy Booking process</h3>
                        <p>We have optimized the booking process so that our clients can expirience the easisest and safest service.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-icon">
                        <Loop/>
                    </div>
                    <div className="card-details">
                        <h3>Convinient Pick-Up & Return Process</h3>
                        <p>We have optimized the booking process so that our clients can expirience the safest service.</p>
                    </div>
                </div>
            </div>

            <div className="buttons">
                <Link to="/contact"> 
                    <button className="sectional-button">Contact us</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default About