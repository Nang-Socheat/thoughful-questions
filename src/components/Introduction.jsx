import React from 'react';
import { motion } from 'framer-motion';

function Introduction({ onContinue }) {
  return (
    <div className="content">
      <motion.div
        className="icon emoji-float"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        💌
      </motion.div>
      
      <motion.h1 
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hi there! 👋
      </motion.h1>
      
      <motion.p 
        className="main-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        I wanted to reach out in a way that feels comfortable and respectful. 
      </motion.p>
      
      <motion.p 
        className="main-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        There's no pressure here—just a simple question, and you're free to leave anytime.
      </motion.p>
      
      <motion.div 
        className="info-box"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <p className="info-text">⏱️ Takes about 30 seconds</p>
        <p className="info-text">🔒 Private and respectful</p>
        <p className="info-text">❌ No obligation whatsoever</p>
      </motion.div>
      
      <motion.button
        className="btn btn-primary"
        onClick={onContinue}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Let's Continue →
      </motion.button>
    </div>
  );
}

export default Introduction;
