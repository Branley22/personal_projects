import React from 'react';
import VacationLeft from '../assets/vacationleft.png';
import '../styles/Contact.css';

const Contact = (props) => {


  return (
    <div className="contact">
      <div className="left-side" style={{ backgroundImage: `url(${VacationLeft})` }}>
        nejnevw
      </div>
      <div className="right-side">
       <h1> Contact Us</h1>
       <form id="contact-info" method="POST">
        <label htmlFor="name"> Full Name</label>
        <input name="name" placeholder="Enter full name..." type="text"/>
        <label htmlFor="email"> Email</label>
        <input name="email" placeholder="Enter email..." type="email"/>
        <label htmlFor="message"> Message </label>
        <textarea 
          rows="6" 
          placeholder="Enter message..." 
          name="message"  
          required
        ></textarea>
        <button type="submit">Send Message</button>
       </form>
      </div>
    </div>
  )
}

export default Contact;