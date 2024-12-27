import React from 'react'
import { Link } from 'react-router-dom'
import './MobileHeader.css'

function MobileHeader() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="" >About us</Link>
            </li>
            <li>
                <Link to="/contact" >Contact us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default MobileHeader