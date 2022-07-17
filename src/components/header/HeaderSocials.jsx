import React from 'react'
import linkedin from '../../assets/linkedin_icon.png'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/shpat-konjusha" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/shpatkonjusha" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials
