import React from 'react';
import { motion } from 'framer-motion';

function ThankYou() {
  return (
    <div className="content">
      <motion.div
        className="icon"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        💖
      </motion.div>
      
      <motion.h2 
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Thank you! 🎉
      </motion.h2>
      
      <motion.p 
        className="main-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        I really appreciate you taking the time to go through this. 
      </motion.p>
      
      <motion.p 
        className="main-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        I'll reach out soon. Looking forward to connecting! ✨
      </motion.p>
      
      <motion.div 
        className="closing-note"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className="note">You can close this page now</p>
      </motion.div>
    </div>
  );
}

export default ThankYou;
