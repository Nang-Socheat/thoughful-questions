import React, { useState } from 'react';
import { motion } from 'framer-motion';

function NoResponse({ onSubmit }) {
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send form data to Formspree or your backend
    const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
    
    fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contact: contact || '(No contact info provided)',
        timestamp: new Date().toISOString()
      })
    }).catch(error => {
      console.error('Error sending form:', error);
    });

    onSubmit();
  };

  return (
    <div className="content">
      <motion.div
        className="icon emoji-float"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        ✨
      </motion.div>
      
      <motion.h2 
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Great! Here's my thought...
      </motion.h2>
      
      <motion.p 
        className="main-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        I'd love to get to know you better—maybe grab coffee, chat, or just see where things go.
      </motion.p>
      
      <motion.p 
        className="main-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        No expectations, no pressure. Just genuine interest in connecting.
      </motion.p>
      
      <motion.form 
        className="form-group"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <label htmlFor="contact" className="form-label">
          Share your contact if you're interested (completely optional)
        </label>
        <motion.input
          type="text"
          id="contact"
          className="form-input"
          placeholder="Instagram, phone number, email—whatever works for you"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          whileFocus={{ scale: 1.02 }}
        />
        
        <div className="contact-options">
          <p className="option-label">📱 Popular options:</p>
          <div className="option-chips">
            <span className="chip">Instagram</span>
            <span className="chip">Phone Number</span>
            <span className="chip">Snapchat</span>
            <span className="chip">Email</span>
          </div>
        </div>
        
        <p className="privacy-note">
          🔒 Your information stays private—only I can see this. You can also skip this and close the page if you prefer.
        </p>
        
        <motion.button
          type="submit"
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send My Info →
        </motion.button>
      </motion.form>
    </div>
  );
}

export default NoResponse;
