import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program_icon_1} alt="" />
                <h3>FOR BRANDS</h3>
                <h3>Save Time. Get Results.</h3>
                <p>We offer tools designed to grow with your brand and support your influencer marketing strategy every step of the way.</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program_icon_2} alt="" />
                <h3>FOR AGENCIES</h3>
                <h3>Robust Tools to Boost Client Reach.</h3>
                <p>Your clients want results, and we can help you deliver. Access helpful tools to 
                    explore new influencer profiles and improve ROI.</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program_icon_3} alt="" />
                <h3>FOR E-COMMERCE</h3>
                <h3>Track Sales and ROI.</h3>
                <p>Boost sales by creating content featuring real people using your products in exciting and inspiring ways.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
