import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import insta_icon from '../../assets/insta-icon.png'
import facebook_icon from '../../assets/facebook-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3e9bd5a3-127a-4e34-8d7d-5f921e8c19b1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum d voluptatum adipisci vel alias corporis accusamus quos odit animi, 
            beatae tempore. Totam, sapiente consequuntur.</p>
            <ul>
                <li> <img src={mail_icon} alt="" />influencer.club@gmail.com</li>
                <li> <img src={insta_icon} alt="" />Follow us on Instagram</li>
                <li> <img src={facebook_icon} alt="" />Follow us on facebook </li>
            </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type = 'submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
