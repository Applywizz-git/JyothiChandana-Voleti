export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  demoUrl?: string;
  codeUrl?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}