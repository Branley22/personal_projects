import React from 'react';
import VacationLeft from '../assets/vacationleft.jpeg';
import '../styles/Contact.css';

const Contact = (props) => {


  return (
    <div className="contact-container">
      <div className="contact">
      <div className="right-side">
       <h1> Contact Us</h1>
       <h3>Book Your Trip Now!</h3>
       <form id="contact-info" method="POST">
        <label htmlFor="name"> Full Name</label>
        <input name="name" placeholder="Enter full name..." type="text"/>
        <label htmlFor="email"> Email</label>
        <input name="email" placeholder="Enter email address..." type="email"/>
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
    </div>
  )
}

export default Contact;