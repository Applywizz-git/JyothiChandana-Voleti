import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-[#0F172A] border-t border-slate-200/70 dark:border-slate-800 transition-colors duration-500">
      {/* subtle vignette & orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-teal-500/5 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-[26rem] h-[26rem] bg-violet-500/5 blur-3xl rounded-full" />
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(20,184,166,.4)' }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-teal-400 to-violet-500 rounded-lg flex items-center justify-center font-bold text-white text-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                JC
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Jyothi Chandana Voleti
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Data Analyst & Data Engineer
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 italic max-w-sm">
              “Results-driven Data Analyst transforming complex datasets into actionable insights with cloud and modern BI tools.”
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-slate-700 dark:text-slate-300 hover:text-teal-500 transition-colors duration-200 text-sm"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-end space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="mailto:chandanajvoleti@gmail.com"
              className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-teal-500 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={18} />
              <span className="text-sm">Email</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/jyothi-chandana-voleti-11v/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-700 dark:text-slate-300 hover:text-teal-500 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm">LinkedIn</span>
            </motion.a>

            <motion.a
              href="/assets/resume.pdf"
              download="Jyothi_Chandana_Voleti_Resume.pdf"
              className="flex items-center space-x-2 px-4 py-2 bg-teal-500/10 text-teal-700 dark:text-teal-300 border border-teal-500/20 dark:border-teal-500/30 rounded-lg hover:bg-teal-500/20 transition-all duration-200"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(20,184,166,.2)' }}
            >
              <Download size={16} />
              <span className="text-sm">Resume</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {currentYear} Jyothi Chandana Voleti — Built with React, TypeScript, Tailwind & Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
