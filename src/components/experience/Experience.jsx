import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiJava} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {DiBootstrap} from 'react-icons/di'
import {SiPhp} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiJava} from 'react-icons/si'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
                <AiFillHtml5 className='experience_details-icon'/>
                <div>
                <h4>HTML</h4>
                <small>Experienced</small>
                </div>              
              </article>

              <article className='experience_details'>
                <DiCss3 className='experience_details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small>Experienced</small>
                </div>                
              </article>

              <article className='experience_details'>
                <DiJavascript className='experience_details-icon'/>
                <div><h4>JavaScript</h4>
                <small>Experienced</small></div>
              </article>

              <article className='experience_details'>
                <DiBootstrap className='experience_details-icon'/>
                <div><h4>Bootstrap</h4>
                <small>Experienced</small></div>
              </article>

            </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
            <div className='experience_content'>
              <article className='experience_details'>
                <SiPhp className='experience_details-icon'/>
                <div>
                  <h4>PHP</h4>
                  <small>Experienced</small>
                  </div>
              </article>

              <article className='experience_details'>
                <SiMysql className='experience_details-icon'/>
                <div><h4>MySQL</h4>
                <small>Basic</small></div>
              </article>

              <article className='experience_details'>
                <DiJava className='experience_details-icon'/>
                <div>
                  <h4>JAVA</h4>
                  <small>Experienced</small>
                </div>
              </article>
              
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
