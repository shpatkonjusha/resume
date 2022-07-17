import React from 'react'
import './about.css'
import ME from '../../assets/me_about.jpeg'
import {FaAward} from 'react-icons/fa'
import {RiFileCodeFill} from 'react-icons/ri'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'> 
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3 years studying</small>
            </article>
            <article className='about_card'> 
            <RiFileCodeFill className='about_icon'/>
              <h5>Project</h5>
              <small>10+ completed</small>
            </article>
            
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus 
            porro voluptates non, accusantium iste architecto earum voluptatum harum 
            amet sapiente fugiat odit id temporibus. Sunt veniam quidem quos a numquam.
            </p>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
