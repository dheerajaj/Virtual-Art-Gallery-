import React from 'react'
import Header from './Header'
import '../Styles/Contact.css'
import Footer from './Footer'

function Contact() {
  return (
    <>
    <Header/>
    <br />
    <center><h2 style={{textShadow:'0px 0px 15px #000'}}>Contact us</h2></center>
<br />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8568.1
    70124668355!2d77.21348986009808!3d28.58918045959352!2m3!1f0!2f0!3f0!3m2!1i1
    024!2i768!4f13.1!3m3!1m2!1s0x390ce2f1dfce1305%3A0x78958f3d0954897e!2sVisua
    l%20Arts%20Gallery!5e1!3m2!1sen!2sin!4v1686984128080!5m2!1sen!2sin" 
    width="100%" 
    height="450" 
    allowFullScreen="" 
    loading="lazy" 
    title='s'
    referrerPolicy="no-referrer-when-downgrade"></iframe>   
    <br />

    <div class="form-main">
      <div class="main-wrapper">
        <h2 class="form-head">Request a call back</h2>
        <form class="form-wrapper" action='https://formspree.io/f/xrgvnaoj' method='POST'>
          <div class="form-card">
            <input
              class="form-input"
              type="text"
              name="Name"
              required="required"
            />
            <label class="form-label" for="full_name">Full Name</label>
          </div>

          <div class="form-card">
            <input
              class="form-input"
              type="email"
              name="Email"
              required="required"
            />
            <label class="form-label" for="email">Email</label>
          </div>

          <div class="form-card">
            <input
              class="form-input"
              type="number"
              name="Phone_number"
              required="required"
            />
            <label class="form-label" for="phone_number">Phone number</label>
          </div>

          <div class="form-card">
            <textarea
              class="form-textarea"
              maxlength="420"
              rows="3"
              name="Message"
              required="required"
            ></textarea>
            <label class="form-textarea-label" for="phone_number"
              >Message</label>
          </div>
          <button className='btn btn-success btn-lg'>Submit</button>
        </form>
      </div>
    </div>

    <center>
        <h2>Address:</h2>
        <b> Platinum Tower, 401 Spaze, Badshahpur Sohna Road Highway, Sector 47, Gurugram, Haryana 122001</b>
        <br />
        <b>Email: <a href="mailto: abc@example.com"> kukaa904@gmail.com</a></b>
        <br />  
        <b>Mobile:<a href="tel:+91-99966-89916"> +91-99966-89916</a></b>
    </center>
    <br />
    <br />

    <Footer/>

    </>
  )
}

export default Contact