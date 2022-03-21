import React from 'react';
import '../styles/Contact.css';

const Contact = (props) => {


  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contact-content">
          <h1> Contact Us</h1>
            <h3>Book Your Trip Now!</h3>
            <form id="contact-info" method="POST">
              <label htmlFor="name"> Full Name:</label>
              <input name="name" placeholder="Enter full name..." type="text"/>
              <label htmlFor="email"> Email:</label>
              <input name="email" placeholder="Enter email address..." type="email"/>
              <div className="contact-dropdown">
                <label htmlfor="adult">Adults:</label>
                <select id="adult" name="adult">
                  <option value="Orange">0</option>
                  <option value="Orange">1</option>
                  <option value="Orange">2</option>
                  <option value="Orange">3</option>
                  <option value="Orange">4 or more</option>
                </select>
                <label htmlfor="children">Children:</label>
                <select id="children" name="children">
                  <option value="Orange">0</option>
                  <option value="Orange">1</option>
                  <option value="Orange">2</option>
                  <option value="Orange">3</option>
                  <option value="Orange">4 or more</option>
                </select>
              </div>
              <label htmlFor="message"> Message: </label>
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