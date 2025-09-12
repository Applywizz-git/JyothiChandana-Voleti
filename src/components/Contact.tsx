import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 2000));
    alert("✅ Thank you! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-[#0F172A] transition-colors duration-500 relative overflow-hidden"
    >
      {/* Glow BG */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div className="text-center" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Let’s collaborate to turn data into actionable insights.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-violet-500 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Form + Info */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                onSubmit={handleSubmit}
                className="bg-white/80 dark:bg-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-6 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Send a Message
                </h3>

                {['name', 'email'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 capitalize">
                      {field}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field as 'name' | 'email']}
                      onChange={handleInputChange}
                      required
                      placeholder={
                        field === 'name'
                          ? 'Enter your full name'
                          : 'Enter your email address'
                      }
                      className="w-full mt-2 px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-teal-400 dark:text-white transition"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    className="w-full mt-2 px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-teal-400 dark:text-white transition resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition disabled:opacity-50"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Sending...' : (
                    <span className="flex items-center justify-center gap-2">
                      <Send size={18}/>Send
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div className="space-y-6" variants={itemVariants}>
              {[
                { icon: Mail, label: 'Email', value: 'chandanajvoleti@gmail.com', link: 'mailto:chandanajvoleti@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+1 (682) 336-1980', link: 'tel:+16823361980' },
                { icon: MapPin, label: 'Location', value: 'Hutto, TX', link: '#' },
              ].map((c) => (
                <motion.a
                  href={c.link}
                  key={c.label}
                  className="flex items-center gap-4 bg-white/80 dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-400 transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <c.icon className="text-teal-500" />
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{c.label}</h4>
                    <p className="text-slate-700 dark:text-slate-300">{c.value}</p>
                  </div>
                </motion.a>
              ))}

              <motion.a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 py-3 px-4 border-2 border-teal-400 text-teal-600 dark:text-teal-400 font-semibold rounded-lg hover:bg-teal-400 hover:text-white transition"
                whileHover={{ scale: 1.02 }}
              >
                <Download size={18} /> Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
