import { useState } from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  image: string;
  points: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Car Rental Management System",
    image: "/car-rental.png", // put this image in /public
    points: [
      "Designed SQL relational DB for vehicles, customers, and transactions.",
      "Automated ETL with Python & JDBC to speed refresh and reduce manual work.",
      "Built Power BI dashboards with advanced SQL delivering fleet insights.",
    ],
  },
  {
    title: "Time-Series Forecasting & Analysis",
    image: "/time-series.jpg", // put this image in /public
    points: [
      "Implemented ARIMA, Prophet & LSTM for high-accuracy stock trend prediction.",
      "Preprocessed & visualized data with Pandas, NumPy, Matplotlib, Seaborn.",
      "Automated pipelines using TensorFlow/Keras & Scikit-learn for retraining.",
    ],
  },
];

export default function Projects() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section
  id="projects"
  className="relative py-20 sm:py-24 bg-white dark:bg-[#0F172A] transition-colors duration-700"
>
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl bg-teal-500/10 dark:bg-teal-500/20" />
        <div className="absolute -bottom-28 -right-24 w-[26rem] h-[26rem] rounded-full blur-3xl bg-violet-500/10 dark:bg-violet-500/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ---------- Heading (matches your Experience style) ---------- */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Real-world builds featuring SQL, Python ETL, dashboards, and
            machine learning for time-series forecasting.
          </p>
          <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-teal-400 to-violet-500" />
        </div>

        {/* ---------- Two clickable cards ---------- */}
        <div className="grid gap-10 md:grid-cols-2">
          {PROJECTS.map((p, i) => {

            return (
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.015 }}
                // Click-to-glow effect: ring + drop shadow + subtle pulse when active
                className={[
                  "group relative overflow-hidden rounded-3xl",
                  "border border-slate-200 dark:border-white/10",
                  "bg-white dark:bg-slate-900",
                  "shadow-lg hover:shadow-2xl transition-all duration-500",
                  "focus:outline-none",
                ].join(" ")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                  }
                }}
              >
                {/* image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* gradient on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* top-left id badge */}
                  <div className="absolute left-4 top-4 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                  </div>
                </div>

                {/* content */}
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                    {p.title}
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    {p.points.map((pt, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.08 }}
                        viewport={{ once: true }}
                      >
                        <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
                        <span>{pt}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* subtle animated glow border overlay on active */}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
