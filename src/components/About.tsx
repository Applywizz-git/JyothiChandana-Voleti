import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Zap, Target, Users, Database, BarChart3 } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const stats = [
    { label: 'Years of Experience', value: '3+', icon: Code },
    { label: 'Projects Completed', value: '25+', icon: Zap },
    { label: 'Data Pipeline Efficiency', value: '40%', icon: Target },
    { label: 'Team Collaborations', value: '15+', icon: Users }
  ];

  const expertise = [
    'Data Pipeline Architecture & ETL Development',
    'Cloud Analytics (Azure, GCP, AWS)',
    'Machine Learning & Predictive Modeling',
    'Business Intelligence & Data Visualization',
    'Statistical Analysis & Performance Optimization',
    'Cross-functional Team Leadership & Mentoring'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-violet-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Description */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I am a results-driven Data Analyst with 3+ years of experience transforming complex datasets 
                  into actionable insights using cutting-edge technologies like Python, SQL, PySpark, and R. 
                  My expertise spans across cloud platforms including Azure, GCP, and AWS, where I build 
                  scalable ETL pipelines and integrate multi-source data seamlessly.
                </p>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  I specialize in creating interactive dashboards with Power BI, Tableau, and QuickSight, 
                  delivering reliable, decision-ready analytics for stakeholders. My background includes 
                  anomaly detection, predictive modeling, and statistical analysis, helping organizations 
                  make data-driven decisions that drive business growth and operational efficiency.
                </p>
              </div>

              {/* Expertise List */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white flex items-center">
                  <Database className="mr-3 text-teal-500" size={24} />
                  Core Expertise
                </h3>
                <div className="grid gap-3">
                  {expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 text-slate-600 dark:text-slate-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-violet-500 rounded-full" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 dark:border-slate-700/50 hover:border-teal-400/50 transition-all duration-300"
                    variants={statVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 40px rgba(20, 184, 166, 0.1)'
                    }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 bg-gradient-to-r from-teal-400/20 to-violet-500/20 rounded-xl">
                        <stat.icon size={24} className="text-teal-400" />
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Achievement highlight */}
              <motion.div
                className="bg-gradient-to-r from-teal-500/10 to-violet-500/10 rounded-2xl p-6 border border-teal-400/20"
                variants={itemVariants}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-teal-400/20 rounded-lg">
                    <BarChart3 size={24} className="text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                      Impact-Driven Results
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      Consistently delivered measurable improvements: 40% faster query performance, 
                      35% reduction in manual effort, and 20% increase in forecast accuracy across 
                      multiple organizations.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;