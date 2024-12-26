import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightUp } from '../../assets/icons/Icons'
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
        <h1>Top-notch transportation and supply services</h1>
        <p>Designed to meet the unique needs of every client wth efficiency and realibility.</p>

        <div className="hero-buttons">
          <Link to="https://wa.me/+254721731678">
            <button className="main-btn">WhatsApp</button>
          </Link>
          <Link to="/contact">
            <button className='sec-button'>Contact us</button>
          </Link>
          <Link>
            <ArrowRightUp/>
          </Link>
        </div>

        <div className="book-form">
          <div>
            <h2>Rent a car!</h2>
          </div>
          <div>
            <label>Full name</label>
            <input type="text" value=''  placeholder='enter name' />
          </div>
          <div>
            <label>Mobie No.</label>
            <input type="text" value=''  placeholder='enter phone'/>
          </div>

          <div>
            <label>Pick up Location.</label>
            <input type="text" value=''  />
          </div>
          <div>
            <Link>
            <button> Send</button>
            </Link>
          </div>
        </div>
      </div>


    </main>
  )
}

export default Hero