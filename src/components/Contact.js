import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Subject: ${formData.subject}
      
      Message:
      ${formData.message}
    `;

    const mailtoLink = `mailto:tamannayadav741@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Social media links with custom colors
  const socialLinks = [
    { 
      icon: "fab fa-linkedin", 
      link: "linkedin.com/in/tamannayadav01",
      color: "#0077B5", // LinkedIn blue
      hoverColor: "#0066A0"
    },
    
    { 
      icon: "fas fa-envelope", 
      link: "mailto:tamannayadav741@gmail.com",
      color: "#D44638", // Gmail red
      hoverColor: "#C23827"
    }
  ];

  return (
    <>
      <section id="contact">
        <div className="section-container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
          </motion.h2>
          
          <div className="contact-wrapper">
            {/* Left Side - Contact Info */}
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="contact-details">
                {[
                  { 
                    icon: "fas fa-envelope", 
                    title: "Email", 
                    content: "tamannayadav741@gmail.com" 
                  },
                  { 
                    icon: "fas fa-phone", 
                    title: "Phone", 
                    content: "+91-8295545738" 
                  },
                  { 
                    icon: "fas fa-map-marker-alt", 
                    title: "Location", 
                    content: "Gurgaon, Haryana" 
                  }
                ].map((item, index) => (
                  <div className="info-item" key={index}>
                    <i className={item.icon}></i>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="connect-section">
                <h3>Connect With Me</h3>
                <div className="connect-links">
                  {socialLinks.map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{
                        '--social-color': social.color,
                        '--social-hover-color': social.hoverColor
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        // rotate: 360,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <i className={social.icon}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit}>
                {[
                  { 
                    name: "name", 
                    type: "text", 
                    placeholder: "Enter your name", 
                    label: "Name" 
                  },
                  { 
                    name: "email", 
                    type: "email", 
                    placeholder: "Enter your email", 
                    label: "Email" 
                  },
                  { 
                    name: "subject", 
                    type: "text", 
                    placeholder: "Enter subject", 
                    label: "Subject" 
                  }
                ].map((field, index) => (
                  <div className="form-group" key={index}>
                    <label>{field.label}</label>
                    <motion.input 
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      whileFocus={{ 
                        scale: 1.02,
                        borderColor: '#64ffda',
                        transition: { duration: 0.3 }
                      }}
                    />
                  </div>
                ))}
                
                <div className="form-group">
                  <label>Message</label>
                  <motion.textarea 
                    rows="5" 
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    whileFocus={{ 
                      scale: 1.02,
                      borderColor: '#64ffda',
                      transition: { duration: 0.3 }
                    }}
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  className="send-button"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#64ffda',
                    color: '#000',
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message <i className="fas fa-paper-plane"></i>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Copyright Section - Moved outside of contact section */}
      <div className="global-copyright-section">
        <p>
          © {new Date().getFullYear()} Tamanna - All Rights Reserved.
          {/* Designed and Developed with ❤️ by Tamanna. */}
        </p>
      </div>
    </>
  );
}

export default Contact;