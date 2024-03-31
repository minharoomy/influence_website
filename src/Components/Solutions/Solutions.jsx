import React from 'react'
import './Solutions.css'
import solutions_img from '../../assets/solutions-img.png'

const Solutions = () => {
  return (
    <div className='solutions'>
      <div className="solutions-left">
        <h3>ABOUT US</h3>
        <h2> One Platform, Numerous Tools.</h2>
        <p>Discover an end-to-end influencer marketing solution that helps you recruit talent, build your brand community, and analyze the ROI of your efforts – all within one easy-to-use platform.
          Start Your Trial.</p>
        <p>Discover the secret to cost-effective and measurable influencer-led campaigns with a customizable hub for research, organization, and reporting.</p>
        <p>Boost sales by creating content featuring real people using your products in exciting and inspiring ways.</p>
        <p>The best thing about us is our people. Our talented team of experts are continually innovating our platform to help businesses work smarter and more efficiently.</p>
      </div>
      <div className="solutions-right">
            <img src={solutions_img} alt="" className='solutions-img' />
        </div>
      
    </div>
  )
}

export default Solutions
