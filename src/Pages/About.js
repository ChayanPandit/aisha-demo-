import React from 'react'
import './about.css'
import girly from '../images/girly.gif'
const About = () => {
  return (
        <div class="aboutall row align-items-center content">
          <div class="about-gif col-md-6 order-1 order-md-2">
              <img src={girly} class="logoabout img-fluid" alt=""/>
          </div>
          <div class="about-txt col-md-6 text-center order-1 order-md-2">
              <h1 className='heading'>About</h1>
              <p>Hi Everyone!</p>
              <p>This is Aisha, an anti-depressing website.</p>
              <p>In today's world mental problems </p>
              <p>like stress, depression and anxiety are neglected </p>
              <p>However due to the covid-19 pandemic such problems have grown</p>
              <p>Especially among students</p>
              <p>Our sole purpose is to help you deal with your problems</p>
              <p>Be it anxiety, depression or stress.</p>
              <p>Aisha a neurally enhanced bot to listen</p>
              <p>And understand your problems and help you overcome it.</p>
              <p>We also feature an S.O.S. emergency button</p>
              <p>Which gives you emergency helpline numbers</p>
              <p>Based on your current location.</p>
              <p>We also provide you with contact of therapists</p>
              <p>Near you.</p>
          </div>
        </div>
  )
}

export default About