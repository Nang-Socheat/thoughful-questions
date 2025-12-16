import React from 'react';
import { motion } from 'framer-motion';

function RelationshipQuestion({ onYes, onNo }) {
  return (
    <div className="content">
      <motion.div
        className="icon emoji-float"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        💭
      </motion.div>
      
      <motion.h2 
        className="question"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Quick question...
      </motion.h2>
      
      <motion.p 
        className="question-sub"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Are you currently in a relationship?
      </motion.p>
      
      <motion.p 
        className="note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Just trying to be respectful of your situation
      </motion.p>
      
      <motion.div 
        className="button-group"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="btn btn-secondary"
          onClick={onYes}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Yes, I am
        </motion.button>
        <motion.button
          className="btn btn-primary"
          onClick={onNo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          No, I'm not
        </motion.button>
      </motion.div>
    </div>
  );
}

export default RelationshipQuestion;
