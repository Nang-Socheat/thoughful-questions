import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Import components
import Introduction from './components/Introduction';
import RelationshipQuestion from './components/RelationshipQuestion';
import YesResponse from './components/YesResponse';
import NoResponse from './components/NoResponse';
import ThankYou from './components/ThankYou';

function App() {
  const [currentSection, setCurrentSection] = useState('intro');
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  // Darker, more contrasting gradient backgrounds
  const backgrounds = [
    'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', // Dark blue
    'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)', // Ocean deep
    'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', // Slate gray
    'linear-gradient(135deg, #232526 0%, #414345 100%)', // Charcoal
    'linear-gradient(135deg, #4b134f 0%, #c94b4b 100%)', // Dark purple to red
  ];

  // Change background gradually
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -50, 
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  const renderSection = () => {
    switch(currentSection) {
      case 'intro':
        return <Introduction onContinue={() => setCurrentSection('question')} />;
      case 'question':
        return <RelationshipQuestion 
                  onYes={() => setCurrentSection('yes-response')}
                  onNo={() => setCurrentSection('no-response')}
               />;
      case 'yes-response':
        return <YesResponse />;
      case 'no-response':
        return <NoResponse onSubmit={() => setCurrentSection('thank-you')} />;
      case 'thank-you':
        return <ThankYou />;
      default:
        return <Introduction onContinue={() => setCurrentSection('question')} />;
    }
  };

  return (
    <div className="app">
      <motion.div 
        className="background"
        animate={{ 
          background: backgrounds[backgroundIndex]
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="section-wrapper"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
