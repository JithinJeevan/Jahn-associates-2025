import React from 'react';
import './Contact.css';
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
     <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-title" style={{color: "#002244"}}>Contact Us</h1>

        <div className="contact-section">
          <p>
            📞 Phone 1:{" "}
            <a href="tel:+917012828726" className="contact-link">
              +91 7012828726
            </a>
          </p>
          <p>
            📞 Phone 2:{" "}
            <a href="tel:+919986950721
" className="contact-link">
              +91 9986950721

            </a>
          </p>
        </div>

        <div className="contact-section">
          <p>
            📧 Email:{" "}
            <a href="mailto:jahnassociates19@gmail.com" className="contact-link">
              jahnassociates19@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-section">
          <a
            href="https://wa.me/917012828726"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp className="whatsapp-icon" />
            WhatsApp 1: +91 7012828726
          </a>

          <a
            href="https://wa.me/919986950721
"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp className="whatsapp-icon" />
            WhatsApp 2: +91 9986950721

          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;