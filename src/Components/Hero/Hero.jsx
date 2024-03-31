import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Empowering Connections: Your Ultimate Influencer Marketing Hub</h1>
        <p>Maximize your influencer relationship management strategy with solid recruitment, key data, 
            and seamless communication – all in one dynamic platform.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>

      </div>
    </div>
  )
}

export default Hero
