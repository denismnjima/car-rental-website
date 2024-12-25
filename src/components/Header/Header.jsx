import { Link } from "react-router-dom"
import LogoImg from '../../assets/images/logo.png'
import { ArrowRightUp } from "../../assets/icons/Icons"
import './Header.css'
import MobileHeader from "../Mobileheader/MobileHeader"
import { useState } from "react"
function Header() {
  const [isMenuOpen,setIsMenuOpen] = useState(false)

  function toggleIsOpen(){
    isMenuOpen?setIsMenuOpen(false): setIsMenuOpen(true)
  }
  return (
    <header>
      <div className="logo">
        <Link to="./">
         <img src={LogoImg} alt="Mistway Limited Logo" />
        </Link>
        </div>

        <nav className="header-nav">
          <ul className="header-menu">
            <li className="haeder-menu-item">
              <p>Home</p>
               <ArrowRightUp/>
            </li>
            <li className="haeder-menu-item">
              <p>About us</p>
            </li>

            <li className="haeder-menu-item">
              <p>Services</p>
            </li>

            <li className="haeder-menu-item">
              <p>Contact us</p>
               <ArrowRightUp/>
            </li>
          </ul>
        </nav>

        <div className="header-main-buttons">
          <Link>
          <button className="header-button">Book a Rental</button>
          </Link>
        </div>
        <div className="mobile-ham">
          <div className={isMenuOpen?"ham-container opened":"ham-container"} onClick={toggleIsOpen}>
            <div className="ham-line"></div>
            <div className="ham-line"></div>
            <div className="ham-line"></div>
          </div>

        </div>

      {
        isMenuOpen&& (
        <div className="mobile-header-container">
          <MobileHeader/>
        </div>
        )
      }

    </header>
  )
}

export default Header