import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const cards = [
  {
    title: "Masters in Data Science",
    school: "The University of Texas at Arlington",
    period: "Aug 2023 – Dec 2024",
    location: "Arlington, TX",
    content:
      "Focused on advanced algorithms, cloud-native data projects, and data visualization techniques.",
  },
  {
    title: "Bachelors in Information Technology",
    school: "NRI Institute of Technology",
    period: "Jun 2018 – Apr 2022",
    location: "Vijayawada, AP",
    content:
      "Built a strong foundation in computer science fundamentals, completed team-led capstone projects, and developed an industry-ready mindset.",
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-20 bg-white dark:bg-[#0F172A] transition-colors duration-500"
    >
      {/* glowing accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-8 w-96 h-96 bg-teal-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-8 w-96 h-96 bg-violet-500/5 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            Academic journey shaping expertise in data science and technology.
          </p>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-teal-400 to-violet-500" />
        </motion.div>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Title & school */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-300 flex items-center justify-center">
                    <GraduationCap className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {c.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {c.school}
                    </p>
                  </div>
                </div>
              </div>

              {/* Period */}
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <Calendar className="size-4 text-teal-500" />
                <span>{c.period}</span>
              </div>

              {/* Location */}
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <MapPin className="size-4 text-violet-500" />
                <span>{c.location}</span>
              </div>

              {/* Content/Description */}
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {c.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
