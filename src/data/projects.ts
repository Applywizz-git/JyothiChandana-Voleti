import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Car Rental Management System',
    description: 'Comprehensive data pipeline and analytics solution for vehicle fleet management with real-time tracking and performance insights.',
    technologies: ['Python', 'SQL', 'Power BI', 'JDBC', 'PostgreSQL'],
    highlights: [
      'SQL relational schema for vehicles/customers/transactions (real-time tracking)',
      'Python ETL with JDBC for automated ingestion',
      'Advanced SQL + Power BI dashboards for fleet KPIs'
    ],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: '2',
    title: 'Time-Series Forecasting & Analysis',
    description: 'Advanced predictive analytics platform using multiple ML algorithms for high-accuracy stock market and business forecasting.',
    technologies: ['Python', 'ARIMA', 'Prophet', 'LSTM', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    highlights: [
      'High-accuracy predictions from historical stock data',
      'Automated pipelines (TensorFlow/Keras & scikit-learn) for retraining + visualization',
      'Real-time model performance monitoring and alerts'
    ],
    demoUrl: '#',
    codeUrl: '#'
  },
]