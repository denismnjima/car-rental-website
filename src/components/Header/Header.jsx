import { Link } from "react-router-dom"
import LogoImg from '../../assets/images/logo.png'
import { ArrowRightUp } from "../../assets/icons/Icons"
import './Header.css'
function Header() {
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

    </header>
  )
}

export default Header