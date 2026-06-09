export interface KeyMetric {
  value: string;
  label: string;
}

export interface DomainContribution {
  iconId: string;
  title: string;
  description: string;
  achievements: string[];
  tag: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  company: string;
  role: string;
  duration: string;
  downloads: string;
  category: string;
  description: string;
  challenge: string;
  impact: string[];
  techStack: string[];
  imageUrl: string;
}

export interface CareerMilestone {
  role: string;
  company: string;
  period: string;
  description: string;
  isFeatured?: boolean;
  achievements?: string[];
  challenge?: string;
  collaborators?: string;
  skills?: string[];
}

export interface CapabilityGroup {
  iconId: string;
  title: string;
  description: string;
  skills: string[];
}

export interface CoreValue {
  iconId: string;
  title: string;
  description: string;
}
