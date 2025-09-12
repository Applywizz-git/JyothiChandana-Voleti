import { Skill, SkillCategory } from '../types';

export const topSkills: Skill[] = [
  { name: 'Python', level: 95, category: 'Programming' },
  { name: 'SQL', level: 98, category: 'Database' },
  { name: 'PySpark', level: 90, category: 'Big Data' },
  { name: 'Power BI', level: 92, category: 'BI Tools' },
  { name: 'Tableau', level: 88, category: 'BI Tools' },
  { name: 'Azure Data Factory', level: 85, category: 'Cloud' }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Scripting',
    skills: ['Python', 'PySpark', 'SQL', 'R', 'Java', 'Shell Scripting', 'Scala', 'JavaScript']
  },
  {
    title: 'Cloud Platforms',
    skills: [
      'Azure (Databricks, Data Factory, Azure SQL, Blob Storage, Synapse, Azure ML)',
      'GCP (Vertex AI, Dataflow, BigQuery, Cloud Storage, Pub/Sub)',
      'AWS (S3, Redshift, Lambda, Glue, EMR, SageMaker)'
    ]
  },
  {
    title: 'Big Data & Streaming',
    skills: ['Apache Spark', 'Apache Kafka', 'Hadoop', 'Apache Airflow', 'Google Dataflow', 'Storm', 'Flink']
  },
  {
    title: 'Databases & Data Warehouses',
    skills: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra', 'Snowflake', 'Data Lake', 'Data Warehouse']
  },
  {
    title: 'Machine Learning & Analytics',
    skills: [
      'Supervised Learning', 'Unsupervised Learning', 'Time-Series Analysis', 
      'Predictive Modeling', 'Statistical Analysis', 'Feature Engineering', 
      'Deep Learning', 'NLP', 'Computer Vision'
    ]
  },
  {
    title: 'BI & Visualization Tools',
    skills: ['Power BI', 'Tableau', 'AWS QuickSight', 'Looker', 'Matplotlib', 'Seaborn', 'Plotly', 'D3.js', 'Grafana']
  },
  {
    title: 'DevOps & Orchestration',
    skills: ['Apache Airflow', 'CI/CD', 'Docker', 'Kubernetes', 'Git', 'Jenkins', 'Terraform', 'Ansible']
  },
  {
    title: 'Data Integration & APIs',
    skills: ['REST APIs', 'GraphQL', 'JSON/XML', 'ETL/ELT', 'Pipeline Optimization', 'Performance Tuning', 'Data Migration']
  },
  {
    title: 'Analytics & Statistics',
    skills: ['Statistical Modeling', 'A/B Testing', 'Hypothesis Testing', 'Regression Analysis', 'Clustering', 'Classification']
  },
  {
    title: 'Security & Governance',
    skills: ['Cloud Security', 'Data Privacy', 'GDPR Compliance', 'Data Governance', 'Role-Based Access Control', 'Encryption']
  }
];