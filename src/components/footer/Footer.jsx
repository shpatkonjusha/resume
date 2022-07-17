import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SHPAT</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About ME</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/shpat.konjusha"><FaFacebookF/></a>
        <a href="https://www.instagram.com/shpatkonjusha"><BsInstagram/></a>
        <a href="https://twitter.com/ShpatKonjusha"><BsTwitter/></a>
      </div>
    </footer>
  )
}

export default Footer
