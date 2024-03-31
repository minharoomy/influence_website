import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
        <h3>ABOUT US</h3>
        <h2> Highlights of Our Journey</h2>
        <p>We offer tools designed to grow with your brand and support your influencer marketing strategy 
            every step of the way.</p>
        <p>
        Your clients want results, and we can help you deliver. 
        Access helpful tools to explore new influencer profiles and improve ROI.
        </p>
        <p>Boost sales by creating content featuring real people using your products in exciting and inspiring ways.</p>
        <p>The best thing about us is our people. Our talented team of experts are continually innovating our platform to help businesses work smarter and more efficiently.</p>
        </div>
    </div>
  )
}

export default About
