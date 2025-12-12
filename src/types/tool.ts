export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  pricing: 'Free' | 'Freemium' | 'Paid';
  imageUrl: string;
  features: string[];
  url: string;
}

export type Category = 
  | 'All' 
  | 'Design' 
  | 'Prototyping' 
  | 'Research' 
  | 'User Testing' 
  | 'Writing' 
  | 'Analytics'
  | 'Branding'
  | 'Illustration'
  | 'Video'
  | 'Audio'
  | 'Photo Editing'
  | 'Productivity'
  | 'Animation'
  | 'Surveys'
  | 'Information Architecture'
  | '3D'
  | 'Marketing'
  | 'Localization'
  | 'Editing'
  | 'Typography'
  | 'Project Management'
  | 'Accessibility'
  | 'Dev Handoff'
  | 'Design Systems'
  | 'User Flows'
  | 'Diagramming'
  | 'Social Media'
  | 'Journey Mapping'
  | 'Analysis'
  | 'Personas'
  | 'Planning';

export type PricingFilter = 'All' | 'Free' | 'Freemium' | 'Paid';
