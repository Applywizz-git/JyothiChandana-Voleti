import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

   const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-[#0F172A] transition-colors duration-500 relative overflow-hidden"
    >
      {/* very soft background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="text-center" variants={cardVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Experience
            </h2>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              A journey of transforming data into actionable insights across leading organizations
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-violet-500 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className={`flex flex-col lg:flex-row items-stretch gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                variants={cardVariants}
              >
                {/* Company Info */}
                <div className="lg:w-1/3">
                  <motion.div
                    className="
                      h-full rounded-2xl p-6
                      border border-slate-200/70 dark:border-white/10
                      bg-white/90 dark:bg-white/5 backdrop-blur
                      hover:border-teal-400/50 transition-all duration-300
                    "
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(20,184,166,.12)' }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {experience.company}
                        </h3>
                        <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
                      </div>

                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
                          {experience.role}
                        </h4>

                        <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                          <MapPin size={16} className="text-teal-500" />
                          <span className="text-sm">{experience.location}</span>
                        </div>

                        <div className="flex items-center space-x-2 text-slate-700 dark:text-slate-300">
                          <Calendar size={16} className="text-teal-500" />
                          <span className="text-sm">{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Achievements */}
                <div className="lg:w-2/3">
                  <motion.div
                    className="
                      h-full rounded-2xl p-6
                      border border-slate-200/70 dark:border-white/10
                      bg-white/90 dark:bg-white/5 backdrop-blur
                      hover:border-teal-400/50 transition-all duration-300
                    "
                    whileHover={{ scale: 1.01, boxShadow: '0 20px 60px rgba(20,184,166,.12)' }}
                  >
                    <h5 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                      <ChevronRight size={20} className="text-teal-500 mr-2" />
                      Key Achievements
                    </h5>

                    <div className="grid gap-3">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          className="flex items-start space-x-3 group"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: (index * 0.3) + (achievementIndex * 0.1)
                          }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-violet-400 rounded-full mt-2 group-hover:scale-125 transition-transform" />
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
