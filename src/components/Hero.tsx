import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown, Mail, MapPin, Phone } from "lucide-react";

const Hero: React.FC = () => {
  const [currentTitle] = useState(0);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
       className="py-20 bg-white dark:bg-[#0F172A] transition-colors duration-500 relative overflow-hidden"
    >
      {/* floating background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-teal-400/10 blur-3xl rounded-full dark:bg-teal-500/20" />
        <div className="absolute bottom-10 right-10 w-[22rem] h-[22rem] bg-violet-400/10 blur-3xl rounded-full dark:bg-violet-500/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Animated Title */}
            <div className="space-y-4">
              <motion.div
                key={currentTitle}
                className="h-16 flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* Name */}
              <motion.h2
                className="
                  text-4xl md:text-5xl lg:text-6xl font-bold
                  bg-gradient-to-r from-teal-400 via-emerald-400 to-violet-400
                  bg-clip-text text-transparent
                "
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Jyothi Chandana Voleti
              </motion.h2>

              {/* Role */}
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300 font-semibold">
                  Data Analyst & Data Engineer
                </h3>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-400 to-violet-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.div>
            </div>

            {/* Bio */}
            <motion.p
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Results-driven Data Analyst with 3+ years of experience transforming
              complex datasets into actionable insights. Expert in building ETL
              pipelines, creating interactive dashboards, and delivering
              decision-ready analytics using modern cloud technologies.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              className="flex flex-wrap gap-6 text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-teal-400" />
                <span>Hutto, TX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-teal-400" />
                <span>+1 (682) 336-1980</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-teal-400" />
                <span>chandanajvoleti@gmail.com</span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>

              <motion.a
                href="/assets/resume.pdf"
                download="Jyothi_Chandana_Voleti_Resume.pdf"
                className="px-8 py-4 border-2 border-teal-400 text-teal-400 font-semibold rounded-lg hover:bg-teal-400 hover:text-slate-900 transition-all duration-200 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-violet-400/20 rounded-3xl blur-3xl" />

              {/* Profile Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur">
                <img
                  src="/image.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-slate-500 dark:text-slate-400 hover:text-teal-400"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
