// TypeScript interfaces for Resources page

export interface BuilderKit {
  id: string;
  name: string;
  description: string;
  tags: string[];
  features: string[];
  hasForm: boolean;
  formType?: 'prd' | 'pitch-master' | 'branding' | 'social-media' | 'design-system' | 'tech-stack' | 'research';
  icon?: string;
  docsUrl?: string;
}

export interface TechStack {
  id: string;
  name: string;
  description: string;
  category: TechCategory[];
  docsUrl: string;
  icon?: string;
}

export type TechCategory =
  | 'AI Vibe'
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'API'
  | 'Authentication'
  | 'ORM'
  | 'Solana';

export interface FormStep {
  id: number;
  title: string;
  fields: FormField[];
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'multiselect' | 'checkbox';
  placeholder?: string;
  required: boolean;
  options?: string[];
  description?: string;
}
