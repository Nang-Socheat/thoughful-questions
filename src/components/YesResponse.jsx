import React from 'react';
import { motion } from 'framer-motion';

function YesResponse() {
  return (
    <div className="content">
      <motion.div
        className="icon"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        🌟
      </motion.div>
      
      <motion.h2 
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        I appreciate your honesty
      </motion.h2>
      
      <motion.p 
        className="main-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        I completely respect that, and I genuinely wish you and your partner all the happiness in the world.
      </motion.p>
      
      <motion.p 
        className="main-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Thank you for taking the time to check this out. Take care! ✨
      </motion.p>
    </div>
  );
}

export default YesResponse;
