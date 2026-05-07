
export interface ProjectDetail {
  title: string;
  description: string;
  imageId?: string;
  highlights?: string[];
}

export interface Project {
  id: string;
 number: number;
  category: string;
  title: string;
  description: string;
  tools: string[];
  imageId: string;
  link?: string;
  details?: ProjectDetail;
}

export interface ExpertiseItem {
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
