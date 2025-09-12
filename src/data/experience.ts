import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Siri Data Analytics LLC',
    role: 'Data Analyst',
    location: 'Texas',
    period: 'Apr 2025 – Present',
    achievements: [
      'Analyze large datasets with Python/SQL/PySpark; improved efficiency by 25%',
      'Automated ADF/GCP Dataflow pipelines; ensured timely, accurate datasets',
      'Built Power BI/Tableau dashboards; reduced manual effort by 35%',
      'Optimized Azure SQL/BigQuery queries; +40% retrieval speed',
      'Data validation & QA in Python; –20% reporting errors',
      'Partnered with stakeholders to translate needs into models & reports',
      'Brought ML outputs (Vertex AI/Azure ML) into reports; +20% forecast accuracy',
      'Mentored juniors on viz, SQL optimization, cloud data integration'
    ]
  },
  {
    id: '2',
    company: 'IT OpenDoors, LLC',
    role: 'Data Engineer',
    location: 'Texas',
    period: 'May 2024 – Dec 2024',
    achievements: [
      'Databricks/Spark ETL for millions of records; –30% processing time',
      'Python data validation frameworks; +20% reliability',
      'GCP Dataflow + Vertex AI for streaming & predictive ops',
      'ADF workflows for Azure SQL/Blob; –25% manual handling',
      'Data lake/warehouse architecture; faster analytics availability',
      'Kafka real-time streams; –20% reporting latency',
      'Automated Power BI workflows; –4h per cycle'
    ]
  },
  {
    id: '3',
    company: 'DXC Technology',
    role: 'Associate Professional Data Analyst',
    location: 'Bangalore, IN',
    period: 'Jun 2022 – Jul 2023',
    achievements: [
      'Deployed anomaly detection (Python/SQL); –15% false positives',
      'Automated ETL; +20% report turn-around',
      'Optimized heavy queries; +40% speed',
      'Centralized pipelines via Kafka; –25% reconciliation time',
      'Power BI dashboards with drill-downs; –25% manual reporting'
    ]
  },
  {
  id: '4',
  company: 'VizionTech Analytics Pvt. Ltd',
  role: 'Data Analyst',
  location: 'Vijayawada, AP',
  period: 'Jun 2021 – May 2022',
  achievements: [
    'Executed SQL-based analytics to transform raw data → structured insights for leadership decisions',
    'Implemented Python scripts for data cleansing/transformation → +15% data accuracy',
    'Built interactive Power BI/Tableau dashboards → –20% manual reporting effort',
    'Streamlined ETL workflows via Azure Data Factory + AWS → improved real-time analytics',
    'Performed data quality audits + anomaly detection → –20% reporting errors',
    'Designed relational schemas & optimized models → faster analytics-ready datasets',
    'Enhanced SQL query performance via indexing → –25% data retrieval time',
    'Collaborated on predictive analytics models → improved operational efficiency & planning'
  ]
}

];