import { motion , type Variants} from "framer-motion";
import { Code2, Cloud, Database, Settings, LineChart } from "lucide-react";

type RingProps = {
  label: string;
  value: number;
  icon: React.ReactNode;
};

const progressRings: RingProps[] = [
  { label: "Python", value: 95, icon: <Code2 className="w-5 h-5" /> },
  { label: "SQL", value: 90, icon: <Database className="w-5 h-5" /> },
  { label: "Spark", value: 85, icon: <Settings className="w-5 h-5" /> },
  { label: "Cloud", value: 88, icon: <Cloud className="w-5 h-5" /> },
  { label: "Analytics", value: 86, icon: <LineChart className="w-5 h-5" /> },
];

const ringVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const chip =
  "inline-flex items-center px-3.5 py-2 rounded-xl border " +
  // Light theme visibility: medium-dark text & subtle border
  "text-slate-700 border-slate-200 " +
  // Dark theme unchanged
  "dark:text-slate-200 dark:border-slate-700 " +
  // 3D-ish hover & glow
  "bg-white/70 dark:bg-slate-800/40 backdrop-blur-md shadow-sm " +
  "hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 " +
  "hover:border-teal-400/40 hover:shadow-teal-500/10";

const card =
  "group relative rounded-2xl p-6 border " +
  // Light theme card bg and border for readability
  "bg-white/90 border-slate-200 " +
  // Dark theme same appearance as before
  "dark:bg-slate-800/50 dark:border-slate-700/60 " +
  // Depth & subtle 3D
  "shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300";

const SectionTitle = () => (
  <div className="text-center mb-12">
    {/* Heading: black in light, white in dark */}
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
      Skills & Technologies
    </h2>
    <p className="mt-4 text-lg max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
      A comprehensive toolkit spanning data engineering, analytics, cloud
      platforms, and modern development practices.
    </p>
    {/* Accent underline */}
    <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-teal-400 to-violet-500" />
  </div>
);

const Ring = ({ label, value, icon }: RingProps) => {
  const circumference = 2 * Math.PI * 36; // r=36
  const offset = circumference - (value / 100) * circumference;

  return (
    <div
      className={
        "relative flex flex-col items-center justify-center rounded-2xl border " +
        // Better contrast in light
        "bg-white/90 border-slate-200 " +
        // Dark unchanged
        "dark:bg-slate-800/50 dark:border-slate-700/60 " +
        "p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      }
    >
      <div className="absolute -top-3 -left-3 rounded-xl bg-gradient-to-br from-teal-500/10 to-violet-500/10 p-2 border border-slate-200 dark:border-slate-700">
        <span className="text-teal-600 dark:text-teal-400">{icon}</span>
      </div>

      <svg width="120" height="120" className="-mb-1">
        <defs>
          <linearGradient id="ringGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>

        {/* Track */}
        <circle
          cx="60"
          cy="60"
          r="36"
          stroke="currentColor"
          className="text-slate-200 dark:text-slate-700"
          strokeWidth="10"
          fill="none"
        />
        {/* Progress */}
        <circle
          cx="60"
          cy="60"
          r="36"
          stroke="url(#ringGrad)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 60 60)"
          className="drop-shadow-[0_2px_10px_rgba(124,58,237,.25)]"
        />
      </svg>

      <div className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
        {value}%
      </div>
      <div className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className={
        // Light theme background changed to white, dark remains blue/unchanged
        "relative py-20 bg-white dark:bg-[#0F1B2E]"
      }
    >
      {/* soft blobs – unchanged in dark, subtle in light */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl dark:bg-teal-500/10" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle />

        {/* Top 5 rings */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 mb-12">
          {progressRings.map((r, i) => (
            <motion.div
              key={r.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={ringVariants}
            >
              <Ring {...r} />
            </motion.div>
          ))}
        </div>

        {/* Skill categories */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Programming & Scripting */}
          <div className={card}>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Programming &amp; Scripting
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "PySpark",
                "SQL",
                "R",
                "Java",
                "Shell Scripting",
              ].map((s) => (
                <span key={s} className={chip}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud Platforms */}
          <div className={card}>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Cloud Platforms
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {[
                  "Azure (Databricks)",
                  "Data Factory",
                  "Azure SQL",
                  "Blob Storage",
                  "Azure Synapse",
                  "Azure ML",
                ].map((s) => (
                  <span key={s} className={chip}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "GCP (Vertex AI)",
                  "Dataflow",
                  "BigQuery",
                  "Cloud Storage",
                  "Pub/Sub",
                ].map((s) => (
                  <span key={s} className={chip}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["AWS (S3)", "Redshift", "Lambda", "Glue"].map((s) => (
                  <span key={s} className={chip}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Big Data & Streaming */}
          <div className={card}>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Big Data &amp; Streaming Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Apache Spark",
                "Apache Kafka",
                "Hadoop",
                "Apache Airflow",
                "Dataflow",
              ].map((s) => (
                <span key={s} className={chip}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Databases & Warehousing */}
          <div className={card}>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Databases &amp; Data Warehousing
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "SQL Server",
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "NoSQL",
                "Data Lake",
                "Data Warehouse Architecture",
              ].map((s) => (
                <span key={s} className={chip}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Data Engineering */}
          <div className={card}>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Data Engineering
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "ETL Pipeline Design",
                "Batch & Streaming Data Processing",
                "Data Validation",
                "Data Transformation",
                "Data Integration",
                "Data Modeling",
              ].map((s) => (
                <span key={s} className={chip}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* ML & Analytics */}
          <div className={card}>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Machine Learning &amp; Analytics
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Supervised & Unsupervised Learning",
                "Time-Series Forecasting",
                "Predictive Modeling",
                "Statistical Analysis",
                "Feature Engineering",
              ].map((s) => (
                <span key={s} className={chip}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Visualization & BI */}
          <div className={card}>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Data Visualization &amp; BI Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Power BI",
                "Tableau",
                "AWS QuickSight",
                "Matplotlib",
                "Seaborn",
                "Plotly",
              ].map((s) => (
                <span key={s} className={chip}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Orchestration */}
          <div className={card}>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              DevOps &amp; Orchestration
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Apache Airflow",
                "CI/CD Pipelines",
                "Docker",
                "Kubernetes",
                "Git",
              ].map((s) => (
                <span key={s} className={chip}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Others */}
          <div className={card}>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
              Others
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "REST APIs",
                "JSON",
                "XML",
                "Data Pipeline Optimization",
                "Performance Tuning",
                "Cloud Security Fundamentals",
              ].map((s) => (
                <span key={s} className={chip}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
