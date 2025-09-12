import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Award, Calendar } from 'lucide-react';
import { certifications } from '../data/certifications';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="text-center" variants={cardVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              Certifications
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Industry-recognized credentials demonstrating expertise in cloud platforms and data technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-violet-500 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="group perspective-1000"
                variants={cardVariants}
              >
                <motion.div
                  className="relative bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 dark:border-slate-700/50 hover:border-teal-400/50 transition-all duration-300 transform-gpu preserve-3d"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    boxShadow: '0 20px 60px rgba(20, 184, 166, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>

                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className="flex items-center justify-between">
                      <motion.div
                        className="p-3 bg-gradient-to-r from-teal-400/20 to-violet-500/20 rounded-xl"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Award size={24} className="text-teal-400" />
                      </motion.div>
                      
                      <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400">
                        <Calendar size={16} />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-teal-400 transition-colors">
                        {cert.name}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-300 font-medium">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Verify button */}
                    {cert.verifyUrl && (
                      <motion.a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium text-sm group"
                        whileHover={{ x: 5 }}
                      >
                        <span>Verify Credential</span>
                        <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
                      </motion.a>
                    )}

                    {/* Badge decoration */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional certifications note */}
          <motion.div
            className="text-center bg-gradient-to-r from-teal-500/10 to-violet-500/10 rounded-2xl p-6 border border-teal-400/20"
            variants={cardVariants}
          >
            <p className="text-slate-600 dark:text-slate-300">
              <strong className="text-slate-800 dark:text-white">Continuous Learning:</strong> 
              {' '}Actively pursuing additional certifications in Azure, GCP, and AWS to stay current 
              with evolving cloud technologies and data engineering best practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;