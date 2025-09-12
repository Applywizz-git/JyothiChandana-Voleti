import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentLetter, setCurrentLetter] = useState(0);
  const letters = ['J', 'C'];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLetter < letters.length - 1) {
        setCurrentLetter(prev => prev + 1);
      } else {
        setTimeout(onComplete, 800);
      }
    }, 600);

    return () => clearTimeout(timer);
  }, [currentLetter, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-slate-900 to-violet-500/10" />
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Letters container */}
      <div className="relative flex items-center justify-center space-x-4">
        {letters.map((letter, index) => (
          <motion.div
            key={letter}
            className="relative"
            initial={{ scale: 0, rotateY: -180, opacity: 0 }}
            animate={currentLetter >= index ? {
              scale: [0, 1.2, 1],
              rotateY: [180, 0],
              opacity: 1,
            } : {}}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-500">
              {letter}
            </div>
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 text-8xl font-bold text-teal-400/20 blur-md"
              animate={currentLetter >= index ? {
                scale: [1, 1.1, 1],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Loading progress */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-teal-400 to-violet-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        <motion.p
          className="text-slate-400 text-sm text-center mt-4 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading Portfolio...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;