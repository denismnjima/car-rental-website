import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightUp,ChevronRight} from '../../assets/icons/Icons'
import './Hero.css'
import { useState } from 'react'

function Hero() {

  const [isModalActive,setIsModalActive] = useState(false);

  const toggleModal = () => {
    setIsModalActive(!isModalActive);
  }
  return (
    <main>
      <div className="hero-content">
        <h1>Offroad Adventure <br/> Awaits Rent Now.</h1>
        <p>Mistway offers Top-notch transportation and supply services designed to meet the unique needs of every client with efficiency and realibility.</p>

        <div className="hero-buttons">
          <Link to="https://wa.me/+254721731678">
            <button className="main-btn">
                <p>Get Started</p>
                <span><ChevronRight/></span>  
            </button>
          </Link>
          <Link to="/contact">
            <button className='sec-button'>
              <p>Contact Us</p>
              <span><ChevronRight/></span>  
            </button>
          </Link>
        </div>

      </div>


    </main>
  )
}

export default Hero